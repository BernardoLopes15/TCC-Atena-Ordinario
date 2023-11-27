import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Swal from 'sweetalert2'

import NavBar from "../../components/Navbar";
import axios from "axios";
import MainUrl from "../../connection config/url";
import Rodape from "../../components/Rodape";

const PerfilCliente = () =>{
    const [anima, setAnima] = useState(false);
    const [imagem, setImagem] = useState('');

    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    let loginScreen = useRef(null);
    let sair = useRef();

    const voltarPagina = () =>{
        sair.current?.click();
    }

    useEffect(()=>{
        let response = JSON.parse(sessionStorage.getItem('token')) || voltarPagina();
        if(!JSON.parse(sessionStorage.getItem('token'))) return;
        response?.nivelAcesso !== "paciente" && voltarPagina();
        if(response){
            setImagem(response.imagem);
            console.log(imagem);
        } 
    });

    useEffect(() => {
        setAnima(true);

        axios.post(MainUrl + 'perfilPaciente.php', JSON.stringify(JSON.parse(sessionStorage.getItem('token'))))
          .then((response) => {
            setNome(response.data.response.nome);
            setEmail(response.data.response.email);
            setCPF(response.data.response.cpf);
            setDataNascimento(response.data.response.dataNascimento.split('-').reverse().join('/'));
            setTelefone(response.data.response.telefone);

            console.log(response);
            //alert(JSON.stringify(response.data));
          })
          .catch((error) => console.error('Erro ao buscar os dados:', error));
    }, []);

    const enviar = async (e) => {

        let novoForm = {
            cpf: CPF,
        }


    
          axios.post(MainUrl + 'excluirPaciente.php', JSON.stringify(novoForm))
          .then((response) => {
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
                                <div className="h-56 lg:rounded-t-xl bg-purple-600"></div>
                                <div className="lg:rounded-b-xl bg-white px-8">
                                    <div className="h-0 flex items-center mb-16">
                                      <Link to="/editImgCliente"> <img loading="lazy" className="w-32 h-32 flex-0 rounded-full bg-purple-200" src={imagem} alt="usuario" /></Link> 
                                    </div>
                                    <h2 className=" pt-4 font-semibold font-title text-2xl">{nome}</h2>
                                    <div className="py-4 flex justify-between">
                                        <div className="grid grid-cols-2 ">
                                            <p className="font-medium">E-mail:</p>
                                            <input className="w-96" type="text" value={email} disabled/>
                                            <p className="font-medium">CPF:</p>
                                            <input className="w-96" type="text" value={CPF} disabled/>
                                            <p className="font-medium">Data de nascimento:</p>
                                            <input className="w-96" type="text" value={dataNascimento} disabled/>
                                            <p className="font-medium">Telefone:</p>
                                            <input className="w-96" type="text" value={telefone} disabled/>
                                        </div>
                                    </div>
                                    <div className="py-12 flex justify-center flex-col items-center">
                                        <Link to="/editCliente"><button className=" text-lg w-60 md:w-96 mt-8 px-4 py-2 rounded-lg cursor-pointer bg-purple-400 text-white hover:bg-purple-950">Editar</button></Link>
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

export default PerfilCliente;
