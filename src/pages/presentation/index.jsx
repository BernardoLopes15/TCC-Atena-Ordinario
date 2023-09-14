//import { Nav, NavMenu, NavLink, Div, Main, Footer, CardEntrar, Logo, Subtitle, Title, CardProject, CardAbout, TextContent, Section } from './style';
import { Link } from 'react-router-dom';

import logoAtena from "../../assets/imgs/logo_atena.png";
import logoEmpresa from "../../assets/imgs/logo_empresa.png";
import arte from "../../assets/atena apresenta.png"

/*
import logonNavbar from "../../assets/imgs/logo_navbar.png";
import perfilRian from "../../assets/imgs/perfil_rian.png";
import perfilAna from "../../assets/imgs/perfil_ana.png";
import perfilBernardo from "../../assets/imgs/perfil_bernardo.png";
import perfilBea from "../../assets/imgs/perfil_bia.png";
import perfilWelly from "../../assets/imgs/perfil_welly.png";
import arte from "../../assets/atena apresenta.png"
*/
import '../presentation/styles.css'
import { NavLink } from './style';

const Apresentacao = () => (
  <>
    <header>
      <nav className="w-full h-20 flex items-center justify-center fixed bg-purple-600">
        <div className="w-full px-6 md:w-2/3">
          <ul className="flex justify-between md:justify-end">
            <li className="md:ml-16 text-xl text-white">Quem Somos</li>
            <li className="md:ml-16 text-xl text-white">Projeto</li>
            <li className="md:ml-16 text-xl text-white">Equipe</li>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <article>
        <section className="min-h-screen px-4 flex items-center justify-center inicio">
          <div className="flex justify-between md:w-2/3 content-inicio">
            <div className='enter'>
              <img src={logoAtena} alt="logo" className='logo' />
              <p className="text-white subtitle text-xl">Você é forte e será capaz de <br /> lutar e conquistar o seu espaço.</p>
              <a><Link to="/login"><button className="w-full md:w-60 py-2 my-4 text-purple-600 text-lg font-bold rounded-lg bg-white btn">Entrar</button></Link></a>
            </div>
          </div>
        </section>

        <svg className='md:block hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id='project'>
          <path fill='rgb(164,132,232)' fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,154.7C672,160,768,160,864,154.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section className="px-4 py-8 md:pb-32 flex items-center justify-center objetivo">
          <div className="md:w-2/3 md:flex justify-between py-6 content-objetivo">
            <div className="w-full md:w-96 h-64 flex items-center justify-center text-white bg-black">video aqui</div>
            <div className="md:max-w-2xl">
              <h3 className="title font-bold text-purple-400 my-4 text-xl">Nosso objetivo</h3>
              <p className="subtitle text-lg">  A plataforma ATENA foi criada visando zelar a saúde mental das mulheres vítimas da violência, por meio de orientações de profissionais da área da psicologia em consultas online totalmente gratuitas.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:py-32 flex items-center justify-center saude">
          <div className="md:w-2/3 flex flex-col-reverse md:flex-row justify-between py-6 content-saude">
            <div className="md:max-w-2xl">
              <h3 className="title font-bold my-4 text-xl">Cuidar da saúde mental</h3>
              <p className="subtitle text-lg">
                Zelar pelo seu bem-estar mental deve ser uma entre suas prioridades de vida, o seu estado mental é refletido em todas as áreas da sua vida, desde seu comportamento no trabalho até seu relacionamento familiar.
              </p>
            </div>
            <div className="w-full md:w-96 h-64 flex items-center justify-center text-white bg-black">video aqui</div>
          </div>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='md:block hidden svg2'><path fill="#fff" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

        <section className="px-4 py-8  flex items-center justify-center tcc">
          <div className="md:w-2/3 flex flex-col-reverse md:flex-row justify-between py-6 content-tcc">
            <div>
             <h2 className=" title">The Golden Developers</h2>
             <div className='informations'>
               <img src={logoEmpresa} alt="perfil" className='logoEmpresa' />
               <p className="text">
                 A The Golden Developers é uma empresa com uma equipe de 5 integrantes, que mira em um projeto de importância social, a fim de construir uma sociedade mais acolhedora e segura, principalmente para o público feminino.
                 Dessa forma, visamos disponibilizar para mulheres vítimas de situações traumáticas a oportunidade de voltar a se sentirem confortáveis em qualquer tipo de relacionamento.
               </p>
              </div>
            </div>
          </div>
        </section>


        <section className="min-h-screen px-4 flex items-center justify-center project">
          <div className="w-full md:w-2/3 flex justify-between py-6">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row md:justify-between">
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center bg-purple-500">Foto Aqui</div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                    <div className="text-lg">Bernardo lopez da Cruz</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </div>
                </div>
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center bg-blue-500">Foto Aqui</div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                    <div className="text-lg">Bernardo lopez da Cruz</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </div>
                </div>
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center bg-red-500">Foto Aqui</div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                    <div className="text-lg">Bernardo lopez da Cruz</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-around lg:mt-16">
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center bg-purple-500">Foto Aqui</div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                    <div className="text-lg">Bernardo lopez da Cruz</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </div>
                </div>
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center bg-purple-500">Foto Aqui</div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                    <div className="text-lg">Bernardo lopez da Cruz</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
    <footer>
      <div className="h-32 flex justify-center bg-purple-400">
        <div className="md:w-2/3 flex items-center justify-between">
          <div className="text-xl">Rodapé</div>
          <div className="text-xl">Rodapé</div>
        </div>
      </div>
    </footer>




  </>
)

export default Apresentacao;

