import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";

import { FaCheckCircle } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import imguser from "../../assets/user.png";

const BoxSolicitacao = ({userName, imgUser}) =>{
    return(
        <div className="py-2 px-3 flex items-center justify-between rounded-lg mb-6 border border-black">
            <div className="flex items-center">
                <img className="w-12 h-12" src={imgUser} alt="" />
                <h3 className="ml-8 text-lg">{userName}</h3>
            </div>
            <div className="flex">
                <FaCheckCircle className="cursor-pointer" color="green" size={40} />
                <AiOutlineCloseCircle className="ml-4 cursor-pointer" color="red" size={40} />
            </div>
        </div>
    );
}

const SolicitacaoConsulta = () =>{
    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, []);

    return(
        <>
            <NavBar />
            <div className="min-h-screen flex justify-center md:bg-purple-100">
                <div className="w-full pt-16 flex items-center justify-center mt-5">
                    <CSSTransition
                        in={anima}
                        timeout={1000}
                        classNames="page"
                        unmountOnExit
                    >
                        <div className="w-full md:w-8/12 lg:w-6/12 p-4 lg:p-8 rounded-xl bg-white">
                            <h2 className="mb-8 text-5xl text-center font-style">Solicitações</h2>
                            <BoxSolicitacao userName="Júlia Souza Ferraz" imgUser={imguser}/>
                            <BoxSolicitacao userName="Júlia Souza Ferraz" imgUser={imguser}/>
                            <BoxSolicitacao userName="Júlia Souza Ferraz" imgUser={imguser}/>
                        </div>
                    </CSSTransition>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default SolicitacaoConsulta;