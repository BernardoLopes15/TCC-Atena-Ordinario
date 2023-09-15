import React from "react";
import NavBar from "../../components/Navbar";
import imgUser from "../../assets/user.png";
import Rodape from "../../components/Rodape";

const InspecionarPsicologo = () =>{
    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex bg-white md:bg-purple-100">
                <div className="w-full mt-16 flex items-center justify-center">
                    <div className="lg:w-6/12 px-8 py-4 bg-white">
                        <div>
                            <button className="p-4 text-lg font-bold text-purple-500">Voltar</button>
                        </div>
                        <div>
                            <div className="flex">
                                <img className="w-24" src={imgUser} alt="user" />
                                <div className="flex items-center">
                                    <h3 className="px-4 text-xl">Wellyngton de souza</h3>
                                    <h4>idade</h4>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <h3>CRP</h3>
                                <h3 className="ml-8">Profissão</h3>
                            </div>
                            <div>
                                <h2 className="text-xl mb-4">Apresentação</h2>
                                <div>
                                    <p>Minha atuação inclui a realização de avaliações psicológicas, diagnósticos, elaboração de planos de tratamento e a implementação de intervenções terapêuticas adequadas. Trabalho em parceria com meus pacientes, fornecendo um espaço seguro e confidencial para que eles possam expressar suas preocupações e explorar questões emocionais e psicológicas mais profundas.</p>
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
                        </div>
                    </div>
                </div>
            </div>
            <Rodape color="bg-white" />
        </>
    );
}

export default InspecionarPsicologo;