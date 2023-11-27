import { useState, useEffect } from "react";
import axios from "axios";
import MainUrl from "../../../connection config/url";
import { CSSTransition } from "react-transition-group";
import Swal from 'sweetalert2';

import NavBar from "../../../components/NavbarPsicologo";
import Rodape from "../../../components/Rodape";

import Psicologo1 from "../../../assets/imgs/psicologo1.png";

const Psicologo = ({ index, alterarValor, id, nome, cor, imgUser, dia, hora }) =>{
    const [aberta, setAberta] = useState(false);

    const cancelarConsulta = () =>{
        axios.post(MainUrl + "cancelarConsulta.php", JSON.stringify({ id: id }))
        .then((e) => {
            if(e?.data?.response){
                alterarValor(index, "c");
            };
        });
    }

    const realizarConsulta = () =>{
        axios.post(MainUrl + "realizarConsulta.php", JSON.stringify({ id: id }))
        .then((e) => {
            if(e?.data?.response){
                alterarValor(index, "r");
            };
        });
    }

    const exibirMensagem = (id) => {
        Swal.fire({
            title: "Cancelar Consulta",
            showDenyButton: true,
            confirmButtonText: "Cancelar consulta",
            denyButtonText: `Não cancelar`
        }).then((result) => {
            if (result.isConfirmed) {
              cancelarConsulta(id);
            } else if (result.isDenied) {
              Swal.fire("Consulta não cancelada");
            }
        });
    }


    return(
        aberta
        ?
        <div onClick={() => setAberta(!aberta)} className={`w-full px-4 py-2 my-3 leading-relaxed cursor-pointer flex items-center border border-black flex rounded-md border-r-8 hover:bg-gray-100 ${cor == "p" ? "border-r-yellow-500" : cor == "r" ? "border-r-green-500" : "border-r-red-500"}`}>
            <img src={imgUser} className="md:w-12 md:h-12 rounded-full" alt="imagem_usuario" />
            <div className="ml-4 flex justify-between grow">
                <div>
                    <h2 className="text-lg">{nome}</h2>
                    <h2>Data da consulta: {dia.split("-")[2] + "/" + dia.split("-")[1] + "/" + dia.split("-")[0]}</h2>
                    <h2>Horário: {hora.substring(0, 5)}</h2>
                </div>
                <div className="mx-6">
                    <h2 className={`underline ${cor == "p" ? "decoration-yellow-500" : cor == "r" ? "decoration-green-500" : "decoration-red-500"}`}>{
                        cor == "p" ? "Pendente: Esperando a data da consulta" : ( cor == "r" ? "Concluida: Realizada com sucesso" : "Cancelada: consulta não executada")
                    }</h2>
                </div>
                <div>
                    {
                        cor == "p" && 
                        <>
                            {
                                dia.split("-")[2] == new Date().getDate() &&
                                <p><a href="https://meet.google.com/" target="_blank"><button className="px-2 mb-2 rounded-md bg-green-200" onClick={() => realizarConsulta()}>Realizar Consulta</button></a></p>
                            }
                            <p><button className="px-2 rounded-md bg-orange-200">Reagendar</button></p>
                            <p><button className="px-2 mt-2 rounded-md bg-red-200" onClick={() => exibirMensagem(id)}>Cancelar</button></p>
                        </>
                    }
                </div>
            </div>
        </div>
        :
        <div onClick={() => setAberta(!aberta)} className={`w-full px-4 py-2 my-3 cursor-pointer flex items-center border border-black flex rounded-md border-r-8 ${cor === "p" ? "border-r-yellow-500" : cor === "r" ? "border-r-green-500" : cor === "c" && "border-r-red-500"}`}>
            <img src={imgUser} className="md:w-12 md:h-12 rounded-full" alt="imagem_usuario" />
            <div className="ml-4 flex justify-between grow">
                <div className="flex items-center">
                    <h2 className="text-lg">{nome}</h2>
                </div>
                <div>
                    <h2>{hora}</h2>
                    <h2>{dia.split("-")[2] + "/" + dia.split("-")[1] + "/" + dia.split("-")[0]}</h2>
                </div>
            </div>
        </div>
    );
}

