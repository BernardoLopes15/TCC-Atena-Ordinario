import BoxPsicologo from "./box-psicologo";
import axios from "axios";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import NavBar from "../../components/Navbar";
import imglupa from "../../assets/Search.svg";
import Rodape from "../../components/Rodape";

import MainUrl from "../../connection config/url";

import Psicologo1 from "../../assets/imgs/psicologo1.png";

const BuscarPsicologo = () =>{
    const [anima, setAnima] = useState(false);
    const [psicologos, setPsicologos] = useState([]);
    const [nomePsicologo, setNomePsicologo] = useState("");

    const mostrarIdade = (dataBr) =>{
        const dtNascimento = new Date(dataBr);
        const dtAtual = new Date();
        const diferencaMilissegundos = dtAtual - dtNascimento;
        const anos = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24 * 365.25));
        return anos;
    }

    const filtrarPsicologo = () =>{
        axios.post(MainUrl + "filtrarPsicologo.php", JSON.stringify({ nome: nomePsicologo }))
            .then((e)=> setPsicologos(e.data.response));
    }

    useEffect(()=>{
        if(!nomePsicologo) {
            setAnima(true);

            try{
                axios.get(MainUrl + "buscarPsicologos.php")
                    .then((psico) => setPsicologos(psico.data.response));
            } catch{
                console.log("não encontrado");
            }
            return;
        }
        filtrarPsicologo();
        console.log(nomePsicologo);
    }, [nomePsicologo]);
    
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen flex justify-center bg-purple-100">
                        <div className="px-8 ">
                            <div className="w-full pt-24 flex justify-center">
                                <div className="w-full flex items-center">
                                    <img className="absolute w-8 pl-2" src={imglupa} alt="busca" />
                                    <input className="w-full px-2 pl-10 py-2 rounded-lg" onChange={(e) => setNomePsicologo(e.target.value)} type="text" placeholder="Buscar" />
                                </div>
                            </div>  
                            <div className="pb-8 flex justify-center">
                                <CSSTransition
                                    in={anima}
                                    timeout={1000}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div className="flex justify-center flex-col flex-wrap">
                                        {
                                            psicologos ?
                                            psicologos.map((psicologo, index) => (

                                                <BoxPsicologo key={index} nome={psicologo.nm_psicologo} idade={mostrarIdade(psicologo.dt_nascimento)} proficao="Psicólogo(a)" image={Psicologo1} cidade={psicologo.nm_localizacao} data={psicologo.dt_cadastro.split('-').reverse().join('/') } imagePath={psicologo.nm_foto_perfil} />

                                            ))
                                            :
                                            <h2 className="w-96 box-content p-8 text-3xl">Usuario não encontrado</h2>
                                        }
                                    </div>
                                </CSSTransition>
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