import NavBar from "../../components/Navbar";
import imgpessoa from "../../assets/user.png";

const Psicologo = () =>{
    return(
        <div class="w-full px-4 py-2 my-4 flex items-center border border-black flex border-r-8 border-r-yellow-300">
            <img src={imgpessoa} alt="imagem_usuario" />
            <h2 class="ml-4">Lorem ipsum dolor</h2>
        </div>
    );
}

const Consulta = () =>{
    return(
        <>
            <NavBar />
            <div class="min-h-screen px-4 flex items-center justify-center bg-white md:bg-purple-100">
                <div class="mt-16 md:w-2/3 lg:w-1/3 rounded-xl p-4 bg-white">
                    <h2 class="py-4 text-xl text-center">Histórico de consultas</h2>
                    <div class="md:p-4">
                        <p class="text-gray-600">Filtros de consulta</p>
                        <div class="mb-4 grid grid-cols-3 bg-red-200">
                            <div class="p-2 bg-yellow-400">Consulta Pendente</div>
                            <div class="p-2 bg-green-400">Consulta Realizada</div>
                            <div class="p-2 bg-red-400">Consulta Cancelada</div>
                        </div>
                        <div class="flex flex-col">
                            <Psicologo />
                            <Psicologo />
                            <Psicologo />
                            <Psicologo />
                            <Psicologo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consulta;