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


import '../presentation/styles.css'
import { NavLink } from './style';


const Apresentacao = () => {
    return (
      <>
        <header>
          <nav className="w-full h-20 flex items-center justify-center fixed  navbar">
            <img src={logonNavbar} className='img_navbar'/>
            <div className="w-full px-6 md:w-2/3">
              <ul className="flex justify-between md:justify-end">
               <NavLink href="#project"> Projeto </NavLink>
               <NavLink href="#aboutUs"> Quem Somos</NavLink>
               <NavLink href="#team"> Equipe </NavLink>
               <Link to="/login"><li className=" text-xl text-white enter">Entrar</li></Link>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          <article>
            <section className="min-h-screen px-4 flex items-center justify-center start">
              <div className="flex justify-between md:w-2/3">
                <div className='content_start'>
                  <img src={logoAtena} alt="logo" />
                  <p className="text-white text-xl">Você é forte e será capaz de <br/> lutar e passar por essa fase.</p>
                  <Link to="/login"><button className="w-full md:w-60 py-2 my-4 text-purple-600 text-lg font-bold rounded-lg bg-white btn">Entrar</button></Link>
                </div>
              </div>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id='project'>
              <path fill='rgb(164,132,232)' fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,154.7C672,160,768,160,864,154.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            <section className="px-4 py-8 md:pb-32 flex items-center justify-center content_project"  >
              <div className="md:w-2/3 md:flex justify-between py-6">
                <div className="w-full md:w-96 h-64 flex items-center justify-center text-white bg-black">video aqui</div>
                <div className="md:max-w-2xl">
                  <h3 className=" title my-4 text-purple-400 text-xl">Nosso objetivo</h3>
                  <p className=" text-lg">  A plataforma ATENA foi criada visando zelar <br/>a saúde mental de mulheres vítimas da violência, através de orientações feitas por profissionais da psicologia em consultas onlines e totalmente gratuitas.</p>
                </div>
              </div>
            </section>

            <section className="px-4 py-8 md:py-32 flex items-center justify-center content_project2">
              <div className="md:w-2/3 flex flex-col-reverse md:flex-row justify-between py-6">
                <div className="md:max-w-2xl">
                  <h3 className="title  text-purple-400 my-4 text-xl">Saúde mental</h3>
                  <p className=" p text-lg">
                   Zelar pelo seu bem-estar mental deve ser uma entre  suas prioridades de vida, o seu estado mental é refletido em todas as áreas da sua vida, desde seu comportamento no trabalho e até mesmo no seu relacionamento familiar, por tanto não deixe o de lado.
                  </p>
                </div>
                <div className="w-full md:w-96 h-64 flex items-center justify-center text-white bg-black">video aqui</div>
              </div>
            </section>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg'><path fill="#ffff" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
           
            <section id='aboutUs' className='aboutUs'>
              <div className='container' >
                <div className="content_aboutUs">
                  
                   <h2 className="text-xl title">The Golden Developers</h2>
                   <div className='content'>
                     <img src={logoEmpresa}/>
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
                    <img src={perfilAna} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "></img>
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Ana Beatriz</div>
                        <div>Designer e Marketing</div>
                      </div>
                    </div>
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                      <img src={perfilRian} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "></img>
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Rian Vieria</div>
                        <div>Desenvolvedor Full-Stack</div>
                      </div>
                    </div>
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                     <img src={perfilBernardo} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "></img>
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Bernardo lopez</div>
                        <div>Desenvolvedor Back-End</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-around lg:mt-16">
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                     <img src={perfilBea} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "></img>
                      <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Beatriz Bialtas</div>
                        <div>Designer</div>
                      </div>
                    </div>
                    <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                     <img src={perfilWelly} className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "></img>
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
    */}

      {/*
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
       */}
    </>
  )
}

export default Apresentacao;