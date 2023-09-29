import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Rodape from "../../components/Rodape";
import imgPsicologo from "../../assets/imgs/userPsicologo.png"

import "../agendarConsulta/styles.css"

const AgendarConsulta = () =>{

    const psicologoName = "Fernanda Sandra Ribeiro";

    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex bg-white md:bg-purple-100">
                <div className="w-full mt-18 md:my-32 md:flex items-center justify-center">
                    
                    <div className="md:px-8 py-4 pb-16 flex  bg-white agendarConsulta">
                        <div className="centro">
                        <div className="w-full md:w-auto content-agendarConsulta">   

                            <h2 className="text-lg mt-8 title">Agendar Consulta</h2>
                            <div className="flex flex-wrap lg:flex-nowrap agendamento">
                                <div className="w-96">
                                    <p className="mt-4">Nome</p>
                                    <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder="Júlia Souza ferraz" disabled/>
                                    <p className="mt-2">CPF</p>
                                    <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder="56088596341" disabled/>
                                    <p className="mt-2">Telefone</p>
                                    <input className="w-full md:w-10/12 py-1 px-2 rounded-md border border-black" type="text" placeholder="(13) 2826-1764" disabled/>
                                    <h2 className="text-lg my-4">Como você se sente?</h2>
                                    <textarea className="md:w-10/12 rounded-lg border border-black" name="" cols="30" rows="10" placeholder="Digite aqui"></textarea>
                                </div>    

                                <div className="xl:ml-16 w-96 mt-2 md:mt-0">
                                    <div className="mb-4 flex items-center">
                                        <img className="w-16 h-16" src={imgPsicologo} alt="user" />
                                        <h3 className="ml-4">{psicologoName}</h3>
                                    </div>

                                    <p>
                                        A consulta será feita pela plataforma Google Meet, e
                                        você receberá um email com as devidas instruções 
                                        após a consulta ser confirmada.
                                    </p>
                                    <h2 className="mt-4 text-md">Data da Consulta:</h2>
                                  
                                    <select className="my-2 px-2 py-2 rounded-lg cursor-pointer bg-purple-200" name="" id="">
                                        <option value="">03/10/2023</option>
                                        <option value="">05/10/2023</option>
                                        <option value="">10/10/2023</option>
                                        <option value="">12/10/2023</option>
                                    </select>

                                    <p>Horários disponíveis:</p>
                                    
                                    <select className="my-2 px-2 py-2 rounded-lg cursor-pointer bg-purple-200" name="" id="">
                                        <option value="">8:00</option>
                                        <option value="">9:30</option>
                                        <option value="">11:00</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Link to="/consultas"><button className="w-64 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-200">Confirmar</button></Link>
                            </div>
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default AgendarConsulta;