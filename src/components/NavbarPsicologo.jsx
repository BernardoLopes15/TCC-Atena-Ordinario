import { useState } from "react";
import { Link } from "react-router-dom";

import atenaText from "../assets/imgs/logo_navbar.png";
import imgmulher from "../assets/iconPsicologo.png";

const userName = "Fernanda";

const NavBar = () =>{
    const [menu, setMenu] = useState(false);

    const abreMenu = () =>{
        setMenu(menu ? false : true);
    }

    const irParaOTopo = () => {
        window.scrollTo(0, 0);
    }

    return(
        <header>
            <nav>
                <div className="w-full px-12 md:shadow-md z-10 fixed text-white bg-purple-900">
                    <div className="w-full h-16 flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-8" src={atenaText} alt="atena-text" />
                            <div className="hidden md:flex ml-8">
                                <h2 className="ml-8"><Link onClick={irParaOTopo} to="/homePsicologo">Início</Link></h2>
                                <h2 className="ml-8"><Link onClick={irParaOTopo} to="/solicitacao">Solicitações</Link></h2>
                                <h2 className="ml-8"><Link onClick={irParaOTopo} to="/calendario">Agenda</Link></h2>
                                <h2 className="ml-8"><Link onClick={irParaOTopo} to="/consultaPsicologo">Consultas</Link></h2>
                                <h2 className="ml-8"><Link onClick={irParaOTopo} to="/perfilPsicologo">Perfil</Link></h2>
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer" onClick={abreMenu}>
                            <p className="mr-4">{userName}</p>
                            <img src={imgmulher} alt="user" />
                        </div>
                    </div>
                    <div className={ menu ? `text-right` : `hidden` }>
                        <ul className="py-4">
                            <li className="py-2"><Link onClick={irParaOTopo} to="/homePsicologo">Início</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/solicitacao">Solicitações</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/calendario">Agenda</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/consultaPsicologo">Consultas</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/perfilPsicologo">Perfil</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo}>Opções</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/">Sair</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;