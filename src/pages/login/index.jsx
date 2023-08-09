import { useState } from "react";
import { Link } from "react-router-dom";
import logotipo from "../../assets/atena.svg";
import imgcliente from "../../assets/client_cadastro.png";
import imgpsicologo from "../../assets/psicologo_cadastro.png";

const Login = () =>{
    const [menucadastro, setMenuCadastro] = useState(false);

    const selectCadastro = () =>{
        setMenuCadastro(menucadastro ? false : true);
    }

    return(
        <main>
            <article>
                <div class="min-h-screen flex items-center md:bg-purple-100 justify-center">
                    <div class={`flex items-center justify-center transition-blur duration-300 ${menucadastro && "blur-sm"} rounded-xl bg-purple-500`}>
                        <div class="w-96 p-8 hidden md:block">
                            <h2 class="text-right text-xl text-white">Proteja e Empodere: Encontre os melhores profissionais da saúde.</h2>
                        </div>
                        <div class="w-96 sm:border-2 sm:border-black rounded-xl bg-white">
                            <h2 class="text-xl text-center mt-8">Seja Bem Vindo a</h2>
                            <div class="flex justify-center">
                                <img class="w-72" src={logotipo} alt="atena" />
                            </div>
                            <div class="flex justify-center">
                                <div class="w-64">
                                    <p>Nome</p>
                                    <input class="w-full px-2 py-1 border border-black my-2" type="text" />
                                    <p>Senha</p>
                                    <input class="w-full px-2 py-1 border border-black mt-2" type="password" />
                                    <Link to="/home">
                                        <button class="w-full px-2 py-1 mt-4 text-white bg-purple-500">Entrar</button>
                                    </Link>
                                    <h2 class="text-lg my-8">Não tem uma Conta ? <button class="text-purple-500 font-bold hover:underline underline-offset-2" onClick={selectCadastro}>Crie uma</button></h2>
                                    <Link to="/home">
                                        <button class="w-full px-2 py-1 mb-8 border border-black bg-gray-200">Entrar com o Google</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        menucadastro && <div class="fixed inset-0 flex items-center justify-center">
                            <div class="p-4 rounded-lg md:border border-black md:bg-white">
                                <h2 class="text-xl font-bold text-purple-500">Cadastro</h2>
                                <h2 class="text-xl">Aperte em sua respectiva função</h2>
                                <div class="w-96 px-4 flex justify-between mt-8">
                                    <Link to="/cadastro" class="cursor-pointer hover:text-purple-500">
                                        <img class="w-32 h-32 rounded-full border border-gray-200" src={imgcliente} alt="client" />
                                        <h2 class="text-lg">Cliente</h2>
                                    </Link>
                                    <Link to="/cadastroPsicologo" class="cursor-pointer hover:text-purple-500">
                                        <img class="w-32 h-32 rounded-full border border-gray-200" src={imgpsicologo} alt="client" />
                                        <h2 class="text-lg">Psicologo</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>   
                    }
                </div>
            </article>
        </main>
    )
}

export default Login;