/*
//import { Nav, NavMenu, NavLink, Div, Main, Footer, CardEntrar, Logo, Subtitle, Title, CardProject, CardAbout, TextContent, Section } from './style';
import { Link } from 'react-router-dom';

import logonNavbar from "../../assets/imgs/logo_navbar.png";
import logoAtena from "../../assets/imgs/logo_atena.png";
import logoEmpresa from "../../assets/imgs/logo_empresa.png";
import perfilRian from "../../assets/imgs/perfil_rian.png";
import perfilAna from "../../assets/imgs/perfil_ana.png";
import perfilBernardo from "../../assets/imgs/perfil_bernardo.png";
import perfilBea from "../../assets/imgs/perfil_bia.png";
import perfilWelly from "../../assets/imgs/perfil_welly.png";
import arte from "../../assets/atena apresenta.png"

import '../presentation/styles.css'
import { NavLink } from './style';
     
           
            <section id='aboutUs' className='aboutUs'>
              <div className='container' >
                <div className="content_aboutUs">
                  
                   <h2 className="text-xl title">The Golden Developers</h2>
                   <div className='content'>
                     <img src={logoEmpresa} alt="perfil" />
                    <div className='text_aboutUs'>
                     <p>
                       A The Golden Developers é uma empresa com uma equipe de 5 integrantes, que mira em um projeto de importância social, a fim de construir uma sociedade mais acolhedora e segura, principalmente para o público feminino.
                        Dessa forma, visamos disponibilizar para mulheres vítimas de situações traumáticas a oportunidade de voltar a se sentirem confortáveis em qualquer tipo de relacionamento.
                     </p>
                     </div>
                    </div>

                  <h3>Nossos valores:</h3>

                  <div className='text_content'>
                   <div className='values'>
                     <h4>Prosperidade</h4>
                     <p>Se esta é a nossa vontade, então também devemos aplicá-la.</p>
                   </div>

                   <div className='values teste1'>
                    <h4>Respeito</h4> 
                    <p>O mundo se tornará melhor apenas se um acordo de respeito for estabelecido entre todas as pessoas.</p>
                   </div>

                   <div className='values'>
                    <h4>Altruísmo</h4>
                    <p> Não devemos esperar nada em troca ao fazer o que é necessário para o mundo.</p> 
                  </div>

                   <div className='values'>
                    <h4>Beneficiência</h4>
                    <p>Não podemos deixar as pessoas mais vulneráveis na mão.</p> 
                  </div>
                </div>
                <img src={arte} alt="logo" className='arte'/>
              </div>
             </div>
           </section>

           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id='project'>
              <path fill='rgb(164,132,232)' fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,154.7C672,160,768,160,864,154.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>


            <section className="min-h-screen px-4 flex items-center justify-center team" id='team'>
              <div className="w-full md:w-2/3 flex justify-between py-6">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row md:justify-between">
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                    <img src={perfilAna} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center" alt="perfil" />
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Ana Beatriz</div>
                        <div>Designer e Marketing</div>
                      </div>
                    </div>
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                      <img src={perfilRian} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center" alt="perfil" />
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Rian Vieria</div>
                        <div>Desenvolvedor Full-Stack</div>
                      </div>
                    </div>
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                     <img src={perfilBernardo} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center " alt="perfil" />
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Bernardo lopez</div>
                        <div>Desenvolvedor Back-End</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-around lg:mt-16">
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                     <img src={perfilBea} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center " alt="perfil" />
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Beatriz Bialtas</div>
                        <div>Designer</div>
                      </div>
                    </div>
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                     <img src={perfilWelly} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center " alt="perfil" />
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Wellyngton de Souza</div>
                        <div>Desenvolvedor Front-End</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </article>
        </main>
        <footer>
          <div className="h-32 flex justify-center bg-purple-400">
            <div className="md:w-2/3 flex items-center justify-between">
              <div className="text-xl">Rodapé</div>
              <div className="text-xl">Rodapé</div>

            </div>
          </div>
        </footer>
      {/*
      <Nav>
        <NavMenu>
          <NavLink href="#project">
          Projeto
          </NavLink>
          <NavLink href='#about'>
          Quem Somos
          </NavLink>
          <NavLink href='#team'>
          Equipe
          </NavLink>
        </NavMenu>
      </Nav>
    */

      /*
      <Div>
        <CardEntrar>
          <Logo src="../imgs/Logo.png"/>
          <Subtitle className="subtitle">Você é forte e será capaz de <br/> lutar e conquistar o seu espaço.</Subtitle>
          <Button><Link to="/login">Entrar</Link></Button> 
        </CardEntrar>
      </Div>

      <Main id="project">
        <CardAbout>
          <Title className="title">Nosso objetivo</Title>
          <TextContent>
            A plataforma A.T.E.N.A foi criada visando zelar a saúde mental das mulheres vítimas da violência, por meio de orientações de profissionais da área da psicologia em consultas online totalmente gratuitas.
          </TextContent>
        </CardAbout>
      </Main>

      <Main className="main">
        <CardProject>
        <Title className="title">Cuidar da sáude mental</Title>
        <TextContent>
          A plataforma A.T.E.N.A foi criada visando zelar a saúde mental das mulheres vítimas da violência, por meio de orientações de profissionais da área da psicologia em consultas online totalmente gratuitas.
        </TextContent>
          *texto em criação
        </CardProject>
      </Main>

      <Section id="about">
        *texto sobre o tcc
      </Section>

      <Footer id="team">
        *Equipe
      </Footer>
       
    </>
  )
}

export default Apresentacao;
*/