import { Link } from "react-router-dom";
import axios from "axios";
import MainUrl from "../../connection config/url";

import '../editPerfilPsicologo/styles.css';
import { useEffect, useRef, useState } from "react";

const EditCadastroBioPsicologo = () =>{
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    let profilepsicolgoo = useRef(null);

    useEffect(()=>{
        axios.post(MainUrl + 'perfilPsicologo.php', JSON.stringify(JSON.parse(sessionStorage.getItem('token'))))
          .then((response) => {
            setBio(response.data.response.bio)
            if(response.data.response.bio != "") setBio(response.data.response.bio);
        })
        .catch((error) => console.error('Erro ao buscar os dados:', error));
        setEmail(JSON.parse(sessionStorage.getItem('token')).email);
        
    },[])

    const enviar = async () => {
        let BioJson = {
            bio: bio,
            email: email
        }
        await axios.post(MainUrl + 'updateBio.php', JSON.stringify(BioJson))
        .then((response) => {
            alert(JSON.stringify(response.data));
        })
        .catch((error) => console.error('Erro ao buscar os dados:', error));

        sessionStorage.removeItem('paciente');
        profilepsicolgoo.current.click();
    }

    const pular = async () => {
        profilepsicolgoo.current.click();
    }

    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center editCadastroBio">
                    <div className="md:p-12 bg-white content-editCadastroBio">

                    <Link to='/editPsicologo' className="exiit">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>

                        <h2 className="text-center text-xl title">Reescreva sua curta apresentação</h2>
                        
                        <div className="form">
                         <div className="flex content-formBio">
                         
                         <textarea className="py-2 px-2" rows="4" cols="50" onChange={(e)=> {setBio(e.target.value)}} placeholder={bio}>{bio}</textarea>

                         </div>

                         <div className="flex justify-center mt-16 btns">
                            <button className="py-2 text-white btn" onClick={enviar}>Editar</button>
                            <button className="py-2 text-white btn ml-5" onClick={pular}>Pular</button>
                            <Link to="/perfilPsicologo" ref={profilepsicolgoo}></Link>
                        </div>

                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default EditCadastroBioPsicologo;
