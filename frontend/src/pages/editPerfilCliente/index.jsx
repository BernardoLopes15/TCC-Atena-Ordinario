import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MainUrl from "../../connection config/url";
import { InputMask } from "primereact/inputmask";

import '../editPerfilCliente/styles.css'


const EditCadastroCliente = () =>{
    let perfilcliente = useRef(null);
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');

    const [oldNome, setOldNome] = useState('');
    const [oldTelefone, setOldTelefone] = useState('');
    const [oldSenha, setOldSenha] = useState('');
    const [oldDataNascimento, setOldDataNascimento] = useState('');
    const [oldEmail, setOldEmail] = useState('');
    let profilepaciente = useRef(null);

    useEffect(() => {

        axios.post(MainUrl + 'perfilPaciente.php', JSON.stringify(JSON.parse(sessionStorage.getItem('token'))))
          .then((response) => {
            setNome(response.data.response.nome);
            setOldNome(response.data.response.nome);

            setEmail(response.data.response.email);
            setOldEmail(response.data.response.email);

            setCPF(response.data.response.cpf);

            setDataNascimento(response.data.response.dataNascimento.split('-').reverse().join('/'));
            setOldDataNascimento(response.data.response.dataNascimento.split('-').reverse().join('/'));

            setTelefone(response.data.response.telefone);
            setOldTelefone(response.data.response.telefone);

            setSenha(response.data.response.senha);
            setOldSenha(response.data.response.senha);

            //alert(JSON.stringify(response.data));
          })
          .catch((error) => console.error('Erro ao buscar os dados:', error));
    }, []);

    const enviar = async (e) => {

        if(nome != "" && nome != null) setNome(oldNome);
	    if(email != "" && email != null) setEmail(oldEmail);
	    if(telefone != "" && telefone != null && telefone !="(  )      -    " && telefone !="(__) _____-____") setTelefone(oldTelefone);
	    if(dataNascimento != "" && dataNascimento != null && dataNascimento != "  /  /    " && dataNascimento != "__/__/____") setDataNascimento(oldDataNascimento);
	    if(senha != "" && senha != null) setSenha(oldSenha);

        let novoForm = {
            nome: nome,
            cpf: CPF,
            email: email,
            dataNascimento: dataNascimento,
            telefone: telefone,
            senha: senha
        }
          axios.post(MainUrl + 'updatePaciente.php', JSON.stringify(novoForm))
          .then((response) => {
            //alert(JSON.stringify(response.data));
            perfilcliente.current.click();
          })
          .catch((error) => console.error('Erro ao buscar os dados:', error));

        sessionStorage.removeItem('paciente');
        let tokenS = JSON.parse(sessionStorage.getItem('token')) || {};
        tokenS.email = email;
        tokenS.nome = nome;
        sessionStorage.setItem('token', JSON.stringify(tokenS));

        profilepaciente.current.click();
    }

    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center editCadastro">
                    <div className="md:p-12 bg-white content-editCadastro">

                    <Link to='/perfilCliente' className="exiit">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>

                        <h2 className="text-center text-xl title">Editar Dados</h2>
                        
                        <div>
                            
                        <div className="flex justify-between content-form">

                            <div className="w-1/2 flex flex-col justify-end content1">
                                <h2 className="mt-8 mb-2">Nome completo</h2>
                                <input className="px-2 py-1" type="text" name="nome" onChange={(e)=>setNome(e.target.value)} id="nome" placeholder={nome}/>
                                <h2 className="mt-8 mb-2">CPF</h2>
                                <InputMask className="w-full px-2 py-1 " disabled placeholder={CPF} mask="999.999.999-99" />
                                <h2 className="mt-8 mb-2">Telefone</h2>
                                <InputMask className="w-full px-2 py-1 " onChange={(e)=>setTelefone(e.target.value)} placeholder={telefone} mask="(99) 99999-9999" />
                                <h2 className="mt-8 mb-2">Senha</h2>
                                <input className="w-full px-2 py-1 " onChange={(e)=>setSenha(e.target.value)} type="password" name="senha" />
                            </div>

                            <div className="w-1/2 ml-8 content2">
                                <h2 className="mt-8 mb-2">Data de nascimento</h2>
                                <InputMask className="w-full px-2 py-1 " onChange={(e)=>setDataNascimento(e.target.value.split('/').reverse().join('-'))} placeholder={dataNascimento} mask="99/99/9999"/>
                                <h2 className="mt-8 mb-2">E-mail</h2>
                                <input className="w-full px-2 py-1 " onChange={(e)=> setEmail(e.target.value)} type="email" name="email" placeholder={email}/>
                                <h2 className="mt-8 mb-2">Confirmar senha</h2>
                                <input className="w-full px-2 py-1 " type="password" name="confirmarSenha"/>
                            </div>

                         </div>

                         <div className="flex justify-center mt-16">
                            <button className="p-2 px-8 border-box text-white btn" onClick={enviar}>Editar</button>
                            <Link to="/perfilCliente" ref={profilepaciente}></Link>
                        </div>

                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default EditCadastroCliente;

