import { Link } from "react-router-dom";
import logotipo from "../../assets/atena.svg";

const Login = () =>{
    return(
        <main>
            <article>
                <div class="min-h-screen flex items-center justify-center">
                    <div class="flex items-center justify-center rounded-xl bg-purple-500">
                        <div class="w-96 p-8 hidden md:block">
                            <h2 class="text-right text-xl text-white">Proteja e Empodere: Encontre os melhores profissionais da saúde.</h2>
                        </div>
                        <div class="w-96 sm:border-2 sm:border-black rounded-xl bg-white">
                            <h2 class="text-xl text-center mt-8">Seja Bem Vindo a</h2>
                            <div class="flex justify-center">
                                <img src={logotipo} alt="atena" />
                            </div>
                            <div class="flex justify-center">
                                <form class="w-64">
                                    <p>Nome</p>
                                    <input class="w-full px-2 py-1 border border-black my-2" type="text" />
                                    <p>Senha</p>
                                    <input class="w-full px-2 py-1 border border-black mt-2" type="password" />
                                    <button class="w-full px-2 py-1 mt-4 border border-black bg-purple-500"><Link to="/home">Entrar</Link></button>
                                    <h2 class="text-lg my-8">Não tem uma Conta ? <Link to="/cadastro" class="text-purple-500 font-bold">Crie uma</Link></h2>
                                    <button class="w-full px-2 py-1 mb-8 border border-black bg-gray-200">Entrar com o Google</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Login;