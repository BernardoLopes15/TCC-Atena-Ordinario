import BoxPsicologo from "./box-psicologo";

import NavBar from "../../components/Navbar";
import imglupa from "../../assets/Search.svg";

const BuscarPsicologo = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div class="min-h-screen flex justify-center bg-purple-100">
                        <div class="px-8">
                            <div class="w-full pt-24 flex justify-center">
                                <div class="w-full flex items-center">
                                    <img class="absolute w-8 pl-2" src={imglupa} alt="busca" />
                                    <input class="w-full px-2 pl-10 py-2 rounded-lg" type="text" placeholder="Buscar" />
                                </div>
                            </div>
                            <div class="pb-8 flex justify-center">
                                <div class="flex justify-center flex-col flex-wrap">
                                    <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                    <BoxPsicologo nome="Rian Vieira de Jesus" />
                                    <BoxPsicologo nome="Beatriz Bialtas" />
                                    <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                    <BoxPsicologo nome="Rian Vieira de Jesus" />
                                    <BoxPsicologo nome="Beatriz Bialtas" />
                                    <BoxPsicologo nome="Wellyngton de souza teixeira" />
                                    <BoxPsicologo nome="Rian Vieira de Jesus" />
                                    <BoxPsicologo nome="Beatriz Bialtas" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default BuscarPsicologo;