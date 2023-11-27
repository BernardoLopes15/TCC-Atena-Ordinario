import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import psicologoola from "../assets/psicologo_ola.svg";
import imgconsultas from "../assets/consultas_agendadas.svg";
import imgpsicologo from "../assets/consultar_Psicologo.svg";
import imgPerfil from "../assets/mellhorarPerfil.svg";

const HomeItems = () =>{
    const [anima, setAnima] = useState(false);
    const [usuario, setUsuario] = useState();

    useEffect(() => {
        setAnima(true);
    }, []);

    let sair = useRef();

    const voltarPagina = () =>{
        sair.current?.click();
    }

    useEffect(()=>{
        let response = JSON.parse(sessionStorage.getItem('token')) || voltarPagina();
        if(!JSON.parse(sessionStorage.getItem('token'))) return;
        response?.nivelAcesso !== "paciente" && voltarPagina();
        setUsuario(response?.nome.split(" ")[0]);
    });

    return(
        <div className="min-h-screen px-4 flex justify-center bg-white md:bg-purple-100">
            <CSSTransition
                in={anima}
                timeout={1000}
                classNames="page"
                unmountOnExit
            >
                <div className="mt-16">
                    <div className="p-8 flex rounded-lg md:border-l-8 md:border-l-purple-500 mt-8 bg-purple-300">
                        <img loading="lazy" src={psicologoola} alt="psicologo_ola" />
                        <div className="ml-4 flex justify-center flex-col">
                            <h2 className="text-xl">Olá {usuario}! Seja bem vindo(a)</h2>
                            <h3 className="font-light">Que bom ter você por aqui</h3>
                        </div>
                    </div>
                    <div className="p-8 flex flex-wrap rounded-lg md:border-l-8 md:border-l-purple-500 mt-8 bg-white">
                        <img loading="lazy" className="w-32" src={imgconsultas} alt="psicologo_ola" />
                        <div className="w-1 mx-16 border-l border-black"></div>
                        <div className="ml-4 flex justify-center flex-col">
                            <h2 className="text-xl">Consultas Agendadas</h2>
                            <h3 className="font-light">Acesse aqui suas consultas agendadas</h3>
                        </div>
                    </div>
                    <div className="p-8 flex flex-wrap rounded-lg md:border-l-8 md:border-l-purple-500 mt-8 bg-white">
                        <img loading="lazy" className="w-32" src={imgpsicologo} alt="psicologo_ola" />
                        <div className="w-1 mx-16 border-l border-black"></div>
                        <div className="ml-4 flex justify-center flex-col">
                            <h2 className="text-xl"><a>Solicitações de Consultas</a></h2>
                            <h3 className="font-light">Acesse aqui suas solicitações pendentes e possiveis clientes para atendimento</h3>
                        </div>
                    </div>
                    <div className="p-8 flex flex-wrap rounded-lg md:border-l-8 md:border-l-purple-500 my-8 bg-white">
                        <img loading="lazy" className="w-32 h-32" src={imgPerfil} alt="psicologo_ola" />
                        <div className="w-1 mx-16 border-l border-black"></div>
                        <div className="ml-4 flex justify-center flex-col">
                            <h2 className="text-xl">Melhorar Perfil</h2>
                            <h3 className="font-light">Acesse aqui suas definições de usuário(a)</h3>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default HomeItems;