import psicologoola from "../assets/psicologo_ola.svg";
import imgconsultas from "../assets/consultas_agendadas.svg";
import imgpsicologo from "../assets/consultar_Psicologo.svg";
import imgPerfil from "../assets/mellhorarPerfil.svg";

const HomeItems = () =>{
    return(
        <div class="min-h-screen px-4 flex justify-center bg-white md:bg-purple-100">
            <div class="mt-16">
                <div class="p-8 flex rounded-lg md:border-l-8 md:border-l-purple-500 mt-8 bg-purple-300">
                    <img src={psicologoola} alt="psicologo_ola" />
                    <div class="ml-4 flex justify-center flex-col">
                        <h2 class="text-xl">Olá wellyngton! Seja bem vindo</h2>
                        <h3 class="font-light">Que bom Você por aqui</h3>
                    </div>
                </div>
                <div class="p-8 flex flex-wrap rounded-lg md:border-l-8 md:border-l-purple-500 mt-8 bg-white">
                    <img class="w-32" src={imgconsultas} alt="psicologo_ola" />
                    <div class="w-1 mx-16 border-l border-black"></div>
                    <div class="ml-4 flex justify-center flex-col">
                        <h2 class="text-xl">Consultas Agendadas</h2>
                        <h3 class="font-light">Acesse aqui suas consultas pendentes</h3>
                    </div>
                </div>
                <div class="p-8 flex flex-wrap rounded-lg md:border-l-8 md:border-l-purple-500 mt-8 bg-white">
                    <img class="w-32" src={imgpsicologo} alt="psicologo_ola" />
                    <div class="w-1 mx-16 border-l border-black"></div>
                    <div class="ml-4 flex justify-center flex-col">
                        <h2 class="text-xl"><a href="./busca_psicologo.html">Consultar Psicologo</a></h2>
                        <h3 class="font-light">Acesse aqui para escolher e agendar uma consulta com um profissional qualificado.</h3>
                    </div>
                </div>
                <div class="p-8 flex flex-wrap rounded-lg md:border-l-8 md:border-l-purple-500 my-8 bg-white">
                    <img class="w-32 h-32" src={imgPerfil} alt="psicologo_ola" />
                    <div class="w-1 mx-16 border-l border-black"></div>
                    <div class="ml-4 flex justify-center flex-col">
                        <h2 class="text-xl">Melhorar Perfil</h2>
                        <h3 class="font-light">Acesse aqui suas definições de usuario.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeItems;