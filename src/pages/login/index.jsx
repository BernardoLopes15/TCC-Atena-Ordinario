
import { useState } from "react";
import { Link } from "react-router-dom";
import imgcliente from "../../assets/client_cadastro.png";
import imgpsicologo from "../../assets/psicologo_cadastro.png";
import logoAtena from "../../assets/imgs/logo_purple.png";
import '../login/styles.css'

const Login = () =>{
    const [menucadastro, setMenuCadastro] = useState(false);

    const selectCadastro = () =>{
        setMenuCadastro(menucadastro ? false : true);
    }

    return(
        <main>
            <article>
                <div class="min-h-screen flex items-center justify-center login">
                    <div class={`flex items-center justify-center transition-blur duration-300 ${menucadastro && "blur-sm"} rounded-xl bg-purple-500 content-login`}>
                        <div class="w-96 p-8 hidden md:block text">
                            <h2 class="text-right">É o nosso dever tornar este mundo melhor para as mulheres.</h2>
                        </div>
                        <div class="w-96 rounded-xl bg-white loge">
                            <h2 class="text-xl text-center mt-8 title" >Seja bem vindo(a)</h2>
                            <div class="flex justify-center">
                                <img class="w-72 h-72" src={logoAtena} alt="atena" className="logo"/>
                            </div>
                            <div class="flex justify-center inputs">
                                <div class="w-64 content-inputs">
                                    <p>E-mail</p>
                                    <input class="w-full px-2 py-1 border border-black my-2" type="email" placeholder="Digite aqui" />
                                    <p>Senha</p>
                                    <input class="w-full px-2 py-1 border border-black mt-2" type="password" placeholder="Digite aqui" />
                                    <Link to="/home">
                                        <button class="w-full px-2 py-1 mt-4 btn">Entrar</button>
                                    </Link>
                                    <h2 class="text-lg my-8 account">Não tem uma Conta ? <button class="text-purple-500 font-bold hover:underline underline-offset-2" onClick={selectCadastro}>Crie uma</button></h2>
                                    <Link to="/home">
                                        <button class="w-full px-2 py-1 mb-8 border border-black bg-gray-200 google">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                         <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/></svg>
                                        Entrar com o Google
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        menucadastro && <div class="fixed inset-0 flex items-center justify-center square" onClick={()=>setMenuCadastro(false)}>
                            <div class="p-4 rounded-lg md:border border-black md:bg-white type-account">
                                <h2 class="text-xl font-bold text-purple-500">Cadastro</h2>
                                <h2 class="text-xl">Aperte em sua respectiva função</h2>
                                <div class="w-96 px-4 flex justify-between mt-8">
                                    <Link to="/cadastro" class="cursor-pointer hover:text-purple-500 account-usuario">
                                        <img class="w-32 h-32 rounded-full border border-gray-200" src={imgcliente} alt="client" />
                                        <h2 class="text-lg">Cliente</h2>
                                    </Link>
                                    <Link to="/cadastroPsicologo" class="cursor-pointer hover:text-purple-500 account-psicologo">
                                        <img class="w-32 h-32 rounded-full border border-gray-200" src={imgpsicologo} alt="client" />
                                        <h2 class="text-lg">Psicologo</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>   
                    }
                </div>
            </article>
        </main>
    )
}

export default Login;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import imgcliente from "../../assets/client_cadastro.png";
// import imgpsicologo from "../../assets/psicologo_cadastro.png";
// import logoAtena from "../../assets/imgs/logo_purple.png";
// import '../login/styles.css'

// const Login = () =>{
//         const [menucadastro, setMenuCadastro] = useState(false);
    
//         const selectCadastro = () =>{
//             setMenuCadastro(menucadastro ? false : true);
//         }
    
//         return(
//         <body>
//             <main>
//                 <article>
//                     <div className="min-h-screen flex items-center  justify-center login">
//                         <div className={`flex items-center justify-center transition-blur duration-300 ${menucadastro && "blur-sm"}  content-login`}>
    
//                             <div className="w-96 p-8 hidden md:block text">
//                                 <h2 className="text-right ">É o nosso dever tornar este mundo melhor para as mulheres.</h2>
//                             </div>  
//                             <div className="loge ">
//                                 <h2 className="text-xl text-center title">Seja Bem Vindo(a)</h2>
//                                 <div className="flex justify-center">
//                                     <img src={logoAtena} alt="atena" className="logo" />
//                                 </div>
//                                     <div className="content-inputs ">
//                                         <p>Email</p>
//                                         <input className=" px-2 py-1 border border-black my-2" type="email" placeholder="Digite aqui"  />
//                                         <p>Senha</p>
//                                         <input className=" px-2 py-1 border border-black mt-2" type="password" placeholder="Digite aqui" />
//                                         <br/>
//                                         <Link to="/home">
//                                             <button className="px-2 py-1 btn">Entrar</button>
//                                         </Link>
//                                         <h2 className="text-lg my-8 account">Não tem uma conta ? <button className="font-bold hover:underline underline-offset-2" onClick={selectCadastro}>Crie uma</button></h2>
//                                         <Link to="/home">
//                                             <button className=" mb-8 border border-black bg-gray-200 google">
//                                              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
//                                              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/></svg>
//                                              Entrar com o Google
//                                              </button>
//                                         </Link>
//                                     </div>
//                             </div>
//                         </div>
//                         {
//                             menucadastro && <div className="fixed inset-0 flex items-center justify-center square" onClick={()=>setMenuCadastro(false)}>
//                                 <div className="p-4 md:bg-white type_account">
//                                     <h2 className="text-xl font-bold title">Qual é o seu perfil?</h2>
//                                     <div className="w-96 px-4 flex justify-between mt-8 options">
//                                         <Link to="/cadastro" className="account_usuario">
//                                             <img className="w-32 h-32 rounded-full border border-gray-200" src={imgcliente} alt="client" />
//                                             <h2 className="text-lg">Usuária</h2>
//                                         </Link>
//                                         <Link to="/cadastroPsicologo" className="account_psicologo">
//                                             <img className="w-32 h-32 rounded-full border border-gray-200" src={imgpsicologo} alt="client" />
//                                             <h2 className="text-lg">Psicólogo(a)</h2>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>   
//                         }
//                     </div>
//                 </article>
//             </main>
//           </body>
//         )
//     }

// export default Login;
