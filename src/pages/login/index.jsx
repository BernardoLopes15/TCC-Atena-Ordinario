import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import imgcliente from "../../assets/client_cadastro.png";
import imgpsicologo from "../../assets/psicologo_cadastro.png";
import logoAtena from "../../assets/imgs/logo_purple.png";

import '../login/styles.css';

import { CSSTransition } from "react-transition-group";

const Login = () =>{
    const [menucadastro, setMenuCadastro] = useState(false);

    const selectCadastro = () =>{
        setMenuCadastro(menucadastro ? false : true);
    }

    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, []);

    return(
        <>
            {/*
                <CSSTransition
                    in={!anima}
                    timeout={100}
                    classNames="page"
                    unmountOnExit
                >
                    <div className="w-full min-h-screen flex items-center fixed z-50 justify-center bg-white">
                        <img className="w-96" loading="lazy" src={logoAtena} alt="logo atena" />
                    </div>
                </CSSTransition>
            */}
            <main>
                <article>
                    <div className="min-h-screen flex items-center justify-center">
                        <CSSTransition
                            in={anima}
                            timeout={1000}
                            classNames="page"
                            unmountOnExit
                        >
                            <div>
                                <div className={`flex items-center justify-center transition-blur duration-300 ${menucadastro && "blur-sm"} rounded-xl bg-purple-500 content-login`}>
                                    <div className="w-96 p-8 hidden md:block text">
                                        <h2 className="text-right">É o nosso dever tornar este mundo melhor para as mulheres.</h2>
                                    </div>
                                    <div className="w-screen md:w-96 md:rounded-xl flex items-center justify-center bg-white loge">
                                        <div>
                                            <h2 className="text-xl text-center mt-8 title" >Seja bem vindo(a)</h2>
                                            <div className="flex justify-center">
                                            <Link to="/"> <img loading="lazy" className="w-72 h-72" src={logoAtena} alt="atena" /> </Link>
                                            </div>
                                            <div className="flex justify-center inputs">
                                                <div className="w-72 content-inputs">
                                                    <p>E-mail</p>
                                                    <input className="w-full px-2 py-1 border border-black my-2" type="email" placeholder="Digite aqui"/>
                                                    <p>Senha</p>
                                                    <input className="w-full px-2 py-1 border border-black mt-2" type="password" placeholder="Digite aqui"/> 
                                                    <Link to="/homeCliente">
                                                        <button className="w-full px-2 py-1 mt-4 btn" >Entrar</button>
                                                    </Link>
                                                    <h2 className="text-lg my-8 account">Não tem uma Conta ? <button className="text-purple-500 font-bold hover:underline underline-offset-2" onClick={selectCadastro}>Crie uma</button></h2>
                                                    <Link to="/homePsicologo">
                                                        <button className="w-full px-2 py-1 mb-8 border border-black bg-gray-200 google">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/></svg>
                                                        Entrar com o Google
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    menucadastro && <div className="fixed inset-0 flex items-center justify-center square" onClick={()=>setMenuCadastro(false)}>
                                        <div className="p-4  md:bg-white type-account">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" className="exit">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg> */}

                                            <h2 className="text-xl font-bold text-purple-500">Contas</h2>
                                            <h2 className="text-xl">Selecione um tipo de conta:</h2>

                                            <div className="w-96 px-4 flex justify-between mt-8 accounts">
                                                <Link to="/cadastro" className="cursor-pointer hover:text-purple-500 account-usuario">
                                                    <img loading="lazy" className="w-32 h-32 rounded-full border border-gray-200" src={imgcliente} alt="client" />
                                                    <h2 className="text-lg">Usuária</h2>
                                                </Link>
                                                <Link to="/cadastroPsicologo" className="cursor-pointer hover:text-purple-500 account-psicologo">
                                                    <img loading="lazy" className="w-32 h-32 rounded-full border border-gray-200" src={imgpsicologo} alt="client" />
                                                    <h2 className="text-lg">Psicológo(a)</h2>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>   
                                }
                            </div>
                        </CSSTransition>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Login;

