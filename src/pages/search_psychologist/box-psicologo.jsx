import imgstar from "../../assets/star.png";
import { Link } from "react-router-dom";

const BoxPsicologo = ( { nome }) =>{
    return(
        <>
            <div className="py-4 px-8 mt-8 flex rounded-lg border-black bg-white">
                <div className="w-20 h-20 bg-purple-500 rounded-full"></div>
                <div className="flex justify-around flex-col grow">
                    <div className="flex flex-col md:flex-row justify-between">
                        <Link to="/psicologo"><h2 className="ml-8 text-lg md:border-b-4 border-purple-400">{nome}</h2></Link>
                        <div className="flex flex-col md:flex-row">
                            <h3 className="ml-8 md:ml-16">19 Anos</h3>
                            <h3 className="ml-8 md:ml-16">Psicologo</h3>
                            <h3 className="ml-8 md:ml-16 w-32 overflow-hidden whitespace-nowrap text-ellipsis">Tiradentes</h3>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="flex">
                            <img className="w-6 h-6 ml-8" src={imgstar} alt="star" />
                            <img className="w-6 h-6 ml-2" src={imgstar} alt="star" />
                            <img className="w-6 h-6 ml-2" src={imgstar} alt="star" />
                            <img className="w-6 h-6 ml-2" src={imgstar} alt="star" />
                            <img className="w-6 h-6 ml-2" src={imgstar} alt="star" />
                        </div>
                        <div>
                            <sub className="ml-8">Ativo desde 00/00/0000</sub>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxPsicologo;