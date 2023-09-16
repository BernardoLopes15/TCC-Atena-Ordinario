import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";

const Perfil = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100">
                        <div className="lg:w-6/12 pt-16 lg:px-4">
                            <div className="h-64 lg:rounded-t-lg bg-purple-800"></div>
                            <div className="h-96 lg:rounded-b-lg bg-white px-8">
                                <div className="h-0 flex items-center mb-16">
                                    <div className="w-32 h-32 flex-0 rounded-full bg-purple-200"></div>
                                </div>
                                <h2 className="text-xl pt-4">Bernado lopez da cruz</h2>
                                <div className="py-4 flex justify-between">
                                    <div>
                                        <p>Cpf</p>
                                        <p>Data Nascimento</p>
                                        <p>Bio</p>
                                    </div>
                                    <div className="text-right">
                                        <p>Gmail</p>
                                        <p>Telefone</p>
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

export default Perfil;