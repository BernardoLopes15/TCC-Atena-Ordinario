import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";

import usuario from "../../assets/imgs/psicologo1.png";

// const userName = "Fernanda Sandra Ribeiro";
// const userEmail = "fernanda_Sandra@artelazer.com";
// const userCPF = "762476499-75";
// const userPhone = "(13) 8998-6975";
// const userDate = "27/07/1998";


const PerfilPsicologo = () =>{
    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, []);

    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100">
                        <CSSTransition
                            in={anima}
                            timeout={1000}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="lg:w-6/12 pt-16 lg:px-4 mt-5">
                                <div className="h-56 lg:rounded-t-xl bg-purple-800"></div>
                                <div className="lg:rounded-b-xl bg-white px-8">
                                    <div className="h-0 flex items-center mb-16">
                                      <Link to="/editImgPsicologo">  <img loading="lazy" className="w-32 h-32 flex-0 rounded-full bg-purple-200" src={usuario} alt="usuario" /></Link>
                                    </div>
                                    <h2 className="pt-4 font-semibold font-title text-2xl">Fernanda Souza</h2>
                                    <div className="py-4 flex justify-between">
                                        <div className="grid grid-cols-2">
                                            <p className="font-medium">E-mail:</p>
                                            <input type="text" value="fernandaSand@lazer.com" disabled/>
                                            <p className="font-medium">CPF:</p>
                                            <input type="text" value="762476499-75" disabled/>
                                            <p className="font-medium">Data de nascimento:</p>
                                            <input type="text" value="14/05/1995" disabled />
                                            <p className="font-medium">Telefone:</p>
                                            <input type="text" value="(13) 8998-6975" disabled/>
                                        </div>

                                        {/* <div className="text-right">
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 1</p></a>
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 2</p></a>
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 3</p></a>
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 4</p></a>
                                        </div> */}
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium">Apresentação</p>
                                        <p>
                                        Sou uma psicóloga dedicada a ajudar as pessoas a descobrirem seu potencial máximo e alcançarem uma vida equilibrada e gratificante. Minha paixão é proporcionar apoio, compreensão e orientação a indivíduos que desejam fortalecer sua saúde mental e emocional. Minha atuação inclui a realização de avaliações psicológicas, elaboração de planos de tratamento.
                                        </p>
                                    </div>
                                    <div className="py-12 flex justify-center">
                                        <Link to="/editPsicologo"><button className="text-lg w-60 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400 text-white hover:bg-purple-950">Editar</button></Link>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </article>
            </main>
            <Rodape estilo="lg:bg-purple-100" />
        </>
    )
}

export default PerfilPsicologo;

/*
import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";
import ImagePsicologo from "../../assets/imgs/userPsicologo.png"
import { Link } from "react-router-dom";

import "../profilePsicologo/styles.css"

const userName = "Fernanda Sandra Ribeiro";
const userEmail = "fernanda_Sandra@artelazer.com";
const userCPF = "762476499-75";
const userPhone = "(13) 8998-6975";
const userDate = "27/07/1998";

const PerfilPsicologo = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100 perfilPsicologo">
                        <div className="lg:w-6/12 pt-16 lg:px-4 content-perfilPsicologo">

                            <div className="h-64 content-superior">

                            <h2 className="text-xl pt-4 name" >{userName}</h2>

                            </div>

                              <div className="h-96 bg-white px-8 content-inferior">

                                <div className="h-0 flex items-center mb-16">
                                    <div className="w-32 h-32 flex-0 rounded-full imagePerfil">
                                       <img loading="lazy" src={ImagePsicologo} alt="foto de perfil"></img>
                                    </div>
                                </div>

                                

                                <div className="py-4 flex dados">
                                    
                                   <h2 className="titlee">Dados Pessoais</h2>
                                   
                                  <div className="dividir">
                                    <div className="content-dados">
                                       <ul>
                                        <li> <label>E-mail:</label> {userEmail}</li>
                                        <li> <label>CPF:</label> {userCPF}</li>
                                        <li> <label>Telefone:</label>  {userPhone}</li>
                                        <li> <label>Data de nascimento:</label>  {userDate}</li>
                                       </ul>
                                    </div>

                                <div className="apresentation">
                                    <div className="content-apresentation">
                                        <h1 className="title">Minha apresentação</h1>
                                        <p>Sou formada em psicologia pela USP e conduzo palestras sobre a saúde mental feminina, minha atuação inclui a realização de avaliações psicológicas, elaboração de planos de tratamento e a implementação de intervenções adequadas.</p>
                                    </div>
                                </div>
                               </div>
                           
                              <div className="center">
                               <Link to="/editPsicologo"><button type="button" className="py-2 btn">Editar Perfil</button></Link>
                              </div>

                            </div>

                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Rodape estilo="lg:bg-purple-100" />
        </>
    )
}

export default PerfilPsicologo;
*/