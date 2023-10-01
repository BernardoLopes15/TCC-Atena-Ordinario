import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";

import imgusuario from "../../assets/imgs/userExemplo.png";

const PerfilCliente = () =>{
    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, []);

    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100 perfilCliente">
                        <CSSTransition
                            in={anima}
                            timeout={1000}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="lg:w-6/12 pt-16 lg:px-4 content-perfilCliente mt-5">
                                <div className="h-56 lg:rounded-t-xl bg-purple-800"></div>
                                <div className="lg:rounded-b-xl bg-white px-8">
                                    <div className="h-0 flex items-center mb-16">
                                        <img loading="lazy" className="w-32 h-32 flex-0 rounded-full bg-purple-200" src={imgusuario} alt="usuario" />
                                    </div>
                                    <h2 className=" pt-4 font-semibold font-title text-2xl">Júlia Souza Ferraz</h2>
                                    <div className="py-4 flex justify-between">
                                        <div className="grid grid-cols-2">
                                            <p className="font-medium">E-mail:</p>
                                            <input type="text" value="Julia.sousza95@gmail" disabled/>
                                            <p className="font-medium">CPF:</p>
                                            <input type="text" value="560885963-41" disabled/>
                                            <p className="font-medium">Data de nascimento:</p>
                                            <input type="text" value="14/05/1995" disabled/>
                                            <p className="font-medium">Telefone:</p>
                                            <input type="text" value="(13) 2826-1764" disabled/>
                                        </div>
                                    </div>
                                    <div className="py-12 flex justify-center">
                                        <Link to="/editCliente"><button className=" text-lg w-60 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400 text-white hover:bg-purple-950">Editar</button></Link>
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

export default PerfilCliente;
/*
import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import ImageCliente from "../../assets/imgs/userExemplo.png"
import { Link } from "react-router-dom";

import "../profileCliente/styles.css"

const userName = "Júlia Souza Ferraz";
const userEmail = "Julia.sousza95@gmail";
const userCPF = "560885963-41";
const userPhone = "(13) 2826-1764";
const userDate = "14/05/1995";

const PerfilCliente = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100 perfilCliente">
                        <div className="lg:w-6/12 pt-16 lg:px-4 content-perfilCliente">

                            <div className="h-64 content-superior">

                            <h2 className="text-xl pt-4 name" >{userName}</h2>

                            </div>

                              <div className="h-96 bg-white px-8 content-inferior">

                                <div className="h-0 flex items-center mb-16">
                                    <div className="w-32 h-32 flex-0 rounded-full  imagePerfil">
                                       <img loading="lazy" src={ImageCliente} alt="foto de perfil" ></img>
                                    </div>
                                </div>

                                <div className="dividir">

                                <div className="py-4 flex justify-between dados">

                                    <div>
                                        <h2 className="title">Dados Pessoais</h2>
                                       <ul>
                                        <li> <label>E-mail:</label> {userEmail}</li>
                                        <li> <label>CPF:</label> {userCPF}</li>
                                        <li> <label>Telefone:</label>  {userPhone}</li>
                                        <li> <label>Data de nascimento:</label>  {userDate}</li>
                                       </ul>
                                    </div>
                                </div>

                                <div className="text-right">
                                <Link to="/editCliente"><button type="button" className="py-2 btn">Editar Perfil</button></Link>
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

export default PerfilCliente;
*/