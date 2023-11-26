import { useState, useEffect } from "react";
import axios from "axios";
import MainUrl from "../../../connection config/url";
import { CSSTransition } from "react-transition-group";

import NavBar from "../../../components/Navbar";
import Rodape from "../../../components/Rodape";

import Psicologo1 from "../../../assets/imgs/psicologo1.png";

const Psicologo = ({ nome, cor, imgUser, dia, hora }) =>{
    const [aberta, setAberta] = useState(false);

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
                        cor == "p" ? "Pendente: Esperando a data da consulta" : "Concluida: Realizada com sucesso"
                    }</h2>
                </div>
                <div>
                    <p><button className="px-2 rounded-md bg-orange-200">Reagendar</button></p>
                    <p><button className="px-2 mt-2 rounded-md bg-red-200">Cancelar</button></p>
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
                    <h2>{dia}</h2>
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

    useEffect(() => {
        setAnima(true);

        if(inicio){
            const fetchData = async () => {
                if (inicio) {
                  let paciente = JSON.parse(sessionStorage.getItem("token"));
                  const consultasResponse = await axios.post(MainUrl + "buscarConsultas.php", JSON.stringify({ id: paciente.id }));
                  setConsultas(consultasResponse.data.response);
            
                  for (let consulta of consultasResponse.data.response) {
                    const psicologoResponse = await axios.post(MainUrl + "buscarPsicologoConsulta.php", JSON.stringify({ id: consulta.fk_cd_psicologo }));
                    setPsicologos(prevPsicologos => [...prevPsicologos, psicologoResponse.data.response.nome]);
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
                    <div className="mt-16 md:w-2/3 lg:w-6/12 rounded-xl p-4 bg-white">
                        <h2 className="py-4 text-5xl text-center font-style">Histórico de Consultas</h2>
                        <div className="md:p-4">
                            <p className="text-gray-600">Filtros de consulta</p>
                            <div className="mb-4 grid grid-cols-3 ">
                                <div className={`p-2 cursor-pointer border border-yellow-400 rounded-md ${filtro == "p" && "bg-yellow-400"}`} onClick={() => setFiltro("p")}>Consulta Pendente</div>
                                <div className={`p-2 cursor-pointer border mx-2 border-green-400 rounded-md ${filtro == "r" && "bg-green-400"}`} onClick={() => setFiltro("r")}>Consulta Realizada</div>
                                <div className={`p-2 cursor-pointer border border-red-400 rounded-md ${filtro == "c" && "bg-red-400"}`} onClick={() => setFiltro("c")}>Consulta Cancelada</div>
                            </div> 
                            <div className="flex flex-col ">
                                {
                                    consultas &&
                                    filtro ?
                                    consultas.map((consulta, index) => {
                                        if(filtro === consulta.id_realizada){
                                            return(
                                                <Psicologo
                                                    nome={psicologos[index]}
                                                    cor={consulta.id_realizada}
                                                    imgUser={Psicologo1}
                                                    dia={consulta.dt_consulta}
                                                    hora={consulta.hr_consulta}
                                                />
                                            );
                                        }
                                    })
                                    :
                                    consultas.sort((consultaA, consultaB) => {
                                        if (consultaA.id_realizada === "c" && consultaB.id_realizada === "r") return 1;
                                        if (consultaA.id_realizada === "r" && consultaB.id_realizada !== "r") return 0;
                                        return -1;
                                    }).map((consulta, index) => (
                                        <Psicologo
                                            nome={psicologos[index]}
                                            cor={consulta.id_realizada}
                                            imgUser={Psicologo1}
                                            dia={consulta.dt_consulta}
                                            hora={consulta.hr_consulta}
                                        />
                                    ))
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