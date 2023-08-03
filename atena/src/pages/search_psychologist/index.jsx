import BoxPsicologo from "./box-psicologo";

import NavBar from "../../components/Navbar";
import imglupa from "../../assets/Search.svg";

const BuscarPsicologo = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div class="min-h-screen bg-purple-100">
                        <div class="pt-24 flex justify-center">
                            <div class="flex items-center">
                                <img class="absolute w-8 pl-2" src={imglupa} alt="busca" />
                                <input class="px-2 pl-10 py-2 w-96 rounded-lg" type="text" placeholder="Buscar" />
                            </div>
                        </div>
                        <div class="px-8 flex justify-center">
                            <div class="flex flex-col">
                                <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                <BoxPsicologo nome="Wellyngton de souza teixeira" />
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default BuscarPsicologo;