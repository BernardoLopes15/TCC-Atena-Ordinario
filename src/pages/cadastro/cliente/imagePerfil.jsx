import { Link } from "react-router-dom";

import '../cliente/styles.css'

const CadastroImagemCliente = () =>{
    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center cadastroImage">
                    <div className="md:p-12 bg-white content-cadastroImage">

                    <Link to='/cadastro' className="exiit">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>

                        <h2 className="text-center text-xl title">Escolha uma foto para o seu perfil</h2>
                        
                        <form method="POST" className="form">
                         <div className="flex justify-between content-formImage">

                         <label class="picture" for="picture__input" tabIndex="0">
                          <span class="picture__image">Clique aqui</span>
                         </label>

                         <input type="file" accept="image/*" name="picture__input" id="picture__input"/> 

                         </div>

                         <div className="flex justify-center mt-16">
                            <Link to="/login"><button className="py-2 text-white btn">Cadastrar</button></Link>
                        </div>

                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroImagemCliente;
