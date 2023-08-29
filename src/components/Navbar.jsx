import { useState } from "react";
import { Link } from "react-router-dom";

import imgmulher from "../assets/user.png";

const NavBar = () =>{
    const [menu, setMenu] = useState(false);

    const abreMenu = () =>{
        setMenu(menu ? false : true);
    }

    return(
        <header>
            <nav>
                <div class="w-full px-12 md:shadow-md z-10 fixed bg-purple-400">
                    <div class="w-full h-16 flex items-center justify-between">
                        <div class="flex items-center">
                            <h2 class="text-xl">A t e n a</h2>
                            <div class="hidden md:flex ml-8">
                                <h2 class="ml-8"><Link to="/home">Inicio</Link></h2>
                                <h2 class="ml-8"><Link to="/buscaPsicologo">Psicologos</Link></h2>
                                <h2 class="ml-8"><Link to="/consultas">Consulta</Link></h2>
                                <h2 class="ml-8"><Link to="/perfil">Perfil</Link></h2>
                            </div>
                        </div>
                        <div class="flex items-center cursor-pointer" onClick={abreMenu}>
                            <p class="mr-4">User</p>
                            <img src={imgmulher} alt="user" />
                        </div>
                    </div>
                    <div class={ menu ? `md:hidden` : `hidden` }>
                        <ul class="py-4">
                            <li class="py-2"><Link to="/home">Inicio</Link></li>
                            <li class="py-2"><Link to="/buscaPsicologo">Psicologos</Link></li>
                            <li class="py-2"><Link to="/consultas">Consulta</Link></li>
                            <li class="py-2"><Link to="/perfil">Perfil</Link></li>
                            <li class="py-2"><Link>opções</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;