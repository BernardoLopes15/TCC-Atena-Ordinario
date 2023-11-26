import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import imguser from "../../assets/imgs/psicologo1.png";

import "../agendarConsulta/styles.css";
import MainUrl from "../../connection config/url";


const AgendarConsulta = () =>{
    const [anima, setAnima] = useState(false);
    
    const { psicologo } = useParams();
    const [psicologoData, setPsicologoData] = useState();
    const [wednesdays, setWednesdays] = useState([]);
    const [diaSemana, setDiaSemana] = useState([]);
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

    const [descricaoConsulta, setDescricaoConsulta] = useState();
    const [dataSelecionada, setDataSelecionada] = useState(diaSemana[0]);
    const [diaAno, setDiaAno] = useState();
    const [horaSelecionada, setHoraSelecionada] = useState();

    let voltarConsulta = useRef();

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    };

    const enviarConsulta = () =>{
        let paciente = JSON.parse(sessionStorage.getItem("token"));
        let form = { psicologo: psicologoData, dataSelecionada: diaAno, horaSelecionada: horaSelecionada, descricaoConsulta: descricaoConsulta, id: paciente.id };

        axios.post(MainUrl + "cadastrarConsulta.php", JSON.stringify(form))
        .then((e) => {
            console.log(e);
            voltarConsulta?.current.click();
            Swal.fire({
                title: 'Consulta Agendada',
                text: 'Dados salvos, aguarde até a data marcada para a consulta',
                icon: "success"
            })
        });
    }

    useEffect(() => {
        setAnima(true);

        const getWednesdays = () => {
            const currentDate = new Date();
            const endOfYear = new Date(currentDate.getFullYear(), 11, 31);
            const todosDias = [];
            
            while (currentDate <= endOfYear) {
                for(let item of diaSemana){
                    if(item == new Date(currentDate).getDay()){
                        todosDias.push(new Date(currentDate));
                    }   
                }

                currentDate.setDate(currentDate.getDate() + 1); // Avança para o próximo dia
            }
            
            setWednesdays(todosDias.sort((a, b) => a - b));
        };

        getWednesdays();
    }, [diaSemana]);

    useEffect(() =>{
        axios.post(MainUrl + "inspecionarPsicologo.php", JSON.stringify({ nome: psicologo }))
        .then((e) => {
            setPsicologoData(e.data.response[0]);
            axios.post(MainUrl + "buscarHorario.php", JSON.stringify({ id: e.data?.response[0].cd_psicologo }))
            .then((e) => {
                let arraySemana = [];

                for(let item of e.data?.response){
                    arraySemana.push(item.dia);
                }
                
                setDiaSemana([...new Set(arraySemana)]);
                setDataSelecionada([...new Set(arraySemana)][0]);

                setHorariosDisponiveis(e.data?.response);
            })
        });

        let pacienteSession = JSON.parse(sessionStorage.getItem("token"));

        axios.post(MainUrl + "validarAcessoConsultas.php", JSON.stringify({ id: pacienteSession.id}))
        .then((e) => {
            if (e?.data?.response) voltarConsulta?.current?.click();
        });
    }, []);

    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex bg-white md:bg-purple-100">
                <div className="w-full mt-16 md:my-32 md:flex items-center justify-center">
                    <CSSTransition
                        in={anima}
                        timeout={1000}
                        classNames="page"
                        unmountOnExit
                    >
                        <div className="pb-16 pb-16 flex rounded-xl overflow-hidden bg-white">
                            <div className="w-full md:w-auto">
                                <div className="p-2 mb-4 md:bg-violet-400">
                                    <Link to={`/psicologo/${psicologo}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="md:px-8">
                                    <h2 className="text-5xl mb-8 font-style text-center">Agendar Consulta</h2>
                                    <div className="flex flex-wrap lg:flex-nowrap">
                                        <div className="w-96">
                                            <p className="mt-4">Nome</p>
                                            <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder={psicologoData?.nm_psicologo} disabled/>
                                            <p className="mt-2">CPF</p>
                                            <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder={psicologoData?.nr_cpf} disabled/>
                                            <p className="mt-2">Telefone</p>
                                            <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder={psicologoData?.nr_telefone} disabled/>
                                            <h2 className="text-lg my-4">Como você se sente ?</h2>
                                            <textarea className="resize-none w-full p-2 h-40 md:w-10/12 rounded-lg border border-black" onChange={(e) => setDescricaoConsulta(e.target.value)} cols="30" rows="10">{descricaoConsulta}</textarea>
                                        </div>
                                        <div className="xl:ml-16 w-96 mt-2 md:mt-0">
                                            <div className="mb-4 flex items-center">
                                                <img loading="lazy" className="w-20 h-20 rounded-full" src={imguser} alt="user" />
                                                <h3 className="ml-4 text-xl">{psicologo}</h3>
                                            </div>
                                            <p>
                                                A consulta será feita pela plataforma Google Meet,
                                                você receberá um email com as devidas instruções 
                                                após a consulta ser confirmada.
                                            </p>
                                            <h2 className="mt-4 text-md text-lg">Datas disponíveis para consulta</h2>
                                            <select className="overflow-y-auto my-2 px-2 py-2 rounded-md outline-none cursor-pointer bg-purple-400 text-white"
                                                onChange={(e) => {
                                                    let dateObj = new Date(e.target.value);
                                                    setDataSelecionada(dateObj.getDay());

                                                    let parts = dateObj.toLocaleDateString().split('/');
                                                    dateObj = `${parts[2]}-${parts[1]}-${parts[0]}`;
                                                    setDiaAno(dateObj);
                                                }
                                            }>
                                                {wednesdays.map((wednesday, index) => (
                                                <option className="py-4" key={index} value={wednesday.toISOString()}>
                                                    {formatDate(wednesday)}
                                                </option>
                                                ))}
                                            </select>
                                            <p className="text-lg">Horários disponíveis</p>
                                            <div className="flex flex-wrap my-2 text-white" >
                                                {
                                                    horariosDisponiveis &&
                                                    horariosDisponiveis.map((hora, index) => {
                                                        if(hora.dia == dataSelecionada){
                                                            return(
                                                                <div>
                                                                    <input type="radio" name="horario" value={hora.dtInicio} onChange={(e) => setHoraSelecionada(e.target.value)} id={`hora${index}`} className="hidden peer" />
                                                                    <label className="mr-2 mb-2 px-4 py-2 cursor-pointer bg-purple-400 peer-checked:bg-red-600 rounded" htmlFor={`hora${index}`}>{hora.dtInicio}</label>           
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="text-lg w-60 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400 text-white hover:bg-purple-950" onClick={enviarConsulta}>Agendar</button>
                                        <Link to="/consultas" ref={voltarConsulta}></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default AgendarConsulta;