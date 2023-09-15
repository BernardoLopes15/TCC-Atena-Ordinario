import NavBar from "../../components/Navbar";
import imgpessoa from "../../assets/user.png";
import Rodape from "../../components/Rodape";

const Psicologo = () =>{
    return(
        <div className="w-full px-4 py-2 my-4 flex items-center border border-black flex border-r-8 border-r-yellow-300">
            <img src={imgpessoa} alt="imagem_usuario" />
            <h2 className="ml-4">Lorem ipsum dolor</h2>
        </div>
    );
}

const Consulta = () =>{
    return(
        <>
            <NavBar />
            <div className="min-h-screen px-4 flex items-center justify-center bg-white md:bg-purple-100">
                <div className="mt-16 md:w-2/3 lg:w-1/3 rounded-xl p-4 bg-white">
                    <h2 className="py-4 text-xl text-center">Histórico de consultas</h2>
                    <div className="md:p-4">
                        <p className="text-gray-600">Filtros de consulta</p>
                        <div className="mb-4 grid grid-cols-3">
                            <div className="p-2 cursor-pointer hover:bg-yellow-400 border border-yellow-400">Consulta Pendente</div>
                            <div className="p-2 cursor-pointer hover:bg-green-400 border border-green-400">Consulta Realizada</div>
                            <div className="p-2 cursor-pointer hover:bg-red-400 border border-red-400">Consulta Cancelada</div>
                        </div>
                        <div className="flex flex-col">
                            <Psicologo />
                            <Psicologo />
                            <Psicologo />
                            <Psicologo />
                            <Psicologo />
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default Consulta;