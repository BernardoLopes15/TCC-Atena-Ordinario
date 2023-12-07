import { Link } from "react-router-dom";
import MainUrl from "../../../connection config/url";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";

const CadastroBioPsicologo = () =>{

    const [bio, setBio] = useState('');
    const [msg, setMsg] = useState('');
    const [psicologo, setPsicologo] = useState();

    const clickLink = useRef(null);
    const voltarTela = useRef(null);

    useEffect(() =>{
        let storagePsicologo = JSON.parse(sessionStorage.getItem('psicologo'));

        if(storagePsicologo){
            setPsicologo(storagePsicologo);
        } else{
            voltarTela.current.click();
        }
    },[]);
    
    const converterBr = (dataBr) =>{
        var partes = dataBr.split('/');

        if(partes[0] > partes[2]){
            return;
        }

        return partes[2] + '-' + partes[1] + '-' + partes[0];
    }
    
    const validarBio = (e) =>{
        e.preventDefault();

        if(!bio){
            setMsg("Insira a sua apresentação");
            return;
        };

        setPsicologo((prevPsicologo) => {
            return { ...prevPsicologo, dataNascimento: converterBr(psicologo.dataNascimento) };
        });

        setPsicologo((prevPsicologo) => {
            return { ...prevPsicologo, CPF: prevPsicologo.CPF.replace(/[\(\).\s-]/g, '') };
        });

        setPsicologo((prevPsicologo) => {
            return { ...prevPsicologo, telefone: prevPsicologo.telefone.replace(/[\(\)\s-]/g, '') };
        });

        let psicologoImage = JSON.parse(sessionStorage.getItem('psicologo')) || {};
        setPsicologo((prevPsicologo) => {
            return { ...prevPsicologo, imagePath:  psicologoImage.imagePath};
        });

        setPsicologo((prevPsicologo) => {
            return { ...prevPsicologo, bio:  bio};
        });

        enviarBio();
        excluirStorage();
    }
    
    useEffect(()=>{
        setPsicologo((prevPsicologo) => {
            return { ...prevPsicologo, bio: bio };
        });
    },[bio]);

    const enviarBio = async () =>{
        try{
            await axios.post(MainUrl + "cadastrarPsicologo.php",JSON.stringify(JSON.parse(sessionStorage.getItem('psicologo'))))
            .then((response) => {
                console.log("cadastro feito");
                console.log(response);
                console.log(psicologo);
            })
            .catch((e) => console.log(e));
            clickLink.current.click();
            Swal.fire({
                title: 'Validar E-mail',
                text: 'Dados salvos, confira seu e-mail para continuar o cadastro!',
                icon: "success"
            });
            
        } catch{
            console.log("error");
        }
    }

    const excluirStorage = () =>  {
        sessionStorage.removeItem('psicologo');
    }

    return(
        <main>
            <article>
                <div className="min-h-screen flex justify-center bg-white md:bg-purple-500">
                    <div className="w-full p-6 py-12 flex flex-col shadow-2xl md:w-1/2 bg-white">
                        <div className="flex">
                            <Link to='/imagemPsicologo' onClick={excluirStorage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>
                            </Link>
                            <h2 className="ml-4 text-center text-3xl grow font-style">Redija uma curta apresentação para que a sua psicologo possa conhecer você </h2>
                        </div>
                        <div>
                            {
                                msg &&
                                <alert className="block p-8 mt-8 rounded-lg bg-red-300">{msg}</alert>
                            }
                        </div>
                        <form method="POST" className="grow">
                            <textarea className="w-full h-5/6 my-8 px-2 rounded-md border-2 border-purple-400 text-xl pt-1" id="bio" name="bio" rows="4" cols="40" onChange={(e)=>setBio(e.target.value)} value={bio} maxLength="400"/>
                            <div>
                                <button className="w-full py-2 text-white bg-purple-700" onClick={validarBio}>Cadastrar</button>
                                <Link to="/cadastroPsicologo" ref={voltarTela}></Link>
                                <Link to="/" ref={clickLink}></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroBioPsicologo;