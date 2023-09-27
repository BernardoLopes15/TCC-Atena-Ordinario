import BoxPsicologo from "./box-psicologo";

import NavBar from "../../components/Navbar";
import imglupa from "../../assets/Search.svg";
import Rodape from "../../components/Rodape";

import Psicologo1 from "../../assets/imgs/psicologo1.png"
import Psicologo2 from "../../assets/imgs/psicologo2.png"
import Psicologo3 from "../../assets/imgs/psicologo3.png"
import Psicologo4 from "../../assets/imgs/psicologo4.png"
import Psicologo5 from "../../assets/imgs/psicologo5.png"

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
                                    <BoxPsicologo nome="Fernanda Sandra Ribeiro" idade="25" image={Psicologo1} cidade="Mongaguá" data="12/05/2023"/>
                                    <BoxPsicologo nome="Ruan Renato Ferreira" idade="33" image={Psicologo2} cidade="Praia Grande" data="23/08/2023"/>
                                    <BoxPsicologo nome="Mirella Sara Galvão"  idade="40" image={Psicologo3} cidade="Santos" data="13/05/2023"/>
                                    <BoxPsicologo nome="Sebastiana Lara Eloá" idade="53" image={Psicologo4} cidade="Santos" data="05/06/2023"/>
                                    <BoxPsicologo nome="Daniel henrique feirreira" idade="35" image={Psicologo5} cidade="São Vicente" data="15/09/2023"/>
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