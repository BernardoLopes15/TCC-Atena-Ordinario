import { Link } from "react-router-dom";
import imgpreview from "../../../assets/image-review.svg";

const CadastroPsicologo = () => {
    return(
        <main>
            <article className="md:bg-purple-400">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="lg:w-1/2 p-12 rounded-xl bg-white">
                        <h2 className="text-center text-xl">Cadastro Psicologo</h2>
                        <div className="flex justify-between">
                            <div className="w-1/2 flex flex-col justify-end">
                                <h2 className="mt-8 mb-4">Nome</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="text" />
                                <h2 className="mt-8 mb-4">CPF</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="text" />
                                <h2 className="mt-8 mb-4">Telefone</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="text" />
                                <h2 className="mt-8 mb-4">E-mail</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="text" />
                                <h2 className="mt-8 mb-4">CRP</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="text" />
                            </div>
                            <div className="w-1/2 ml-8">
                                <div className="flex justify-center">
                                    <div className="w-32 h-32 rounded-full hover:border-4 border-purple-200 transition-colors flex flex-col items-center justify-center bg-purple-500">
                                        <img src={imgpreview} alt="img-preview" />
                                        <p>Faça upload</p>
                                        <input className="w-32 h-32 cursor-pointer absolute opacity-0" type="file" />
                                    </div>
                                </div>
                                <h2 className="mt-8 mb-4">Nascimento</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="date" />
                                <h2 className="mt-8 mb-4">Senha</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="password" />
                                <h2 className="mt-8 mb-4">Confirmar Senha</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="password" />
                                <h2 className="mt-8 mb-4">E-Psi</h2>
                                <input className="w-full px-2 py-1 border-2 border-black" type="text" />
                            </div>
                        </div>
                        <div className="flex justify-center mt-16">
                            <Link to="/login"><button className="w-64 py-2 text-white rounded-lg bg-purple-500">Cadastrar</button></Link>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroPsicologo;