import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import MainUrl from "../../../connection config/url";
import Swal from 'sweetalert2'

const CadastroImagemCliente = () =>{

    const [imagem, setImagem] = useState('');
    const [msg, setMsg] = useState('');
    let pacienteS = JSON.parse(sessionStorage.getItem('paciente')) || {};

    const enviar = async e => {
        e.preventDefault();

        pacienteS.imagem = imagem;
        sessionStorage.setItem('paciente', JSON.stringify(pacienteS));
        document.getElementById("cadastrarImagem").click();

          if(
          
          axios.post(MainUrl + 'cadastrarPaciente.php', JSON.stringify(JSON.parse(sessionStorage.getItem('paciente'))))
          .then((response) => {
            console.log(response);
            //alert(JSON.stringify(response.data));
            Swal.fire({
              text: response.data,
              icon: "success"
          })
          })
          .catch((error) => console.error('Erro ao buscar os dados:', error)) != true)
          {
            Swal.fire({
              text: "Algo deu errado",
              icon: "error"
            })
          };

        sessionStorage.removeItem('paciente');
    }

    const excluirStorage = async e => {
        sessionStorage.removeItem('paciente');
    }

    const validarImagem = () =>{
      if (!imagem){
        setMsg("Insira uma foto");
      }
      else {
        setMsg("");
      //   Swal.fire({
      //     text: "Cadastrada com sucesso!",
      //     icon:"success"
      // })
      }
    }

    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center cadastroImage">
                    <div className="md:p-12 bg-white content-cadastroImage">

                    <Link to='/termosCliente' className="exiit" onClick={excluirStorage}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>

                      <div className="center">
                        <h2 className="title">Escolha uma foto para o seu perfil</h2>
                      </div>

                      <div className="Message mt-8 ">
                            
                            <alert className="bg-red-600 text-white text-xl rounded">
                               <alert className="" value={msg} >{msg}</alert>
                            </alert>

                         </div>

                        <form method="POST" className="form" onSubmit={enviar}>
                         <div className="flex justify-between content-formImage">

                         <label class="picture" for="picture__input" tabIndex="0">
                           <div className="center">

                             <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                             </svg>

                           </div>

                          <span class="picture__image">Clique aqui</span>

                         </label>

                         <input type="file" accept="image/*" onChange={(e)=>setImagem(e.target.value)} value={imagem} name="picture__input" id="picture__input" required/> 

                         </div>

                         <div className="flex justify-center mt-16">
                            <button className="py-2 text-white btn" onClick={validarImagem}>Cadastrar</button>
                            <Link to="/login" id="cadastrarImagem"></Link>
                        </div>

                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroImagemCliente;