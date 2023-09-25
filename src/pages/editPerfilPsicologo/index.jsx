import { Link } from "react-router-dom";

const userName = "Fernanda Sandra Ribeiro";
const userEmail = "fernanda_Sandra@artelazer.com";
const userCPF = "762476499-75";
const userPhone = "(13) 8998-6975";


const EditCadastroPsicologo = () =>{
    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center editCadastro">
                    <div className="md:p-12 bg-white content-editCadastro">

                    <Link to='/perfilPsicologo' className="exiit">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>

                        <h2 className="text-center text-xl title">Editar Dados</h2>
                        
                        <form method="POST" className="form">
                            
                        <div className="flex justify-between content-form">

                            <div className="w-1/2 flex flex-col justify-end content1">
                                <h2 className="mt-8 mb-2">Nome completo</h2>
                                <input className="px-2 py-1" type="text" name="nome" id="nome" placeholder={userName} />
                                <h2 className="mt-8 mb-2">CPF</h2>
                                <input className="w-full px-2 py-1 " type="number" name="cpf" disabled placeholder={userCPF} />
                                <h2 className="mt-8 mb-2">Telefone</h2>
                                <input className="w-full px-2 py-1" type="number" name="telefone" placeholder={userPhone}/>
                                <h2 className="mt-8 mb-2">Senha</h2>
                                <input className="w-full px-2 py-1 " type="password" name="senha" />
                            </div>

                            <div className="w-1/2 ml-8 content2">
                                <h2 className="mt-8 mb-2">Data de nascimento</h2>
                                <input className="w-full px-2 py-1 " type="date" name="dtNascimento" />
                                <h2 className="mt-8 mb-2">E-mail</h2>
                                <input className="w-full px-2 py-1 " type="email" name="email" placeholder={userEmail} />
                                <h2 className="mt-8 mb-2">Confirmar senha</h2>
                                <input className="w-full px-2 py-1 " type="password" name="confirmarSenha"/>
                            </div>

                         </div>

                         <div className="flex justify-center mt-16">
                            <Link to="/editBio"><button className="py-2 text-white btn">Editar</button></Link>
                        </div>

                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default EditCadastroPsicologo;
