import { Link } from "react-router-dom";
import '../styles/styles.css';
import { useState, useRef } from "react";
import { cpf } from 'cpf-cnpj-validator';
import { InputMask } from 'primereact/inputmask';
import validator from "validator";
import Swal from 'sweetalert2';

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
    const [readyToContinue, setReadyToContinue] = useState(false);
    const [areaAtuacao, setAreaAtuacao] = useState('');
    const [localizacao, setLocalizacao] = useState('');

    let ano = new Date().getFullYear();
    let anoNasicmento = dataNascimento.slice(-4);
    let diaNascimento = dataNascimento.slice(0, 2);
    let mesNascimento = dataNascimento.slice(3, 5);
    const idade = ano - anoNasicmento;

    const dtNascimento = dataNascimento.split('/').reverse().join('-');

    const showSwal = () => {
        Swal.fire({
            text: "Atenção, o CPF será utilizado para validar a situação do seu CRP e e-PSI",
            icon: "warning"
        })
    }


    const validarCamposPreenchidos = () => {
        if (!nome || !CPF || !telefone || !senha || !email || !dataNascimento) {
            setMsg("Preencha todos os campos");
            setReadyToContinue(false);
            return;
        }

        else if (senha && confirmarSenha && senha !== confirmarSenha) {
            setMsg("Campos senha e confirmar senha estão diferentes");
            setReadyToContinue(false);
            return;
        }

        else if (confirmarSenha !== senha) {
            setMsg("Campos senha e confirmar senha estão diferentes");
            setReadyToContinue(false);
            return;
        }

        else if (!validator.isStrongPassword(senha, { minUppercase: 1, minLength: 8, minLowercase: 1, minNumbers: 1, minSymbols: 0 })) {
            setMsg("Senha fraca");
            setReadyToContinue(false);
            return;
        }

        else {
            setMsg("");
            setReadyToContinue(true);
        }
    }

    const enviar = async (e) => {
        e.preventDefault();
        validarCamposPreenchidos();
        if (!readyToContinue) return;
        sessionStorage.removeItem('psicologo');

        let psicologo = JSON.stringify({
            nome: nome,
            CPF: CPF,
            telefone: telefone,
            senha: senha,
            dataNascimento: dtNascimento,
            email: email,
            areaAtuacao: areaAtuacao,
            localizacao: localizacao
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
        <main className="flex justify-center bg-gray-500">
            <article>
                <div className="md:my-16 rounded-lg overflow-hidden shadow-2xl bg-white">
                    <div className="h-32 md:h-24 mb-6 bg-purple-400"></div>
                    <div className="p-6">
                        <div className="flex items-center">
                            <Link to='/' className="" onClick={excluirStorage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                            </Link>
                            <h2 className="text-4xl grow text-center font-style">Cadastrar Psicólogo(a)</h2>
                        </div>
                        <form method="POST">
                            <div>
                                <div>
                                    <h2 className="text-purple-900 my-4">Nome completo</h2>
                                    <input className="w-full px-2 py-1 rounded-sm border border-purple-900" onChange={(e) => setNome(e.target.value)} value={nome} type="text" name="nome" id="nome" maxLength={40} required />
                                    
                                    <h2 className="text-purple-900 my-4">Especialidade</h2>
                                    <input className="w-full px-2 py-1 rounded-sm border border-purple-900" value={areaAtuacao} onChange={(e) => setAreaAtuacao(e.target.value)} onBlur={() => validarCamposPreenchidos()} required />

                                    <h2 className="text-purple-900 my-4">Telefone</h2>
                                    <InputMask className="w-full px-2 py-1 rounded-sm border border-purple-900" value={telefone} onChange={(e) => setTelefone(e.target.value)} mask="(99) 99999-9999" required />
                                    
                                    <h2 className="text-purple-900 my-4">E-mail</h2>
                                    <input className="w-full px-2 py-1 rounded-sm border border-purple-900" onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" onBlur={(e) => { validator.isEmail(email) === ! true ? setMsg("E-mail inválido") : setMsg("") }} required />
                                </div>
                                <div>
                                    <h2 className="text-purple-900 my-4">CPF</h2>
                                    <InputMask className="w-full px-2 py-1 rounded-sm border border-purple-900" value={cpf} onChange={(e) => setCPF(e.target.value)} mask="999.999.999-99" onBlur={(e) => { cpf.isValid(CPF) === ! true ? setMsg("CPF inválido") : setMsg("") }} onClick={showSwal} required />
                                    
                                    <h2 className="text-purple-900 my-4">Data de nascimento</h2>
                                    <InputMask className="w-full px-2 py-1 rounded-sm border border-purple-900" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} mask="99/99/9999" onBlur={(e) => { idade > 120 || idade < 18 || diaNascimento > 31 || diaNascimento < 0 || mesNascimento > 12 || mesNascimento < 0 ? setMsg("Idade ou data não compatível") : setMsg(""); setReadyToContinue(false); }} required />
                                    
                                    <h2 className="text-purple-900 my-4">Cidade onde mora</h2>
                                    <input className="w-full px-2 py-1 rounded-sm border border-purple-900" onChange={(e) => setLocalizacao(e.target.value)} value={localizacao} type="text" name="email" onBlur={() => validarCamposPreenchidos()} required />
                                    
                                    <h2 className="text-purple-900 my-4">Senha</h2>
                                    <input className="w-full px-2 py-1 rounded-sm border border-purple-900" onChange={(e) => setSenha(e.target.value)} value={senha} type="password" name="senha" onBlur={() => validarCamposPreenchidos()} required />
                                    <p className="text-sm">*A senha precisar ter no mínimo 8 caracteres, entre eles uma letra maiúscula, uma letra minúscula e um algorismo.</p>

                                    <h2 className="text-purple-900 my-4">Confirmar senha</h2>
                                    <input className="w-full px-2 py-1 rounded-sm border border-purple-900" type="password" onChange={(e) => setConfirmarSenha(e.target.value)} value={confirmarSenha} name="confirmarSenha" onKeyDown={validarCamposPreenchidos} onBlur={() => { confirmarSenha === senha ? setMsg(null) : setMsg("Campos senha e confirmar senha estão diferentes") }} required />
                                </div>
                            </div>
                            <div>
                                {
                                    msg &&
                                    <alert className="block p-8 mt-8 rounded-lg bg-red-300">{msg}</alert>
                                }
                            </div>
                            <div>
                                {/*<button className="py-2 text-white btn" type="submit">Próximo</button>*/}
                                {/*<button className="py-2 text-white btn" type="button" onClick={ReceberLocal}>Local</button>*/}
                                <button className="w-full py-2 mt-8 rounded-sm text-white bg-purple-700" type="submit" onClick={enviar}>Cadastrar</button>
                                <Link to="/termosPsicologo" ref={clickLink}></Link>
                                {/* <Link to="/cadastroImagem" id="cadastroImagem"></Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroPsicologo;