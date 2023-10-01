import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import imguser from "../../assets/imgs/psicologo1.png";

const AgendarConsulta = () =>{
    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
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
                        <div className="md:px-8 py-4 pb-16 flex rounded-lg bg-white">
                            <div className="w-full md:w-auto">    
                                <div>
                                    <Link to="/buscaPsicologo"><button className="p-4 text-lg font-bold text-purple-500">Voltar</button></Link>
                                </div>
                                <h2 className="text-lg mt-8">Agendar Consulta</h2>
                                <div className="flex flex-wrap lg:flex-nowrap">
                                    <div className="w-96">
                                        <p className="mt-4">Nome</p>
                                        <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder="Fernanda Sandra Ribeiro" disabled/>
                                        <p className="mt-2">CPF</p>
                                        <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder="56088596341" disabled/>
                                        <p className="mt-2">Telefone</p>
                                        <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder="(13) 2826-1764" disabled/>
                                        <h2 className="text-lg my-4">Como você se sente ?</h2>
                                        <textarea className="w-full md:w-10/12 rounded-lg border border-black" name="" cols="30" rows="10"></textarea>
                                    </div>    
                                    <div className="xl:ml-16 w-96 mt-2 md:mt-0">
                                        <div className="mb-4 flex items-center">
                                            <img loading="lazy" className="w-16 h-16" src={imguser} alt="user" />
                                            <h3 className="ml-4">Fernanda Sandra Ribeiro</h3>
                                        </div>
                                        <p>
                                            A consulta será feita pela plataforma Google meet, e
                                            você receberá um email com as devidas instruções 
                                            após a consulta ser confirmada.
                                        </p>
                                        <h2 className="mt-4 text-md">Data da Consulta</h2>
                                        <select className="my-2 px-2 py-2 rounded-lg cursor-pointer bg-purple-200" name="" id="">
                                            <option value="">valor1</option>
                                            <option value="">valor2</option>
                                            <option value="">valor3</option>
                                            <option value="">valor4</option>
                                        </select>
                                        <p>Horários disponíveis</p>
                                        <div className="my-2">
                                            <input type="radio" name="hora" id="hora1" />
                                            <label className="px-4 py-2 cursor-pointer bg-purple-200" for="hora1">8:50</label>
                                            <input type="radio" name="hora" id="hora2" />
                                            <label className="px-4 py-2 cursor-pointer bg-purple-200" for="hora2">10:50</label>
                                            <input type="radio" name="hora" id="hora3" />
                                            <label className="px-4 py-2 cursor-pointer bg-purple-200" for="hora3">14:20</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <Link to="/consultas"><button className="w-64 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-200">Confirmar</button></Link>
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