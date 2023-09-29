import imgstar from "../../assets/star.png";
import { Link } from "react-router-dom";

const BoxPsicologo = ( { nome, idade, proficao, image, cidade, data }) =>{
    return(
        <>
            <div className="py-4 px-8 mt-8 flex rounded-lg border-black bg-white">
                <div>
                    <img src={image} className="w-16 h-16 md:w-20 md:h-20 rounded-full" alt="foto psicologo"/>
                </div>
                <div className="flex justify-around flex-col grow">
                    <div className="flex flex-col md:flex-row justify-between">
                        <Link to="/psicologo"><h2 className="ml-8 text-lg md:border-b-4 border-purple-400">{nome}</h2></Link>
                        <div className="flex flex-col md:flex-row">
                            <h3 className="ml-8 md:ml-16">{idade} Anos</h3>
                            <h3 className="ml-8 md:ml-16">{proficao}</h3>
                            <h3 className="ml-8 md:ml-16 w-32 overflow-hidden whitespace-nowrap text-ellipsis">{cidade}</h3>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row">
                        <div>
                            <sub className="ml-8">Perfil ativo desde {data}</sub>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxPsicologo;