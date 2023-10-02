import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import NavBar from "../../../components/Navbar";
import Rodape from "../../../components/Rodape";

import Psicologo1 from "../../../assets/imgs/psicologo1.png"
import Psicologo2 from "../../../assets/imgs/psicologo2.png"
import Psicologo3 from "../../../assets/imgs/psicologo3.png"


const Psicologo = ({ nome, cor, imgUser }) =>{
    return(
        <div className={`w-full px-4 py-2 my-3 flex items-center border border-black flex rounded-md border-r-8  ${cor}`}>
            <img src={imgUser} className="md:w-12 md:h-12 rounded-full" alt="imagem_usuario" />
            <h2 className="ml-4">{nome}</h2>
        </div>
    );
}

const ConsultaCliente = () =>{
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
                        <h2 className="py-4 text-5xl text-center font-style">Histórico de Consultas</h2>
                        <div className="md:p-4">
                            <p className="text-gray-600">Filtros de consulta</p>
                            <div className="mb-4 grid grid-cols-3 ">
                                <div className="p-2 cursor-pointer bg-yellow-400 border border-yellow-400 rounded-md">Consulta Pendente</div>
                                <div className="p-2 cursor-pointer bg-green-400 border mx-2 border-green-400  rounded-md">Consulta Realizada</div>
                                <div className="p-2 cursor-pointer bg-red-400 border border-red-400 rounded-md">Consulta Cancelada</div>
                            </div> 
                            <div className="flex flex-col ">
                                <Psicologo nome="Fernanda Sandra Ribeiro" cor="border-r-yellow-300" imgUser={Psicologo1} />
                                <Psicologo nome="Ruan Renato Ferreira" cor="border-r-red-300" imgUser={Psicologo2}/>
                                <Psicologo nome="Mirella Sara Galvão" cor="border-r-green-300" imgUser={Psicologo3}/>
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