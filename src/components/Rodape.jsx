import imgicone from "../assets/imgs/logo_atena.png";
import { FaInstagram, FaFacebook, FaHome, FaYoutube } from 'react-icons/fa';

const Rodape = (entrada) =>{
    return(
        <>
            <svg className={entrada.estilo ? entrada.estilo : `md:bg-purple-100`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#581c87ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="flex justify-center bg-purple-900">
                <div className="px-12 md:w-2/3 py-16 flex items flex-wrap justify-between">
                    <div className="text-white mr-8">
                        <div className="flex items-center">
                            <img className="h-32" src={imgicone} alt="athena" />
                            <h2>Athena</h2>
                        </div>
                        <button className="px-16 py-6 border-white border-2">Contact US</button>
                    </div>
                    <div className="flex">
                        <div className="w-48 md:w-64 lg:w-72 mt-16 md:mt-0 text-white border-l-white border-l-4">
                            <h2 className="px-4 py-2">Home</h2>
                            <h2 className="px-4 py-2">Work</h2>
                            <h2 className="px-4 py-2">Blog</h2>
                            <h2 className="px-4 py-2">About</h2>
                        </div>
                        <div className="md:w-16 lg:w-32 mt-16 md:mt-0 border-l-white border-l-4">
                            <FaInstagram className="ml-4 mb-4 text-4xl" color="white" />
                            <FaFacebook className="ml-4 mb-4 text-4xl" color="white" />
                            <FaYoutube className="ml-4 mb-4 text-4xl" color="white" />
                            <FaHome className="ml-4 mb-4 text-4xl" color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rodape;