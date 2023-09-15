import BoxPsicologo from "./box-psicologo";

import NavBar from "../../components/Navbar";
import imglupa from "../../assets/Search.svg";
import Rodape from "../../components/Rodape";

const BuscarPsicologo = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen flex justify-center bg-purple-100">
                        <div className="px-8">
                            <div className="w-full pt-24 flex justify-center">
                                <div className="w-full flex items-center">
                                    <img className="absolute w-8 pl-2" src={imglupa} alt="busca" />
                                    <input className="w-full px-2 pl-10 py-2 rounded-lg" type="text" placeholder="Buscar" />
                                </div>
                            </div>
                            <div className="pb-8 flex justify-center">
                                <div className="flex justify-center flex-col flex-wrap">
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
            <Rodape />
        </>
    )
}

export default BuscarPsicologo;