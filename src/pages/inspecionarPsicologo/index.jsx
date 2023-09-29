import React from "react";
import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaHome, FaYoutube } from 'react-icons/fa';

import imgPsicologo from  "../../assets/imgs/userPsicologo.png";

import "../inspecionarPsicologo/styles.css"


const InspecionarPsicologo = () =>{

    const userName = "Fernanda Sandra Ribeiro";
    const idade = "25"
    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex bg-white md:bg-purple-100 " >
                <div className="md:w-full mt-16 md:mt-32 md:flex items-center justify-center apresentationPsicologo">
                    <div className="md:px-8 py-4 pb-16 flex bg-white content-apresentationPsicologo">
                            <div>
                                <Link to="/buscaPsicologo">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16" className="mt-2">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                   </svg>
                                 </Link>
                            </div>
                       
                        <div className="ml-10 mt-14 responsive">

                            <div className="dados-psicologo">

                                <div className="flex content-dados1">
                                    <img className="w-24" src={imgPsicologo} alt="user" />
                                    <div className="flex flex-wrap items-center teste">
                                        <h3 className="px-4 text-xl name">{userName}</h3>
                                        <h3 className="ml-8">Psicólogo(a)</h3>
                                        <h4 className="ml-4">{idade} anos</h4>
                                    </div>
                                </div>

                                <div className="flex justify-start content-dados2">
                                    <h3 className="ml-8">CRP</h3> 
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                    </svg>

                                    <h3 className="ml-8" >e-Psi</h3>
                                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                    </svg>
                                    
                                </div>
                                
                            </div>

                            <div className="md:flex flex-wrap xl:flex-nowrap mt-8 content-dadosPsicologo">
                               
                                <div>
                                    <h2 className="text-xl mb-4 title">Um pouco sobre mim</h2>
                                   
                                    <div>
                                        <p className="md:w-96">Sou uma psicóloga dedicada a ajudar as pessoas a descobrirem seu potencial máximo e alcançarem uma vida equilibrada e gratificante. Minha paixão é proporcionar apoio, compreensão e orientação a indivíduos que desejam fortalecer sua saúde mental e emocional.
                                            Minha atuação inclui a realização de avaliações psicológicas, elaboração de planos de tratamento.</p>
                                    </div>

                                    {/* <h2 className="text-xl my-4 title">Formação</h2>

                                    <div className="flex formacao">
                                        <div>
                                            <div>Psicologia</div>
                                            <div>USP-2020</div>
                                        </div>

                                        <div className="font-md pl-8">
                                            <h2>Diploma</h2>
                                            <a href="#tralala">Link</a>
                                        </div>

                                        <div className="font-md pl-8">
                                            <h2>Currículo</h2>
                                            <a href="#tralala">Link</a>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="xl:ml-16 md:w-96 mt-2 md:mt-0 agendar">
                                    {/* <p>Meios de contato</p>
                                    <div className="flex">
                                        <FaInstagram className="mr-4 text-xl" />
                                        <FaFacebook className="mr-4 text-xl" />
                                        <FaYoutube className="mr-4 text-xl" />
                                        <FaHome className="mr-4 text-xl" />
                                    </div> */}
                                    <h2 className="mt-4 text-md">Datas disponíveis para consulta:</h2>
                                    <select className="ml-2 my-2 px-2 py-2 rounded-lg cursor-pointer color-fundo" name="" id="">
                                        <option value="">03/10/2023</option>
                                        <option value="">05/10/2023</option>
                                        <option value="">10/10/2023</option>
                                        <option value="">12/10/2023</option>
                                    </select>
                                    <p>Horários disponíveis:</p>
                                    <div className="my-2 mt-3">
                                        <label className="px-4 py-2 ml-2 cursor-pointer color-fundo" for="hora1">8:00</label>
                                        <label className="px-4 py-2 ml-3 cursor-pointer color-fundo" for="hora2">9:30</label>
                                        <label className="px-4 py-2 ml-3 cursor-pointer color-fundo" for="hora3">11:00</label>
                                    </div>
                                    <Link to="/agendarConsulta"><button className="btttn py-2 cursor-pointer color-fundo">Agendar Consulta</button></Link>
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