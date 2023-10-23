import { Link } from "react-router-dom";
import MainUrl from "../../../connection config/url";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

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
    }
    
    useEffect(()=>{
        setPsicologo((prevPsicologo) => {
            return { ...prevPsicologo, bio: bio };
        });
    },[bio]);
    
    useEffect(()=>{
        const enviarBio = async () =>{
            try{
                let a = await axios.post(MainUrl + "cadastrarPsicologo.php", JSON.stringify(psicologo));
            
                console.log(a);
                clickLink.current.click();
            } catch{
                console.log("error");
            }
        }

        enviarBio();
    }, [psicologo?.telefone]);

    const excluirStorage = () =>  {
        sessionStorage.removeItem('psicologo');
    }

    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center cadastroBio">
                    <div className="md:p-12 bg-white content-cadastroBio">
                        <Link to='/imagemPsicologo' className="exiit" onClick={excluirStorage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                            </svg>
                        </Link>
                        <div className="center">
                            <h2 className=" w-9/12 text-center text-4xl title">Redija uma curta apresentação para que a sua psicologo possa conhecer você </h2>
                        </div>
                        <div className="Message mt-8 ">
                            <div className="bg-red-600 text-white text-xl rounded">
                               <div className="" value={msg} >{msg}</div>
                            </div>
                         </div>
                        <form method="POST" className="form">
                            <div className="flex content-formBio">                            
                                <textarea className="px-2 text-xl pt-1" id="bio" name="bio" rows="4" cols="40" onChange={(e)=>setBio(e.target.value)} value={bio} maxLength="400"/>
                            </div>
                            <div className="flex justify-center mt-16">
                                <Link to=""><button className="py-2 text-white btn" onClick={validarBio}>Cadastrar</button></Link>
                                <Link to="/login" ref={clickLink}></Link>
                                <Link to="/cadastroPsicologo" ref={voltarTela}></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroBioPsicologo;
