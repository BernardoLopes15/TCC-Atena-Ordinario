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
                <div className="w-full mt-16 md:my-32 md:flex items-center justify-center">
                    <div className="md:px-8 py-4 pb-16 flex  bg-white agendarConsulta">
                        <div className="centro">
                        <div className="w-full md:w-auto content-agendarConsulta">   

                            <div>
                                <Link to="/psicologo">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16" className="mt-2">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                   </svg>
                                 </Link>
                            </div>

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