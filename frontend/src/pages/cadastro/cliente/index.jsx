import { Link } from "react-router-dom";
import '../styles/styles.css';
import { useState, useRef } from "react";
import { cpf } from 'cpf-cnpj-validator';
import { InputMask } from 'primereact/inputmask';
import validator from "validator";
import Swal from 'sweetalert2'

const CadastroPsicologo = () => {

    const clickLink = useRef(null);
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [readyToContinue, setReadyToContinue] = useState(true);

    let ano = new Date().getFullYear();
    let anoNasicmento = dataNascimento.slice(-4);
    let diaNascimento = dataNascimento.slice(0, 2);
    let mesNascimento = dataNascimento.slice(3, 5);
    const idade = ano - anoNasicmento;

    const dtNascimento = dataNascimento.split('/').reverse().join('-');

    const showSwal = () => {
        Swal.fire({
            text: "Atenção, o CPF será utilizado para validar a situação do seu CRP e-PSI",
            icon:"warning"
        })
    }


    const validarCamposPreenchidos = () => {

        if (senha ==! confirmarSenha) {
            setMsg("Campos senha e confirmar senha estão diferentes");
            setReadyToContinue(false);
            return;
        }

        else if (cpf.isValid(CPF) === ! true) setMsg("CPF inválido")

        else if (validator.isStrongPassword(senha,{ minUppercase: 1, minLength: 8, minLowercase:1, minNumbers: 1, minSymbols: 0}) === ! true ) setMsg("Senha fraca")

        else if (idade > 120 || idade < 18 || diaNascimento > 31 || diaNascimento < 0 || mesNascimento > 12 || mesNascimento < 0) setMsg("Idade ou data não compatível")

        else if (validator.isEmail(email) === ! true) setMsg("E-mail inválido")

        else {
            setMsg(null);
            setReadyToContinue(true);
        }



    }

    const enviar = async () => {
        sessionStorage.removeItem('psicologo');

        if (!readyToContinue) return;

        let psicologo = JSON.stringify({
            nome: nome,
            CPF: CPF,
            telefone: telefone,
            senha: senha,
            dataNascimento: dtNascimento,
            email: email
        });

        try {
            sessionStorage.setItem('psicologo', psicologo);
        } catch {
            console.log("já foi criado um local storage");
        }

        clickLink.current.click();
    }

    const excluirStorage = () => {
        sessionStorage.removeItem('psicologo');
    }

    return (
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center cadastro">
                    <div className="md:p-12 bg-white rounded-3xl w-2/3 content-cadastro">

                        <div className="some transition-blur duration-300">
                            <Link to='/login' className="exiit" onClick={excluirStorage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                            </Link>

                            <h2 className="text-center text-5xl title">Cadastrar Psicólogo(a)</h2>

                            <div className="Message mt-8 ">

                                <alert className="bg-red-600 text-white text-xl rounded">
                                    <alert className="" value={msg} >{msg}</alert>
                                </alert>

                            </div>

                            <form method="POST" className="form">

                                <div className="flex justify-between content-form">

                                    <div className="w-1/2 flex flex-col justify-end content1">
                                        <h2 className="mt-8 mb-2">Nome completo</h2>
                                        <input className="px-2 py-1" onChange={(e) => setNome(e.target.value)} value={nome} type="text" name="nome" id="nome" maxLength={40} required />
                                        <h2 className="mt-8 mb-2">CPF</h2>
                                        <InputMask className="w-full px-2 py-1 " value={cpf} onChange={(e) => setCPF(e.target.value)} mask="999.999.999-99" onBlur={(e) => { cpf.isValid(CPF) === ! true ? setMsg("CPF inválido") : setMsg("") }} onClick={showSwal} required />
                                        <h2 className="mt-8 mb-2">Telefone</h2>
                                        <InputMask className="w-full px-2 py-1 " value={telefone} onChange={(e) => setTelefone(e.target.value)} mask="(99) 99999-9999" required />
                                        <h2 className="mt-8 mb-2">Senha</h2>
                                        <input className="w-full px-2 py-1 " onChange={(e) => setSenha(e.target.value)} value={senha} type="password" name="senha" onBlur={(e) => {  validator.isStrongPassword(senha,{ minUppercase: 1, minLength: 8, minLowercase:1, minNumbers: 1, minSymbols: 0}) === ! true ? setMsg("Senha fraca") : setMsg("") }  } required />
                                        <label className="text-sm">*A senha precisar ter no mínimo 8 caracteres, entre eles uma letra maiúscula, uma letra minúscula e um algorismo.</label>

                                    </div>

                                    <div className="w-1/2 ml-8 content2">
                                        <h2 className="mt-8 mb-2">Data de nascimento</h2>
                                        <InputMask className="w-full px-2 py-1 " value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} mask="99/99/9999" onBlur={(e) => { idade > 120 || idade < 18 || diaNascimento > 31 || diaNascimento < 0 || mesNascimento > 12 || mesNascimento < 0 ? setMsg("Idade ou data não compatível") : setMsg(""); setReadyToContinue(false); }} required />
                                        <h2 className="mt-8 mb-2">E-mail</h2>
                                        <input className="w-full px-2 py-1 " onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" onBlur={(e) => { validator.isEmail(email) === ! true ? setMsg("E-mail inválido") : setMsg("") }} required />
                                        <h2 className="mt-8 mb-2">Confirmar senha</h2>
                                        <input className="w-full px-2 py-1 " type="password" onChange={(e) => setConfirmarSenha(e.target.value)} value={confirmarSenha} name="confirmarSenha" onKeyDown={validarCamposPreenchidos} required />
                                    </div>

                                </div>

                                <div className="flex justify-center h-28 my-20">
                                    <div className="w-auto ">

                                        {/*<button className="py-2 text-white btn" type="submit">Próximo</button>*/}
                                        {/*<button className="py-2 text-white btn" type="button" onClick={ReceberLocal}>Local</button>*/}
                                        <button className="py-2 text-white btn" type="submit" onClick={validarCamposPreenchidos}>Cadastrar</button>
                                        <Link to="/termosPsicologo" ref={clickLink}></Link>
                                        {/* <Link to="/cadastroImagem" id="cadastroImagem"></Link> */}
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroPsicologo;