import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";

import axios from "axios";
import MainUrl from "../../connection config/url";

const Calendario = () =>{
    const [mesEscolhido, setMesEscolhido] = useState(new Date().getMonth() + 1);
    const [anoEscolhido, setAnoEscolhido] = useState(2023);

    const [meses, setMeses] = useState([]);
    const [dia, setDias] = useState([]);
    const [inicioMes, setInicio] = useState([]);

    const [iniciarPagina, setIniciarPagina] = useState();

    const [diaDaSemana, setDiaDaSemana] = useState();

    let todosMeses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

    useEffect(()=>{
        const numMeses = [];
        const daysInMonth = new Date(anoEscolhido, mesEscolhido, 0).getDate();
        numMeses.push(daysInMonth);
        setMeses(numMeses);
    },[mesEscolhido]);

    useEffect(()=>{
        let dias = [];

        for(let i = 1; i <= meses; i++) {
            dias.push(i)
        };

        setDias(dias);

        let diaEspecifico = new Date(`2023-0${mesEscolhido}-1`);
        diaEspecifico = diaEspecifico.getDay();

        let diaSemana = [];

        for(let i = 0; i < diaEspecifico; i++) diaSemana.push(i);
        
        setInicio(diaSemana);
    },[meses]);

    const buscarDiasTrabalho = async () =>{
        let response = await axios.post(MainUrl + "buscarDia.php", JSON.stringify(sessionStorage.getItem("token")));
    }

    useEffect(()=>{
        if(iniciarPagina){
            const data = new Date(`${anoEscolhido}-${mesEscolhido}-01`);
            let tempdia = data.getDay();
            let arraydias = [];

            for(let i = 0; i < dia.length; i++){
                if(tempdia >= 6){ // sabado
                    tempdia = 0; // domingo
                } else{
                    tempdia++; // troca pro dia seguinte
                }

                arraydias.push(tempdia); // adicionar no numero de dias do mes
            }

            buscarDiasTrabalho();
            setDiaDaSemana(arraydias);
        } else{
            setIniciarPagina(true);
        }
    },[iniciarPagina]);

    const mudarMes = (mudanca) =>{
        if(mudanca === 1){
            setMesEscolhido(mesEscolhido + 1);
        } else{
            setMesEscolhido(mesEscolhido - 1);
        }

        if(mesEscolhido === 1 && mudanca === 2){
            setAnoEscolhido(anoEscolhido - 1);
            setMesEscolhido(12);
        } else if(mesEscolhido === 12 && mudanca === 1){
            setAnoEscolhido(anoEscolhido + 1);
            setMesEscolhido(1);
        }

        setIniciarPagina(mesEscolhido);
    }

    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, [anima]);

    return(
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center bg-purple-100">
                <div className="md:px-8 py-4 pb-16 mt-12 md:mt-32 flex rounded-xl bg-white">
                    <CSSTransition
                        in={anima}
                        timeout={1000}
                        classNames="page"
                        unmountOnExit
                    >
                        <div className="pt-16">
                            <h2 className="mb-12 text-5xl text-center font-style">Calendário</h2>
                            <div className="my-4 flex justify-around text-xl text-fuchsia-950 font-medium ">
                                <p>{todosMeses[mesEscolhido - 1].toUpperCase()}</p>
                                <p>{anoEscolhido}</p>
                            </div>
                            <div className="flex flex-wrap">
                                <button className="mx-6" onClick={()=>mudarMes(2)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#281161" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                </svg>
                                </button>
                                <div className="grid grid-cols-7 bg-purple-500 rounded-lg">
                                    <h2 className="p-2 lg:p-4 bg-slate-200 rounded-s-md">DOM</h2>
                                    <h2 className="p-2 lg:p-4 bg-slate-200">SEG</h2>
                                    <h2 className="p-2 lg:p-4 bg-slate-200">TER</h2>
                                    <h2 className="p-2 lg:p-4 bg-slate-200">QUA</h2>
                                    <h2 className="p-2 lg:p-4 bg-slate-200">QUI</h2>
                                    <h2 className="p-2 lg:p-4 bg-slate-200">SEX</h2>
                                    <h2 className="p-2 lg:p-4 bg-slate-200 rounded-e-md">SAB</h2>
                                    {
                                        inicioMes.map((e)=>(
                                            <h2 key={e}></h2>
                                        ))
                                    }
                                    {
                                        dia.map((dia, index)=>(
                                            <h2 key={dia} className={`p-4 lg:p-8 flex items-center justify-center ${diaDaSemana[index] == 7 ? "bg-red-500" : "bg-purple-500"} hover:bg-purple-300 cursor-pointer text-white rounded-md`}>{dia}</h2>
                                        ))
                                    }
                                </div>
                                <button className="mx-6" onClick={()=>mudarMes(1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#281161" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <Link to="/data"><button className=" text-lg w-60 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400 text-white hover:bg-purple-950">Datas e Horários</button></Link>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
             </div>
            <Rodape />
        </>
    );
}

export default Calendario;