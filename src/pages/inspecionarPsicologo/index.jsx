import React from "react";
import NavBar from "../../components/Navbar";
import imgUser from "../../assets/user.png";
import Rodape from "../../components/Rodape";

import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaHome, FaYoutube } from 'react-icons/fa';

const InspecionarPsicologo = () =>{
    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex bg-white md:bg-purple-100">
                <div className="w-full mt-16 flex items-center justify-center">
                    <div className="lg:w-6/12 px-8 py-4 pb-16 flex bg-white">
                        <div>    
                            <div>
                                <Link to="/buscaPsicologo"><button className="p-4 text-lg font-bold text-purple-500">Voltar</button></Link>
                            </div>
                            <div>
                                <div className="flex">
                                    <img className="w-24" src={imgUser} alt="user" />
                                    <div className="flex items-center">
                                        <h3 className="px-4 text-xl">Wellyngton de souza</h3>
                                        <h4 className="ml-4">19 anos</h4>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <h3>CRP</h3>
                                    <h3 className="ml-8">Profissão</h3>
                                </div>
                            </div>
                            <div className="flex flex-wrap xl:flex-nowrap mt-8">
                                <div>
                                    <h2 className="text-xl mb-4">Apresentação</h2>
                                    <div>
                                        <p className="w-96">Minha atuação inclui a realização de avaliações psicológicas, diagnósticos, elaboração de planos de tratamento e a implementação de intervenções terapêuticas adequadas. Trabalho em parceria com meus pacientes, fornecendo um espaço seguro e confidencial para que eles possam expressar suas preocupações e explorar questões emocionais e psicológicas mais profundas.</p>
                                    </div>
                                    <h2 className="text-xl my-4">Formação</h2>
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
                                    </div>
                                </div>    
                                <div className="xl:ml-16 w-96 mt-2 md:mt-0">
                                    <p>Meios de contato</p>
                                    <div className="flex">
                                        <FaInstagram className="mr-4 text-xl" />
                                        <FaFacebook className="mr-4 text-xl" />
                                        <FaYoutube className="mr-4 text-xl" />
                                        <FaHome className="mr-4 text-xl" />
                                    </div>
                                    <h2 className="mt-4 text-md">Datas Disponiveis para consulta</h2>
                                    <select className="my-2 px-2 py-2 rounded-lg cursor-pointer bg-purple-200" name="" id="">
                                        <option value="">valor1</option>
                                        <option value="">valor2</option>
                                        <option value="">valor3</option>
                                        <option value="">valor4</option>
                                    </select>
                                    <p>Horários disponíveis</p>
                                    <div className="my-2">
                                        <input type="radio" name="hora" id="hora1" />
                                        <label className="px-4 py-2 cursor-pointer bg-purple-200" for="hora1">min tal</label>
                                        <input type="radio" name="hora" id="hora2" />
                                        <label className="px-4 py-2 cursor-pointer bg-purple-200" for="hora2">min tal</label>
                                        <input type="radio" name="hora" id="hora3" />
                                        <label className="px-4 py-2 cursor-pointer bg-purple-200" for="hora3">min tal</label>
                                    </div>
                                    <button className="mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-200">Agendar Consulta</button>
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