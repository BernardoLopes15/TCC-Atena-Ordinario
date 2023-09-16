import { useState } from "react";
import { Link } from "react-router-dom";

import atenaText from "../assets/imgs/logo_navbar.png";
import imgmulher from "../assets/user.png";

const NavBar = () =>{
    const [menu, setMenu] = useState(false);

    const abreMenu = () =>{
        setMenu(menu ? false : true);
    }

    return(
        <header>
            <nav>
                <div className="w-full px-12 md:shadow-md z-10 fixed text-white bg-purple-900">
                    <div className="w-full h-16 flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-8" src={atenaText} alt="atena-text" />
                            <div className="hidden md:flex ml-8">
                                <h2 className="ml-8"><Link to="/home">Inicio</Link></h2>
                                <h2 className="ml-8"><Link to="/buscaPsicologo">Psicologos</Link></h2>
                                <h2 className="ml-8"><Link to="/consultas">Consulta</Link></h2>
                                <h2 className="ml-8"><Link to="/perfil">Perfil</Link></h2>
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer" onClick={abreMenu}>
                            <p className="mr-4">User</p>
                            <img src={imgmulher} alt="user" />
                        </div>
                    </div>
                    <div className={ menu ? `text-right` : `hidden` }>
                        <ul className="py-4">
                            <li className="py-2"><Link to="/home">Inicio</Link></li>
                            <li className="py-2"><Link to="/buscaPsicologo">Psicologos</Link></li>
                            <li className="py-2"><Link to="/consultas">Consulta</Link></li>
                            <li className="py-2"><Link to="/perfil">Perfil</Link></li>
                            <li className="py-2"><Link>opções</Link></li>
                            <li className="py-2"><Link to="/">Sair</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;