const ConsultaCliente = () =>{
    const [anima, setAnima] = useState(false);
    const [inicio, setInicio] = useState(false);

    const [consultas, setConsultas] = useState([]);
    const [psicologos, setPsicologos] = useState([]);

    const [filtro, setFiltro] = useState();

    const alterarValor = (i, tipo) => {
        let copiaConsultas = [...consultas];
        copiaConsultas[i].id_realizada = tipo;
        setConsultas(copiaConsultas);
    }

    useEffect(() => {
        setAnima(true);

        if(inicio){
            const fetchData = async () => {
                if (inicio) {
                    let psicologo = JSON.parse(sessionStorage.getItem("token"));
                    const consultasResponse = await axios.post(MainUrl + "buscarConsultasPsicologo.php", JSON.stringify({ id: psicologo.id }));
                    setConsultas(consultasResponse?.data?.response);
                
                    if(consultasResponse.data.response){
                        for (let consulta of consultasResponse.data.response) {
                            const psicologoResponse = await axios.post(MainUrl + "buscarClientesConsulta.php", JSON.stringify({ id: consulta.fk_cd_paciente }));
                            setPsicologos(prevPsicologos => [...prevPsicologos, psicologoResponse.data.response.nm_paciente]);
                        }
                    }
                } else {
                    setInicio(true);
                }
            };
        
            fetchData();
        } else{
            setInicio(true);
        }
    }, [inicio]);

    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex items-center justify-center bg-white md:bg-purple-100">
                <CSSTransition
                    in={anima}
                    timeout={1000}
                    classNames="page"
                    unmountOnExit
                >
                    <div className="mt-16 md:w-2/3 lg:w-6/12 border-b-4 border-b-violet-400 rounded-xl p-4 bg-white">
                        <h2 className="py-4 text-5xl text-center font-style">Histórico de Consultas</h2>
                        <div className="md:p-4">
                            <p className="text-gray-600">Filtros de consulta</p>
                            <div className="mb-4 grid grid-cols-3 ">
                                <div className={`p-2 cursor-pointer border border-yellow-400 rounded-md ${filtro == "p" && "bg-yellow-400"}`}
                                    onClick={() => {
                                        if(filtro == "p"){
                                            setFiltro();
                                        } else{
                                            setFiltro("p");
                                        }
                                    }
                                }>Consulta Pendente</div>
                                <div className={`p-2 cursor-pointer border mx-2 border-green-400 rounded-md ${filtro == "r" && "bg-green-400"}`}
                                    onClick={() => {
                                        if(filtro == "r"){
                                            setFiltro();
                                        } else{
                                            setFiltro("r");
                                        }
                                    }
                                }>Consulta Realizada</div>
                                <div className={`p-2 cursor-pointer border border-red-400 rounded-md ${filtro == "c" && "bg-red-400"}`}
                                    onClick={() => {
                                        if(filtro == "c"){
                                            setFiltro();
                                        } else{
                                            setFiltro("c");
                                        }
                                    }
                                }>Consulta Cancelada</div>
                            </div> 
                            <div className="flex flex-col ">
                            {
                                consultas && (
                                    filtro ? (
                                        consultas.map((consulta, index) => {
                                            if (filtro === consulta.id_realizada) {
                                                return (
                                                    <Psicologo
                                                        key={index}
                                                        index={index}
                                                        alterarValor={alterarValor}
                                                        id={consulta.id}
                                                        nome={psicologos[index]}
                                                        cor={consulta.id_realizada}
                                                        imgUser={Psicologo1}
                                                        dia={consulta.dt_consulta}
                                                        hora={consulta.hr_consulta}
                                                    />
                                                );
                                            }
                                        })
                                    ) : (
                                        consultas.map((consulta, index) => (
                                            <Psicologo
                                                key={index}
                                                index={index}
                                                alterarValor={alterarValor}
                                                id={consulta.cd_consulta}
                                                nome={psicologos[index]}
                                                cor={consulta.id_realizada}
                                                imgUser={Psicologo1}
                                                dia={consulta.dt_consulta}
                                                hora={consulta.hr_consulta}
                                            />
                                        ))
                                    )
                                )
                                ||
                                (<div></div>)
                            }
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
            <Rodape />
        </>
    );
}

export default ConsultaCliente;