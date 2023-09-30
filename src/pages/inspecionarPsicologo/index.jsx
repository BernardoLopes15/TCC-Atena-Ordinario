import React from "react";
import NavBar from "../../components/Navbar";
import imgUser from "../../assets/imgs/psicologo1.png";
import Rodape from "../../components/Rodape";

import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaHome, FaYoutube } from 'react-icons/fa';

const InspecionarPsicologo = () =>{
    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex bg-white md:bg-purple-100">
                <div className="md:w-full md:flex items-center justify-center">
                    <div className="md:px-8 py-4 pb-16 mt-16 md:mt-32 flex rounded-xl bg-white">
                        <div>

                            <div className=" mt-2">
                             <Link to='/buscaPsicologo'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                 <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                               </svg>
                              </Link>
                            </div>

                            <div className="mt-10 ml-8">

                                <div className="flex mt-1">
                                    <img className="w-24 h-24 rounded-full" src={imgUser} alt="user" />
                                    <div className="flex flex-wrap items-center">
                                        <h3 className="px-4 text-2xl font-title">Fernanda Sandra Ribeiro</h3>
                                        <h4 className="ml-4 text-2xl font-title">25 anos</h4>
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
                                        <p className="md:w-96">Sou uma psicóloga dedicada a ajudar as pessoas a descobrirem seu potencial máximo e alcançarem uma vida equilibrada e gratificante. Minha paixão é proporcionar apoio, compreensão e orientação a indivíduos que desejam fortalecer sua saúde mental e emocional.
                                            Minha atuação inclui a realização de avaliações psicológicas, elaboração de planos de tratamento.</p>
                                    </div>

                                    {/* <h2 className="text-xl my-4">Formação</h2>
                                    <div className="flex">
                                        <div>
                                            <div>Psicologia</div>
                                            <div>USP-2022</div>
                                        </div>
                                        <div className="font-md pl-8">
                                            <h2>Diploma</h2>
                                            <a href="#tralala">daw</a>
                                        </div>
                                        <div className="font-md pl-8">
                                            <h2>Curriculo</h2>
                                            <a href="#tralala">daw</a>
                                        </div>
                                    </div> */}

                                </div>
                                <div className="xl:ml-16 md:w-96 mt-2 md:mt-0">
                                    {/* <p>Meios de contato</p>
                                    <div className="flex mt-1">
                                        <FaInstagram className="mr-4 text-xl" />
                                        <FaFacebook className="mr-4 text-xl" />
                                        <FaYoutube className="mr-4 text-xl" />
                                    </div> */}
                                    <h2 className="mt-4 text-md">Datas disponíveis para consulta</h2>
                                    <select className="my-2 px-2 py-2 rounded-lg cursor-pointer bg-purple-400 text-white" name="" id="">
                                        <option value="">13/10/2023</option>
                                        <option value="">14/10/2023</option>
                                        <option value="">20/10/2023</option>
                                        <option value="">21/10/2023</option>
                                    </select>
                                    <p>Horários disponíveis</p>
                                    <div className="my-2 text-white" >
                                        <label className="px-4 py-2 cursor-pointer bg-purple-400 rounded" for="hora1">8:00</label>
                                        <label className="px-4 py-2 ml-2 cursor-pointer bg-purple-400 rounded"  for="hora2">10:00</label>
                                        <label className="px-4 py-2 ml-2 cursor-pointer bg-purple-400 rounded" for="hora3">13:00</label>
                                    </div>
                                    <Link to="/agendarConsulta"><button className="text-white mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400">Agendar Consulta</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape color="bg-white" />
        </>
    );
}

export default InspecionarPsicologo;