import { useState, useEffect } from "react";
import axios from "axios";
import MainUrl from "../../../connection config/url";
import { CSSTransition } from "react-transition-group";

import NavBar from "../../../components/Navbar";
import Rodape from "../../../components/Rodape";

import Psicologo1 from "../../../assets/imgs/psicologo1.png";

const Psicologo = ({ nome, cor, imgUser, dia, hora }) =>{
    return(
        <div className={`w-full px-4 py-2 my-3 flex items-center border border-black flex rounded-md border-r-8 ${cor === "p" ? "border-r-yellow-500" : cor === "r" ? "border-r-green-500" : cor === "c" && "border-r-red-500"}`}>
            <img src={imgUser} className="md:w-12 md:h-12 rounded-full" alt="imagem_usuario" />
            <div className="ml-4 flex justify-between grow">
                <h2>{nome}</h2>
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

    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        setAnima(true);

        let paciente = JSON.parse(sessionStorage.getItem("token"));
        console.log(paciente.id);
        axios.post(MainUrl + "buscarConsultas.php", JSON.stringify({ id: paciente.id }))
        .then((e) => {
            console.log(e);
            setConsultas(e.data.response);
        });
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
                        <h2 className="py-4 text-5xl text-center font-style">Proxima Consulta</h2>
                        <div className="md:p-4">
                            <p className="text-gray-600">Filtros de consulta</p>
                            <div className="mb-4 grid grid-cols-3 ">
                                <div className="p-2 cursor-pointer bg-yellow-400 border border-yellow-400 rounded-md">Consulta Pendente</div>
                                <div className="p-2 cursor-pointer bg-green-400 border mx-2 border-green-400  rounded-md">Consulta Realizada</div>
                                <div className="p-2 cursor-pointer bg-red-400 border border-red-400 rounded-md">Consulta Cancelada</div>
                            </div> 
                            <div className="flex flex-col ">
                                {
                                    consultas &&
                                    consultas.map((consulta) => (
                                        <Psicologo nome={consulta.ds_consulta} cor={consulta.id_realizada} imgUser={Psicologo1} dia={consulta.dt_consulta} hora={consulta.hr_consulta} />
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