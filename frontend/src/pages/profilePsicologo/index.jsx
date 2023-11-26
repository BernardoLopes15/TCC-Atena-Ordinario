import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import MainUrl from "../../connection config/url";
import { useRef } from "react";
import Swal from "sweetalert2";

import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";
import axios from "axios";
import usuario from "../../assets/imgs/psicologo1.png";


const PerfilPsicologo = () =>{
    const [anima, setAnima] = useState(false);

    const [psicologo, setPsicologo] = useState();
    let loginScreen = useRef(null);

    useEffect(() => {
        setAnima(true);

        axios.post(MainUrl + "perfilPsicologo.php", JSON.stringify(JSON.parse(sessionStorage.getItem('token'))))
          .then((e) => {
            console.log(e.data.response);
            setPsicologo(e.data.response);
          })
          .catch((error) => console.error('Erro ao buscar os dados:', error));

    }, []);

    const enviar = async () => {

        let novoForm = {
            cpf: psicologo.CPF,
        }
    
        axios.post(MainUrl + 'excluirPsicologo.php', JSON.stringify(novoForm))
        .then((e) => {
            console.log(e);
            //alert(JSON.stringify(response.data));
        
        })
        .catch((error) => console.error('Erro ao buscar os dados:', error));


        sessionStorage.removeItem('token');
        loginScreen.current.click();
    }

    const exibirMensagem = () => {

        Swal.fire({
            title: "Excluir perfil",
            showDenyButton: true,
            confirmButtonText: "Excluir",
            denyButtonText: `Cancelar`
          }).then((result) => {
            if (result.isConfirmed) {
                
              enviar();
            } else if (result.isDenied) {
              Swal.fire("Cancelado");
            }
          });
    }

    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div className="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100">
                        <CSSTransition
                            in={anima}
                            timeout={1000}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="lg:w-6/12 pt-16 lg:px-4">
                                <div className="h-56 lg:rounded-t-xl bg-purple-800"></div>
                                <div className="lg:rounded-b-xl bg-white px-8">
                                    <div className="h-0 flex items-center mb-16">
                                      <Link to="/editImgPsicologo">  <img loading="lazy" className="w-32 h-32 flex-0 rounded-full bg-purple-200" src={usuario} alt="usuario" /></Link>
                                    </div>
                                    <h2 className="pt-4 font-semibold font-title text-2xl">{psicologo?.nome}</h2>
                                    <div className="py-4 flex justify-between">
                                        <div className="grid grid-cols-2">
                                            <p className="font-medium">E-mail:</p>
                                            <h3 className="px-2 ml-4 break-words bg-gray-100">{psicologo?.email}</h3>
                                            <p className="font-medium">CPF:</p>
                                            <h3 className="px-2 ml-4 bg-gray-100">{psicologo?.cpf}</h3>
                                            <p className="font-medium">Data de nascimento:</p>
                                            <h3 className="px-2 ml-4 bg-gray-100">{psicologo?.dataNascimento}</h3>
                                            <p className="font-medium">Telefone:</p>
                                            <h3 className="px-2 ml-4 bg-gray-100">{psicologo?.telefone}</h3>
                                        </div>
                                        {/* <div className="text-right">
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 1</p></a>
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 2</p></a>
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 3</p></a>
                                            <a href="#a" className="hover:underline hover:text-purple-500"><p>Rede Social 4</p></a>
                                        </div> */}
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium">Apresentação</p>
                                        <p>
                                        {psicologo?.bio}
                                        </p>
                                    </div>
                                    <div className="py-12 flex justify-center flex-col items-center">
                                        <Link to="/editPsicologo"><button className="text-lg w-60 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400 text-white hover:bg-purple-950">Editar</button></Link>
                                        <button className=" text-lg w-60 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400 text-white hover:bg-red-950" onClick={exibirMensagem}>Excluir</button>

                                        <Link to="/" ref={loginScreen}></Link>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </article>
            </main>
            <Rodape estilo="lg:bg-purple-100" />
        </>
    )
}

export default PerfilPsicologo;

