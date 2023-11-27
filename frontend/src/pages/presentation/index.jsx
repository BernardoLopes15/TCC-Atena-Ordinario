import { Link } from 'react-router-dom';

import logoAtena from "../../assets/imgs/logo_atena.png";
import logoEmpresa from "../../assets/imgs/logo_empresa.png";
import logonNavbar from "../../assets/imgs/logo_navbar.png";
import perfilRian from "../../assets/imgs/perfil_rian.png";
import perfilAna from "../../assets/imgs/perfil_ana.png";
import perfilBernardo from "../../assets/imgs/perfil_bernardo.png";
import perfilBea from "../../assets/imgs/perfil_bia.png";
import perfilWelly from "../../assets/imgs/perfil_welly.jpg";
import Rodape from '../../components/Rodape';

import iconMuler from "../../assets/undraw_mention_re_k5xc.png";

import '../presentation/styles.css';

import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Apresentacao = () =>{
  const [navAtiva, setNavAtiva] = useState(false);
  const [anima, setAnima] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setNavAtiva(true);
      } else{
        setNavAtiva(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    setAnima(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
  <>
    <header>
      <nav className={`w-full h-20 flex items-center justify-center fixed navbar ${navAtiva && "fundo-navbar"}`}>
        <img loading="lazy" src={logonNavbar} className='img_navbar'/>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className='iconList bi bi-list'>
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <div className="w-full px-6 md:w-2/3 Navbar__Items">
          <ul className="flex items-center justify-between md:justify-end">
             <a href="#project"> Projeto </a>
             <a href="#aboutUs"> Quem Somos</a>
             <a href="#team"> Equipe </a>
            <Link to="/"><a>Entrar</a></Link>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <article>
        <section className="min-h-screen px-4 flex items-center justify-center inicio">
          <div className="md:w-10/12 lg:w-9/12 flex items-center justify-between">
            <CSSTransition
              in={anima}
              timeout={1000}
              classNames="page"
              unmountOnExit
            >
              <img loading="lazy" className='w-5/12 md:block hidden' src={iconMuler} alt="mulher icon" />
            </CSSTransition>
            <div className='md:mr-48'>
              <CSSTransition
                in={anima}
                timeout={1000}
                classNames="nav"
                unmountOnExit
              >
                <img loading="lazy" src={logoAtena} alt="logo" className='w-96' />
              </CSSTransition>
              <p className="py-6 text-white text-center text-xl">Você é forte, será capaz de <br /> lutar e conquistar o seu espaço.</p>
              <Link to="/"><button className="w-full md:w-96 py-2 my-4 transition-all duration-300 text-purple-800 text-lg font-bold rounded-lg bg-white">Entrar</button></Link>
            </div>
          </div>
        </section>
        <svg className='md:block hidden svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
          <path fill='rgb(164,132,232)' fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,154.7C672,160,768,160,864,154.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" id='project'></path>
        </svg>
        <section className="px-4 py-8 md:pb-32 flex items-center justify-center objetivo " >
          <div className="md:w-2/3 md:flex justify-between py-6 content-objetivo">
            <div className="w-full md:w-96 h-64 flex items-center justify-center text-white bg-black">video aqui</div>
            <div className="md:max-w-2xl">
              <h3 className="title font-bold text-purple-400 my-4 text-xl">Nosso objetivo</h3>
              <p className="subtitle text-lg">  A plataforma ATENA foi criada visando zelar a saúde mental de mulheres vítimas da violência, por meio de orientações feitas por profissionais da área da psicologia, em consultas onlines e totalmente gratuitas.</p>
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

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='md:block hidden svg2'>
          <path fill="#fff" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

        <section className="px-4 py-8 flex items-center justify-center text-white inicio" id='aboutUs'>
          <div className="md:w-9/12 flex flex-col-reverse md:flex-row justify-between py-6">
            <div className='w-full'>

              <div className='flex items-center justify-center flex-wrap'>
                <img loading="lazy" className='md:mr-16 rounded-2xl img-size hidden' src={logoEmpresa} alt="logo empresa" /> 

                <div className='width-text'>
                  <h2 className="py-4 font-title text-5xl font-medium">The Golden Developers</h2>
                  <p className="text-xl">
                    A The Golden Developers é uma empresa com uma equipe de 5 integrantes, que mira em um projeto de importância social, a fim de construir uma sociedade mais acolhedora e segura, principalmente para o público feminino.
                    Dessa forma, visamos disponibilizar para as mulheres vítimas de situações violentas e traumáticas, a oportunidade de voltar a se sentirem confortáveis em qualquer tipo de relacionamento.
                  </p>
                </div>

              </div>
              <div className='w-full'>
                <h3 className='pt-8 text-center font-title text-5xl'>Nossos valores:</h3>
                <div className='flex justify-between flex-wrap py-16'>

                  <div className='w-56 my-10 lg:my-0 md:mr-4'>
                    <h4 className='text-2xl font-medium'>Prosperidade</h4>
                    <p className='text-xl'>Se esta é a nossa vontade, então devemos aplicá-la.</p>
                  </div>

                  <div className='w-56 my-10  lg:my-0 md:mr-4'>
                    <h4 className='text-2xl font-medium'>Respeito</h4> 
                    <p className='text-xl'>O mundo se tornará melhor apenas se um acordo de respeito for estabelecido entre todas as pessoas.</p>
                  </div>

                  <div className='w-56 my-10 ml-3 lg:my-0 md:mr-4'>
                    <h4 className='text-2xl font-medium'>Altruísmo</h4>
                    <p className='text-xl'>  Não devemos esperar nada em troca ao fazer o que é necessário para o mundo.</p> 
                  </div>

                <div className='w-56 my-10 ml-2 lg:my-0 md:mr-4'>
                  <h4 className='text-2xl font-medium'>Beneficiência</h4>
                  <p className='text-xl'>Não podemos deixar as pessoas mais vulneráveis na mão.</p> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id='project' className='md:block hidden'>
          <path fill='' className='svg3' fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,154.7C672,160,768,160,864,154.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg> */}
        <section className="min-h-screen px-4 flex items-center justify-center team" id='team'>
          <div className="w-full md:w-2/3 flex justify-between py-6">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row md:justify-between">
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "><img loading="lazy" alt='membros' src={perfilAna}/></div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Ana Beatriz</div>
                        <div>Designer e Marketing</div>
                      </div>
                </div>
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "><img loading="lazy" alt='membros' src={perfilRian}/></div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Rian Vieira</div>
                        <div>Desenvolvedor Full-Stack</div>
                      </div>
                </div>
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "><img loading="lazy" alt='membros' src={perfilBernardo}/></div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Bernardo lopez</div>
                        <div>Desenvolvedor Back-End</div>
                      </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-around lg:mt-16">
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "><img loading="lazy" alt='membros' src={perfilBea}/></div>
                  <div className="w-60 ml-8 mt-0 lg:mt-2 lg:ml-0">
                        <div className="text-lg name">Beatriz Bialtas</div>
                        <div>Designer e Marketing</div>
                      </div>
                </div>
                <div className="my-8 flex flex-wrap lg:block lg:mt-8">
                  <div className="w-60 h-60 ml-8 mt-0 lg:mt-2 lg:ml-0 flex items-center justify-center "><img loading="lazy" className='rounded-lg' alt='membros' src={perfilWelly}/></div>
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
    <Rodape estilo="bg-white" />
  </>
  )
};

export default Apresentacao;
