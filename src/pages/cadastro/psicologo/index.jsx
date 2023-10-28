import { Link } from "react-router-dom";
import '../styles/styles.css';
import { useState, useRef } from "react";
import { cpf } from 'cpf-cnpj-validator'; 
import { InputMask } from 'primereact/inputmask';
import validator from "validator";

const CadastroPsicologo = () =>{

    const clickLink = useRef(null);
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const[ confirmarSenha, setConfirmarSenha] = useState('');
    const[termosUso, setTermosUso] = useState(false);
    const[informationTermos, setInformationTermos] = useState(false);

    let ano = new Date().getFullYear();
    let anoNasicmento = dataNascimento.slice(-4);
    let diaNascimento = dataNascimento.slice(0,2);
    let mesNascimento = dataNascimento.slice(3,5);
    const idade = ano - anoNasicmento;

    const exibirTermosUso = () =>{
        setInformationTermos(informationTermos ? false : true)

    }

    const validarCamposPreenchidos = (e) =>{
        e.preventDefault();

        if(!nome || !CPF || !telefone || !senha || !email || !dataNascimento ){
            setMsg("Preencha todos os campos");
            return;
        }

        else if(cpf.isValid(CPF) ==! true){
            setMsg("CPF inválido");
            return;
        }

        else if(senha ==! confirmarSenha){
            setMsg("Campos senha e confirmar senha estão diferentes");
            return;
        }

        else if(termosUso == false){
            setMsg("Leia os termos de uso e confirme");
            return;
        }

        else if(idade > 120 || idade < 18){
            setMsg("Idade não compatível");
            return;
        }

        else if(diaNascimento > 31 || diaNascimento < 0){
            setMsg("Data incorreta");
            return;
        }

        else if(mesNascimento > 12 || mesNascimento < 0){
            setMsg("Data incorreta");
            return;
        }

        else if(validator.isEmail(email) == false) {
            setMsg("Email incorreto");
            return;
        }

        else{
            setMsg("");
            enviar();
        }
    }

    const enviar = async () => {
        sessionStorage.removeItem('psicologo');

        let psicologo = JSON.stringify({
            nome: nome,
            CPF: CPF,
            telefone: telefone,
            senha: senha,
            dataNascimento: dataNascimento,
            email: email
        });

        try{
            sessionStorage.setItem('psicologo', psicologo);
        } catch
        {
            console.log("já foi criado um local storage");
        }
        
        clickLink.current.click();
    }

    const excluirStorage = () =>  {
        sessionStorage.removeItem('psicologo');
    }

    return(
        <main>
             <article>
                <div className="min-h-screen flex items-center justify-center cadastro">
                    <div className="md:p-12 bg-white content-cadastro">

                    <div className={`some transition-blur duration-300 ${informationTermos && "blur-sm"}`}>
                    <Link to='/login' className="exiit" onClick={excluirStorage}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
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

                            <div className="flex justify-center h-28 mt-8">
                             <div className="w-auto ">

                            <p className="mb-2">
                                 <input className="mr-1" type="checkbox" value={termosUso} onChange={(e)=>setTermosUso(e.target.value)}/>
                                  Li e estou de acordo com os <label className="text-blue-950 font-bold cursor-pointer" onClick={exibirTermosUso}>Termos de uso</label>
                            </p>

                                {/*<button className="py-2 text-white btn" type="submit">Próximo</button>*/}
                                {/*<button className="py-2 text-white btn" type="button" onClick={ReceberLocal}>Local</button>*/}
                                <button className="py-2 text-white btn" type="submit" onClick={validarCamposPreenchidos}>Cadastrar</button>
                                <Link to="/imagemPsicologo" ref={clickLink}></Link>
                                {/* <Link to="/cadastroImagem" id="cadastroImagem"></Link> */}
                            </div>
                            </div>
                        </form>
                        </div>
                        {
                                    informationTermos && <div className=" fixed inset-0 flex items-center justify-center  overflow-y-auto" >
                                        <div className=" max-h-screen p-4 w-3/5 md:bg-white type-account overflow-y-auto">



                                         
                                         {/* <div className="text-white"> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p><p>teste</p></div> */}

                                         <div className="flex justify-end" >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" className="absolute cursor-pointer" onClick={()=>setInformationTermos(false)}>
                                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                         </svg>
                                        </div>

                                        <p className="font-bold mt-8 mb-8 text-3xl text-center">Termos e Condições de Uso</p> 

                                         Seja bem-vindo(a) a plataforma Atena! Estes termos e condições descrevem as regras de uso do site da empresa The Golden Developers, localizado no endereço https://tccatena.com/. 
                                         Ao acessar este site, consideramos que você está de acordo com os termos e condições abaixo. Não continue a usar o Atena caso você discorde dos termos e condições descritos neste contrato. 

                                        <br/><h2 className="font-bold mt-2 ml-20 text-2xl">Público-alvo:</h2> <br/>

                                         O público-alvo do projeto Atena são apenas pessoas do gênero feminino, ou seja, seus usuários, a nível de paciente, devem ser compatíveis com o gênero proposto. Porém, a nível de psicólogo, não há restrições. 
                                         No momento da primeira consulta, o psicólogo - no qual se voluntaria na plataforma Atena - deve denunciar qualquer divergência relacionada a questão do gênero do paciente, que terá sua conta desativada após uma análise. 

                                         <br/><h2 className="font-bold mt-2 ml-20 text-2xl">Consultas: </h2> <br/>

                                         A paciente poderá fazer apenas uma consulta por vez, e solicitar duas consultas no período de 7 dias, ou seja, se a usuária solicitar uma consulta e a mesma for negada, ela poderá solicitar somente mais uma no período de até 7 dias,
                                         e se tiver uma consulta já agendada - a usuária não conseguirá cadastrar outra. 

                                         <br/><h2 className="font-bold mt-2 ml-20 text-2xl">Cookies:  </h2> <br/>

                                         O site usa cookies para ajudar na personalização da sua experiência na internet. Ao acessar o site Atena, você concorda com o uso dos cookies requeridos. 
                                         Cookies são arquivos de texto inseridos no seu disco rígido por um servidor de página web. Os cookies não têm permissão para executar programas ou transferir vírus para seu computador. Os cookies são associados exclusivamente a você 
                                         e só podem ser lidos pelo servidor web do domínio que emitiu o cookie. Nós podemos usar cookies para coletar, armazenar ou rastrear informações para finalidades estatísticas e mercadológicas do nosso site. Você tem a opção de aceitar 
                                         ou rejeitar os cookies opcionais. Existem alguns cookies obrigatórios, que são necessários para o funcionamento de nosso site. Esses cookies obrigatórios são requerem seu consentimento. Por favor, tenha em mente que, ao aceitar os 
                                         cookies obrigatórios, você também aceitará cookies de terceiros, que podem ser usados por terceiros caso você utilize serviços fornecidos por eles em nosso site – por exemplo, uma janela de reprodução de vídeo fornecida por empresas
                                         terceiras e integrada ao nosso site. 

                                         <br/><h2 className="font-bold mt-2 ml-20 text-2xl">Licença:   </h2> <br/>


                                         Exceto em casos em que for indicado o contrário, The Golden Developers e seus licenciados têm direito à propriedade intelectual de todo o material postado no Atena. Todos os direitos à propriedade intelectual são reservados. 
                                         <label className="font-bold"> Você não tem permissão para: </label>

                                         <li>Copiar ou republicar materiais do Atena;</li>

                                         <li>Vender alugar ou sublocar materiais do Atena;</li>

                                         <li>Reproduzir duplicar ou copiar materiais do Atena;</li>
                                         <br/>

                                         Este Acordo terá efeito a partir da data presente. <label className="font-bold">Criação de links para nosso conteúdo: </label> As seguintes organizações podem criar links para nosso Site sem a necessidade de aprovação prévia por escrito: 

                                         <li>Agências governamentais; </li>

                                         <li>Mecanismos de busca; </li>

                                         <li>Organizações de mídia; </li>

                                         <li>Distribuidores de diretórios online podem inserir links para nosso Site na mesma maneira que inserem hiperlinks para Sites de outras empresas listadas;</li>

                                         <li>Empresas credenciadas, organizações angariastes sem fins lucrativos e grupos de arrecadação de fundos para instituições de caridade. </li>
                                         <br/>

                                         Essas organizações podem postar links para nossa página inicial, nossas publicações ou outras informações do Site, contanto que o link: (a) não seja, de forma alguma, enganoso; (b) não insinue falsamente a existência de uma relação de patrocínio,
                                         endosso, ou aprovação nossa a produtos e/ou serviços; e (c) seja apropriado ao contexto em que está sendo inserido. <br/> Nós podemos considerar e aprovar solicitações de link feitas pelos seguintes tipos de organizações: 
                                         
                                         <li>Fontes de informação bem conhecidas sobre produtos e negócios;</li>

                                         <li>Sites comunitários;</li>

                                         <li>Associações e outros grupos que representem instituições de caridade</li>

                                         <li>Distribuidores de diretórios online; </li>

                                         <li>Portais de internet; </li>

                                         <li>Firmas de contabilidade, advocacia e consultoria;</li>

                                         <li>Instituições educacionais e associações de classe.</li>
 
                                         Nós vamos aprovar solicitações de link feitas pelos tipos de organização listados acima se julgarmos que: (a) o link não é desfavorável para nossa imagem e/ou para a imagem de empresas credenciadas; (b) a organização solicitante não possui histórico 
                                         negativo conosco; (c) o benefício que ganhamos com a visibilidade do link compensa a ausência do The Golden Developers; e (d) o link será inserido em um contexto geral informativo. <br/>Essas organizações podem postar links para nossa página inicial 
                                         contanto que o link: (a) não seja, de forma alguma, enganoso; (b) não insinue falsamente a existência de uma relação de patrocínio, endosso, ou aprovação de produtos e/ou serviços da nossa parte; e (c) seja apropriado ao contexto em que está sendo inserido. <br/>
                                         Se você representa uma das organizações listadas no parágrafo 2 acima e está interessado em postar um link para nosso site, você deve nos informar de seu interesse enviando um e-mail para The Golden Developers. Por favor, inclua seu some, o nome da sua organização
                                         e suas informações de contato, assim como a URL do seu site, uma lista das URLs do nosso site que você pretende usar como links, e uma lista dos sites nos quais você pretende publicar nossas URLs. Aguarde entre 2 e 3 semanas para receber uma resposta. 
                                         <label className="font-bold">Organizações aprovadas poderão publicar links para nosso Site das seguintes formas: </label>

                                         <li>Usando nosso nome corporativo; ou</li>

                                         <li>Usando a URL para onde o link redireciona; ou</li>

                                         <li>Usando qualquer outra descrição do nosso Site que faça sentido dentro do contexto e do formato do conteúdo onde o link está sendo inserido.</li>

                                         Não será permitido o uso ou a publicação de links para o logo e/ou outros elementos visuais da The Golden Developers sem um acordo de licença para o uso da marca registrada. 
                                         <label className="font-bold">Responsabilização pelo Conteúdo: </label> Não seremos responsabilizados legalmente por qualquer conteúdo que apareça no seu Site. Você concorda em nos proteger e nos defender contra todas as acusações que forem levantadas no seu Site. Nenhum link deve aparecer 
                                         em qualquer Site que possa ser interpretado como difamatório, obsceno, criminoso, ou que infrinja, viole ou defenda a violação dos direitos de terceiros. <br/>  <label className="font-bold">Reserva de Direitos: </label>
                                         Reservamos nosso direito de solicitar que você remova todos os links ou quaisquer links que redirecionem para nosso site. Você concorda em remover imediatamente todos os links para nosso site assim que a remoção for solicitada. Também reservamos nosso direito de corrigir e alterar estes 
                                         termos e condições a qualquer momento. Ao publicar continuadamente links para nosso site, você concorda a seguir estes termos e condições sobre links. 
                                         <label className="font-bold"> Remoção de links postados em nosso site:</label> Se você encontrar qualquer link em nosso Site que seja de qualquer forma ofensivo, você tem a liberdade de entrar em contato conosco e nos informar do problema a qualquer momento. Vamos considerar as solicitações 
                                         de remoção de links, mas não somos obrigados a remover quaisquer links do nosso site nem a responder diretamente à sua solicitação. Nós não garantimos que as informações contidas neste site são corretas. Nós não garantimos integralidade ou exatidão do conteúdo. Não garantimos que o site se 
                                         manterá disponível ou que o material do site se manterá atualizado. <br/> <label className="font-bold"> Declaração de Isenção de Responsabilidade:</label> No máximo possível permitido por lei, nós excluímos todas as representações, garantias e condições relativas ao nosso site e ao uso deste site. 
                                         Nada nesta declaração de isenção de responsabilidade vai: 

                                         <li>limitar ou excluir nossa responsabilidade ou sua responsabilidade por mortes ou danos pessoais; </li>

                                         <li>limitar ou excluir nossa responsabilidade ou sua responsabilidade por fraudes ou deturpações fraudulentas; </li>

                                         <li>limitar nossa responsabilidade ou sua responsabilidade de quaisquer maneiras que não forem permitidas sob a lei; </li>

                                         <li>excluir quaisquer responsabilidades suas ou nossas que não podem ser excluídas de acordo com a lei aplicável. </li>
                                        
                                         As limitações e proibições de responsabilização listadas nesta Seção e em outras partes desta declaração: (a) estão sujeitas ao parágrafo anterior; e (b) regem todas as responsabilizações que surgirem sob a declaração, incluindo responsabilizações surgidas em contrato, em delitos
                                         e em quebra de obrigações legais. Enquanto o site e as informações e serviços do site forem oferecidos gratuitamente, nós não seremos responsáveis por perdas e danos de qualquer natureza.
                                        </div>
                                    </div>   
                                } 
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroPsicologo;