import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useParams } from 'react-router-dom';
import axios from "axios";

import NavBar from "../../components/Navbar";
import imgUser from "../../assets/imgs/psicologo1.png";
import Rodape from "../../components/Rodape";

import { Link } from "react-router-dom";
import MainUrl from "../../connection config/url";

const InspecionarPsicologo = () =>{
    const { nome } = useParams();
    const [inicio, setInicio] = useState(false);
    const [anima, setAnima] = useState(false);
    const [corFundo, setCorFundo] = useState();
    const [psicologo, setPsicologo] = useState();
    const [hora, setHora] = useState([]);
    const [diasUnicos, setDiasUnicos] = useState([]);

    const [consulta, setConsultas] = useState();

    const handleClick = (dia) => setCorFundo(dia);

    useEffect(() => {
        setAnima(true);
        let nomeBusca = { nome: nome};

        if(inicio){
            try{
                axios.post(MainUrl + "inspecionarPsicologo.php", JSON.stringify(nomeBusca))
                .then((e) => {
                    console.log(e.data.response[0]?.cd_psicologo);
                    setPsicologo(e.data.response[0]);
                    axios.post(MainUrl + "buscarHorario.php", JSON.stringify({ id : e.data.response[0]?.cd_psicologo }))
                    .then((e) => {
                        if(e.data.response){
                            handleClick(e.data.response[0].dia);

                            for(let item of e.data.response){
                                console.log(item);
                                setHora((prevState) => [...prevState, item]);
                            }
                            
                            setDiasUnicos([...new Set(e.data.response.map((h) => h.dia))]);
                        } else{
                            setHora("");
                        }
                    })
                })
                .catch((e) => console.log(e));

                let pacienteSession = JSON.parse(sessionStorage.getItem("token"));

                axios.post(MainUrl + "validarAcessoConsultas.php", JSON.stringify({ id: pacienteSession.id}))
                .then((e) => {
                    if (e.data.response) setConsultas(true);
                })
                .catch(() => setConsultas(false));
            } catch{
                console.log("não encontrado");
            }
        } else{
            setInicio(true);
        }
    }, [inicio]);

    const mostrarIdade = (dataBr) =>{
        const dtNascimento = new Date(dataBr);
        const dtAtual = new Date();
        const diferencaMilissegundos = dtAtual - dtNascimento;
        const anos = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365.25));
        return anos;
    }

    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex bg-white md:bg-purple-100">
                <div className="md:w-full md:flex items-center justify-center">
                    <CSSTransition
                        in={anima}
                        timeout={1000}
                        classNames="page"
                        unmountOnExit
                    >
                        <div className="pb-16 mt-16 md:mt-32 overflow-hidden flex rounded-xl bg-white">
                            <div>
                                <div className="p-2 mb-4 md:bg-violet-400">
                                    <Link to='/buscaPsicologo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="md:px-8">
                                    <div className="mt-10 ml-8">
                                        <div className="flex mt-1">
                                            <img loading="lazy" className="w-24 h-24 rounded-full" src={psicologo?.nm_foto_perfil} alt="user" />
                                            <div className="flex flex-wrap items-center">
                                                <h3 className="px-4 text-2xl font-title">{nome}</h3>
                                                <h4 className="ml-4 text-2xl font-title">{mostrarIdade(psicologo?.dt_nascimento)} anos</h4>
                                            </div>
                                        </div>
                                        <div className="flex justify-start ml-24">
                                            <h3 className="ml-8 mr-1">CRP</h3> 
                                            <svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                            <h3 className="ml-8 mr-1" >e-Psi</h3>
                                            <svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="md:flex flex-wrap xl:flex-nowrap mt-8 ml-8">
                                        <div>
                                            <h2 className="text-xl mb-4 font-title">Apresentação</h2>
                                            <div>
                                                <p className="md:w-96">{psicologo?.ds_apresentacao}</p>
                                            </div>
                                            <h2 className="text-xl mb-4 mt-4 font-title">Especialidade</h2>
                                            <div>
                                                <p className="md:w-96">{psicologo?.nm_area_atuacao}</p>
                                            </div>
                                        </div>
                                        <div className="xl:ml-16 md:w-96 mt-2 md:mt-0">
                                            <h2 className="mt-4 text-md">Datas disponíveis para consulta</h2>
                                            <div className="flex flex-wrap">
                                                {
                                                    hora ?
                                                    diasUnicos.map((hora, index) =>(
                                                        <div key={index} onClick={() => handleClick(hora)} className={`w-32 my-2 ${corFundo === hora ? 'bg-violet-800' : 'bg-purple-400'} mr-4 px-2 py-2 rounded-lg text-center cursor-pointer text-white`}>{
                                                            (() => {
                                                                switch (hora) {
                                                                    case "0":
                                                                        return "Domingo";
                                                                    case "1":
                                                                        return "Segunda";
                                                                    case "2":
                                                                        return "Terça";
                                                                    case "3":
                                                                        return "Quarta";
                                                                    case "4":
                                                                        return "Quinta";
                                                                    case "5":
                                                                        return "Sexta";
                                                                    case "6":
                                                                        return "Sábado";
                                                                    default:
                                                                        return "a";
                                                                }
                                                            })()
                                                        }</div>
                                                    ))
                                                    :
                                                    <div className="w-32 my-2 bg-red-600 mr-4 px-2 py-2 rounded-lg text-center cursor-pointer text-white">Indisponivel</div>
                                                }
                                            </div>
                                            <p>Horários disponíveis</p>
                                            <div className="mt-2 flex flex-wrap text-white" >
                                                {
                                                    hora ?
                                                    hora.map((hora, index)=>{
                                                        if(hora.dia == corFundo){
                                                            return <label key={index} className="px-4 py-2 mr-2 mb-2 cursor-pointer bg-purple-400 rounded" for={`hora${index}`}>{hora.dtInicio.slice(0, 5)}</label>;
                                                        }
                                                    })
                                                    :
                                                    <div className="w-32 my-2 bg-red-600 mr-4 px-2 py-2 rounded-lg text-center cursor-pointer text-white">Indisponivel</div>
                                                }
                                            </div>
                                            {
                                                consulta ? (
                                                    <div>
                                                        <button className="text-white mt-8 px-4 py-2 rounded-lg cursor-pointer bg-gray-500">Agendar Consulta</button>
                                                        <p>Você já possui consultas pendentes</p>
                                                    </div>
                                                ) : (
                                                    hora ? (
                                                        <Link to={`/agendarConsulta/${nome}`}>
                                                            <button className="text-white mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400">Agendar Consulta</button>
                                                        </Link>
                                                    ) : (
                                                        <button className="text-white mt-8 px-4 py-2 rounded-lg cursor-pointer bg-gray-400">Dados Insuficientes</button>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </div>
            <Rodape color="bg-white" />
        </>
    );
}

export default InspecionarPsicologo;