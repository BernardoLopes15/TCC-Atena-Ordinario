import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const TermosDeUso = () => {
    const showSwal = () => {
        Swal.fire({
            text: "Cadastrado negado, para continuar aceite os Termos e Condições de Uso.",
            icon:"error"
        })
    }

    return (

        <main>
            <article>
                <div>
                    <div>
                        <div className="flex justify-center text-justify bg-gray-200">
                            <div className="md:w-1/2 p-6 bg-white">
                                <h2 className="text-3xl font-style">Termos e Condições de Uso</h2>
                                <p className="my-4">
                                    Seja bem-vindo(a) a plataforma Atena! Estes termos e condições descrevem as regras de uso do site da empresa The Golden Developers, localizado no endereço https://tccatena.com/.
                                    Ao acessar este site, consideramos que você está de acordo com os termos e condições abaixo. Não continue a usar o Atena caso você discorde dos termos e condições descritos neste contrato.
                                </p>
                                <h2 className="text-2xl font-bold">Público-alvo:</h2>
                                <p className="my-4">
                                    O público-alvo do projeto Atena são apenas pessoas do gênero feminino, ou seja, seus usuários, a nível de paciente, devem ser compatíveis com o gênero proposto. Porém, a nível de psicólogo, não há restrições.
                                    No momento da primeira consulta, o psicólogo - no qual se voluntaria na plataforma Atena - deve denunciar qualquer divergência relacionada a questão do gênero do paciente, que terá sua conta desativada após uma análise.
                                </p>
                                <h2 className="text-2xl font-bold">Consultas: </h2>
                                <p className="my-4">
                                    A paciente poderá fazer apenas uma consulta por vez, e solicitar duas consultas no período de 7 dias, ou seja, se a usuária solicitar uma consulta e a mesma for negada, ela poderá solicitar somente mais uma no período de até 7 dias,
                                    e se tiver uma consulta já agendada - a usuária não conseguirá cadastrar outra.
                                </p>
                                <h2 className="text-2xl font-bold">Cookies:  </h2>
                                <p className="my-4">
                                    O site usa cookies para ajudar na personalização da sua experiência na internet. Ao acessar o site Atena, você concorda com o uso dos cookies requeridos.
                                    Cookies são arquivos de texto inseridos no seu disco rígido por um servidor de página web. Os cookies não têm permissão para executar programas ou transferir vírus para seu computador. Os cookies são associados exclusivamente a você
                                    e só podem ser lidos pelo servidor web do domínio que emitiu o cookie. Nós podemos usar cookies para coletar, armazenar ou rastrear informações para finalidades estatísticas e mercadológicas do nosso site. Você tem a opção de aceitar
                                    ou rejeitar os cookies opcionais. Existem alguns cookies obrigatórios, que são necessários para o funcionamento de nosso site. Esses cookies obrigatórios são requerem seu consentimento. Por favor, tenha em mente que, ao aceitar os
                                    cookies obrigatórios, você também aceitará cookies de terceiros, que podem ser usados por terceiros caso você utilize serviços fornecidos por eles em nosso site – por exemplo, uma janela de reprodução de vídeo fornecida por empresas
                                    terceiras e integrada ao nosso site.
                                </p>
                                <h2 className="text-2xl font-bold">Licença:   </h2>
                                <p className="my-4">
                                    Exceto em casos em que for indicado o contrário, The Golden Developers e seus licenciados têm direito à propriedade intelectual de todo o material postado no Atena. Todos os direitos à propriedade intelectual são reservados.
                                    <label className="font-bold"> Você não tem permissão para: </label>
                                </p>
                                <li>Copiar ou republicar materiais do Atena;</li>
                                <li>Vender alugar ou sublocar materiais do Atena;</li>
                                <li>Reproduzir duplicar ou copiar materiais do Atena;</li>
                                Este Acordo terá efeito a partir da data presente. <label className="font-bold">Criação de links para nosso conteúdo: </label> As seguintes organizações podem criar links para nosso Site sem a necessidade de aprovação prévia por escrito:
                                <li>Agências governamentais; </li>
                                <li>Mecanismos de busca; </li>
                                <li>Organizações de mídia; </li>
                                <li>Distribuidores de diretórios online podem inserir links para nosso Site na mesma maneira que inserem hiperlinks para Sites de outras empresas listadas;</li>

                                <li>Empresas credenciadas, organizações angariastes sem fins lucrativos e grupos de arrecadação de fundos para instituições de caridade. </li>

                                <p className="my-4">
                                    Essas organizações podem postar links para nossa página inicial, nossas publicações ou outras informações do Site, contanto que o link: (a) não seja, de forma alguma, enganoso; (b) não insinue falsamente a existência de uma relação de patrocínio,
                                    endosso, ou aprovação nossa a produtos e/ou serviços; e (c) seja apropriado ao contexto em que está sendo inserido.
                                </p>
                                <p>
                                    Nós podemos considerar e aprovar solicitações de link feitas pelos seguintes tipos de organizações:
                                </p>
                                <li>Fontes de informação bem conhecidas sobre produtos e negócios;</li>

                                <li>Sites comunitários;</li>

                                <li>Associações e outros grupos que representem instituições de caridade</li>

                                <li>Distribuidores de diretórios online; </li>

                                <li>Portais de internet; </li>

                                <li>Firmas de contabilidade, advocacia e consultoria;</li>

                                <li>Instituições educacionais e associações de classe.</li>
                                <p className="my-4">
                                    Nós vamos aprovar solicitações de link feitas pelos tipos de organização listados acima se julgarmos que: (a) o link não é desfavorável para nossa imagem e/ou para a imagem de empresas credenciadas; (b) a organização solicitante não possui histórico
                                    negativo conosco; (c) o benefício que ganhamos com a visibilidade do link compensa a ausência do The Golden Developers; e (d) o link será inserido em um contexto geral informativo. <br />Essas organizações podem postar links para nossa página inicial
                                    contanto que o link: (a) não seja, de forma alguma, enganoso; (b) não insinue falsamente a existência de uma relação de patrocínio, endosso, ou aprovação de produtos e/ou serviços da nossa parte; e (c) seja apropriado ao contexto em que está sendo inserido. <br />
                                    Se você representa uma das organizações listadas no parágrafo 2 acima e está interessado em postar um link para nosso site, você deve nos informar de seu interesse enviando um e-mail para The Golden Developers. Por favor, inclua seu some, o nome da sua organização
                                    e suas informações de contato, assim como a URL do seu site, uma lista das URLs do nosso site que você pretende usar como links, e uma lista dos sites nos quais você pretende publicar nossas URLs. Aguarde entre 2 e 3 semanas para receber uma resposta.
                                    <label className="font-bold">Organizações aprovadas poderão publicar links para nosso Site das seguintes formas: </label>
                                </p>

                                <li>Usando nosso nome corporativo; ou</li>

                                <li>Usando a URL para onde o link redireciona; ou</li>

                                <li>Usando qualquer outra descrição do nosso Site que faça sentido dentro do contexto e do formato do conteúdo onde o link está sendo inserido.</li>
                                <p className="my-4">
                                    Não será permitido o uso ou a publicação de links para o logo e/ou outros elementos visuais da The Golden Developers sem um acordo de licença para o uso da marca registrada.
                                    <label className="font-bold">Responsabilização pelo Conteúdo: </label> Não seremos responsabilizados legalmente por qualquer conteúdo que apareça no seu Site. Você concorda em nos proteger e nos defender contra todas as acusações que forem levantadas no seu Site. Nenhum link deve aparecer
                                    em qualquer Site que possa ser interpretado como difamatório, obsceno, criminoso, ou que infrinja, viole ou defenda a violação dos direitos de terceiros. <br />  <label className="font-bold">Reserva de Direitos: </label>
                                    Reservamos nosso direito de solicitar que você remova todos os links ou quaisquer links que redirecionem para nosso site. Você concorda em remover imediatamente todos os links para nosso site assim que a remoção for solicitada. Também reservamos nosso direito de corrigir e alterar estes
                                    termos e condições a qualquer momento. Ao publicar continuadamente links para nosso site, você concorda a seguir estes termos e condições sobre links.
                                    <label className="font-bold"> Remoção de links postados em nosso site:</label> Se você encontrar qualquer link em nosso Site que seja de qualquer forma ofensivo, você tem a liberdade de entrar em contato conosco e nos informar do problema a qualquer momento. Vamos considerar as solicitações
                                    de remoção de links, mas não somos obrigados a remover quaisquer links do nosso site nem a responder diretamente à sua solicitação. Nós não garantimos que as informações contidas neste site são corretas. Nós não garantimos integralidade ou exatidão do conteúdo. Não garantimos que o site se
                                    manterá disponível ou que o material do site se manterá atualizado.
                                </p>
                                <p className="my-4">
                                    <label className="font-bold"> Declaração de Isenção de Responsabilidade:</label> No máximo possível permitido por lei, nós excluímos todas as representações, garantias e condições relativas ao nosso site e ao uso deste site.
                                    Nada nesta declaração de isenção de responsabilidade vai:
                                </p>
                                <li>limitar ou excluir nossa responsabilidade ou sua responsabilidade por mortes ou danos pessoais; </li>

                                <li>limitar ou excluir nossa responsabilidade ou sua responsabilidade por fraudes ou deturpações fraudulentas; </li>

                                <li>limitar nossa responsabilidade ou sua responsabilidade de quaisquer maneiras que não forem permitidas sob a lei; </li>

                                <li>excluir quaisquer responsabilidades suas ou nossas que não podem ser excluídas de acordo com a lei aplicável. </li>
                                <p className="my-4">
                                    As limitações e proibições de responsabilização listadas nesta Seção e em outras partes desta declaração: (a) estão sujeitas ao parágrafo anterior; e (b) regem todas as responsabilizações que surgirem sob a declaração, incluindo responsabilizações surgidas em contrato, em delitos
                                    e em quebra de obrigações legais. Enquanto o site e as informações e serviços do site forem oferecidos gratuitamente, nós não seremos responsáveis por perdas e danos de qualquer natureza.
                                </p>
                                <div className="flex items-center justify-center">
                                    <Link to="/imagemCliente"><button className=" px-2 py-1 mt-4 bg-purple-900 text-white rounded-md" type="button" >Concordo com os Termos de Uso</button></Link>
                                    <button className=" ml-4 px-2 py-1 mt-4 bg-purple-900 text-white rounded-md" type="button" onClick={showSwal} >Discordo com os Termos de Uso</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default TermosDeUso;