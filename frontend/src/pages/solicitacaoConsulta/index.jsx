import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";

import { HiOutlineCheckCircle } from 'react-icons/hi';
import { IoCloseCircleOutline } from 'react-icons/io5';

import imguser from "../../assets/user.png";
import imgUser2 from "../../assets/imgs/user2.jpg"
import imgUser3 from "../../assets/imgs/user3.jpg"

import "../solicitacaoConsulta/styles.css"

const BoxSolicitacao = ({userName, imgUser, negar}) =>{
    return(
        <div className="py-2 px-3 flex items-center justify-between rounded-lg mb-6 border border-black">
            <div className="flex items-center">
                <img className="w-12 h-12 rounded-full" src={imgUser}  alt="" />
                <h3 className="ml-8 text-lg">{userName}</h3>
            </div>
            <div className="flex">
                <HiOutlineCheckCircle className="cursor-pointer" color="green" size={40} />
                <IoCloseCircleOutline  onClick={negar} className="ml-4 cursor-pointer" color="red" size={40} />
            </div>
        </div>
    );
}

const SolicitacaoConsulta = () =>{
    const [anima, setAnima] = useState(false);

    useEffect(() => {
        setAnima(true);
    }, []);

    const [negarConsulta, setNegarConsulta] = useState(false)

    const negarSolicitacao = () =>{
         setNegarConsulta(negarConsulta ? false : true)
    }

    return(
        <>
            <NavBar />
            <div className={`min-h-screen flex justify-center md:bg-purple-100`}>
            <CSSTransition
                        in={anima}
                        timeout={1000}
                        classNames="page"
                        unmountOnExit
                    >
                    
                
                <div className="w-full pt-16 flex items-center justify-center mt-5">
                  
                  

                        <div className={`w-full md:w-8/12 lg:w-6/12 p-4 lg:p-8 rounded-xl bg-white transition-blur duration-300 ${negarConsulta && "blur-sm"}`}>
                            <h2 className="mb-8 text-5xl text-center font-style">Solicitações</h2>
                            <BoxSolicitacao userName="Júlia Souza Ferraz" imgUser={imguser} negar={negarSolicitacao}/>
                            <BoxSolicitacao userName="Natália Andreia Silveira" imgUser={imgUser2} negar={negarSolicitacao}/>
                            <BoxSolicitacao userName="Maria Luna de Paula" imgUser={imgUser3} negar={negarSolicitacao}/>
                        </div>

                                {
                                    negarConsulta && <div className="fixed inset-0 flex items-center justify-center " >
                                        <div className="p-4 w-1/3  md:bg-white type-account">

                                        <div className="flex justify-end" >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" className="absolute cursor-pointer" onClick={()=>setNegarConsulta(false)}>
                                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                         </svg>
                                        </div>

                                            <h2 className="text-xl font-bold text-purple-500 mb-2 mt-3 ">Por que quer negar essa solicitação ?</h2>
                                            <h2 className="text-xl">Selecione um motivo:</h2>

                                            <select name="motivo" id="motivo" className="mt-4 border-2 border-slate-950 rounded">
                                                 
                                                 <option value="Não vou poder comparecer">Não vou poder comparecer</option>
                                                 <option value="Problemas com a internet">Problemas com a internet</option>
                                                 <option value="Problemas com o dispositivo">Problemas com o dispositivo</option>
                                                 <option value="Outros">Outros</option>
                                            </select>

                                            <button className="w-full px-2 py-1 mt-6 btn" onClick={()=>setNegarConsulta(false)} >Confirmar</button>
                                            
                                        </div>
                                    </div>   
                                } 

{/* onClick={()=>setNegarConsulta(false)} */}

                    
                </div>
                </CSSTransition>
            </div>
            <Rodape />
        </>
    );
}

export default SolicitacaoConsulta;