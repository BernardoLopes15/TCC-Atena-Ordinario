import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import atenaText from "../assets/imgs/logo_navbar.png";
import imgmulher from "../assets/iconPsicologo.png";

const NavBar = () =>{
    const [menu, setMenu] = useState(false);
    const [usuario, setUsuario] = useState();
    const [imagem, setImagem] = useState();
    let sair = useRef();

    const abreMenu = () =>{
        setMenu(menu ? false : true);
    }

    const irParaOTopo = () => {
        window.scrollTo(0, 0);
    }

    const voltarPagina = () =>{
        sair.current?.click();
    }

    useEffect(()=>{
        let response = JSON.parse(sessionStorage.getItem('token')) || voltarPagina();
        if(!JSON.parse(sessionStorage.getItem('token'))) return;
        response?.nivelAcesso !== "psicologo" && voltarPagina();
        if(response){
            setUsuario(response.nome);
            setImagem(response.imagem);
            console.log(imagem);
        } 
    });

    const excluirToken = () => {
        irParaOTopo();

        sessionStorage.removeItem('token');
    }

    return(
        <header>
            <nav>
                <div className="w-full px-12 md:shadow-md z-10 fixed text-white bg-violet-800">
                    <div className="w-full h-16 flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-8" src={atenaText} alt="atena-text" />
                            <div className="hidden md:flex ml-8">
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/homePsicologo">Início</Link></h2>
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/consultaPsicologo">Consultas</Link></h2>
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/calendario">Agenda</Link></h2>
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/solicitacao">Solicitações</Link></h2>
                                <h2 className="ml-8 hover:text-gray-300"><Link onClick={irParaOTopo} to="/perfilPsicologo">Perfil</Link></h2>
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer" onClick={abreMenu}>
                            <p className="mr-4">{usuario}</p>
                            <img src={imagem} alt="user" className="w-12 h-12 flex-0 rounded-full bg-purple-200" style={{borderRadius: "50%"}}/>
                        </div>
                    </div>
                    <li className="hidden"><Link onClick={excluirToken} to="/" ref={sair}>Sair</Link></li>
                    <CSSTransition
                        in={menu}
                        timeout={300}
                        classNames="nav"
                        unmountOnExit
                    >
                        <ul className="py-4">
                            <li className="py-2"><Link onClick={irParaOTopo} to="/homePsicologo">Início</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/consultaPsicologo">Consultas</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/calendario">Agenda</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/solicitacao">Solicitações</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo} to="/perfilPsicologo">Perfil</Link></li>
                            <li className="py-2"><Link onClick={irParaOTopo}>Opções</Link></li>
                            <li className="py-2"><Link onClick={excluirToken} to="/" ref={sair}>Sair</Link></li>
                        </ul>
                    </CSSTransition>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;