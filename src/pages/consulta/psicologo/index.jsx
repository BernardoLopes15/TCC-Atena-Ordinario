import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import NavBar from "../../../components/NavbarPsicologo";
import imgpessoa from "../../../assets/user.png";
import Rodape from "../../../components/Rodape";

const Psicologo = ({ nome, cor }) =>{
    return(
        <div className={`w-full px-4 py-2 my-3 flex items-center border border-black flex border-r-8 ${cor}`}>
            <img src={imgpessoa} alt="imagem_usuario" />
            <h2 className="ml-4">{nome}</h2>
        </div>
    );
}

const ConsultaPsicologo = () =>{
    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, []);

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
                        <h2 className="py-4 text-xl text-center">Histórico de consultas</h2>
                        <div className="md:p-4">
                            <p className="text-gray-600">Filtros de consulta</p>
                            <div className="mb-4 grid grid-cols-3">
                                <div className="p-2 cursor-pointer bg-yellow-400 border border-yellow-400">Consulta Pendente</div>
                                <div className="p-2 cursor-pointer bg-green-400 border mx-2 border-green-400">Consulta Realizada</div>
                                <div className="p-2 cursor-pointer bg-red-400 border border-red-400">Consulta Cancelada</div>
                            </div>
                            <div className="flex flex-col">
                            <Psicologo nome="Fernanda Sandra Ribeiro" cor="border-r-yellow-300" />
                            <Psicologo nome="Mirella Sara Galvão" cor="border-r-red-300" />
                            <Psicologo nome="Sebastiana Lara Eloá" cor="border-r-green-300" />
                            <Psicologo nome="Fernanda Sandra Ribeiro" cor="border-r-yellow-300" />
                            <Psicologo nome="Mirella Sara Galvão" cor="border-r-red-300" />
                            <Psicologo nome="Sebastiana Lara Eloá" cor="border-r-green-300" />
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
            <Rodape />
        </>
    );
}

export default ConsultaPsicologo;