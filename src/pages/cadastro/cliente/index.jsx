import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { cpf } from 'cpf-cnpj-validator'; 
import { InputMask } from 'primereact/inputmask';
        


const CadastroCliente = () =>{


    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const[ confirmarSenha, setConfirmarSenha] = useState('');


    const validarCamposPreenchidos = () =>{

        if(!nome || CPF == "" || telefone == "" || senha == "" || email == "" || dataNascimento ==""){
            setMsg("Preencha todos os campos")
            return false
        }

        else if(cpf.isValid(CPF) ==! true){
            setMsg("CPF inválido")
            return false
        }

        else if(senha ==! confirmarSenha){
            setMsg("Campos senha e confirmar senha estão diferentes")
        }

        else{
            setMsg("")
        }


    }

    const enviar = async e => {
        e.preventDefault();

        localStorage.removeItem('paciente');

        let paciente = JSON.stringify({
            nome: nome,
            CPF: CPF,
            telefone: telefone,
            senha: senha,
            dataNascimento: dataNascimento,
            email: email
        });

        try{
            localStorage.setItem('paciente', paciente);
            document.getElementById("cadastroImagem").click();
        } catch
        {
            console.log("já foi criado um local storage");
        }
    }

    const ReceberLocal = async (e) => {
        
    }

    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center cadastro">
                    <div className="md:p-12 bg-white content-cadastro">

                    <Link to='/login' className="exiit">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>

                        <h2 className="text-center text-5xl title">Cadastrar Usuária</h2>

                         <div className="Message mt-8 ">
                            
                            <alert className="bg-red-600 text-white text-xl rounded">
                               <alert className="" value={msg} >{msg}</alert>
                            </alert>

                         </div>
                         
                        <form method="POST" className="form" onSubmit={enviar}>
                            
                        <div className="flex justify-between content-form">

                            <div className="w-1/2 flex flex-col justify-end content1">
                                <h2 className="mt-8 mb-2">Nome completo</h2>
                                <input className="px-2 py-1" onChange={(e)=>setNome(e.target.value)} value={nome} type="text" name="nome" id="nome" />
                                <h2 className="mt-8 mb-2">CPF</h2>
                                <InputMask className="w-full px-2 py-1 " value={cpf} onChange={(e) => setCPF(e.target.value)} mask="999.999.999-99" />
                                <h2 className="mt-8 mb-2">Telefone</h2>
                                <InputMask className="w-full px-2 py-1 " value={telefone} onChange={(e) => setTelefone(e.target.value)} mask="(99) 99999-9999" />
                                <h2 className="mt-8 mb-2">Senha</h2>
                                <input className="w-full px-2 py-1 " onChange={(e)=>setSenha(e.target.value)} value={senha} type="password" name="senha" />
                    
                                
                           
                            </div>

                            <div className="w-1/2 ml-8 content2">
                                <h2 className="mt-8 mb-2">Data de nascimento</h2>
                                <InputMask className="w-full px-2 py-1 " value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} mask="99/99/9999" />
                                <h2 className="mt-8 mb-2">E-mail</h2>
                                <input className="w-full px-2 py-1 " onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" />
                                <h2 className="mt-8 mb-2">Confirmar senha</h2>
                                <input className="w-full px-2 py-1 " type="password" onChange={(e)=>setConfirmarSenha(e.target.value)} value={confirmarSenha} name="confirmarSenha"/>
                            </div>

                         </div>

                         <div className="flex justify-center mt-16">
                            {/*<button className="py-2 text-white btn" type="submit">Próximo</button>*/}
                            {/*<button className="py-2 text-white btn" type="button" onClick={ReceberLocal}>Local</button>*/}
                            <button className="py-2 text-white btn" type="submit" onClick={validarCamposPreenchidos}>
                                Cadastrar</button>
                            {/* <Link to="/cadastroImagem" id="cadastroImagem"></Link> */}
                        </div>

                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroCliente;