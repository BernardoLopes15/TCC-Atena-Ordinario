//import { Nav, NavMenu, NavLink, Div, Main, Footer, CardEntrar, Logo, Subtitle, Title, CardProject, CardAbout, TextContent, Section } from './style';
import { Link } from 'react-router-dom';
import imagemgenerica from "../../assets/imagem-generica.jpg";
import logo from "../../assets/Logo.png";

const Apresentacao = () => {
    return (
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
            <section className="min-h-screen px-4 flex items-center justify-center bg-purple-400">
              <div className="flex justify-between md:w-2/3">
                <div>
                  <img src={logo} alt="logo" />
                  <p className="text-white subtitle text-xl">Você é forte e será capaz de <br/> lutar e conquistar o seu espaço.</p>
                  <Link to="/login"><button className="w-full md:w-60 py-2 my-4 text-purple-600 text-lg font-bold rounded-lg bg-white">Entrar</button></Link>
                </div>
                <div className="hidden md:flex items-center">
                  <img src={imagemgenerica} alt="logo" />
                </div>
              </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#c084fc" fill-opacity="1" d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,154.7C672,160,768,160,864,154.7C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <section className="px-4 py-8 md:pb-32 flex items-center justify-center">
              <div className="md:w-2/3 md:flex justify-between py-6">
                <div className="w-full md:w-96 h-64 flex items-center justify-center text-white bg-black">video aqui</div>
                <div className="md:max-w-2xl">
                  <h3 className="title font-bold text-purple-400 my-4 text-xl">Nosso objetivo</h3>
                  <p className="subtitle text-lg">A plataforma A.T.E.N.A foi criada visando zelar a saúde mental das mulheres vítimas da violência, por meio de orientações de profissionais da área da psicologia em consultas online totalmente gratuitas.</p>
                </div>
              </div>
            </section>
            <section className="px-4 py-8 md:py-32 flex items-center justify-center">
              <div className="md:w-2/3 flex flex-col-reverse md:flex-row justify-between py-6">
                <div className="md:max-w-2xl">
                  <h3 className="title font-bold text-purple-400 my-4 text-xl">Cuidar da saúde mental</h3>
                  <p className="subtitle text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate voluptatem autem repellendus distinctio voluptatum molestias neque nobis amet ullam reiciendis beatae porro natus rerum, doloribus quasi quia. Facilis, sit modi.
                  </p>
                </div>
                <div className="w-full md:w-96 h-64 flex items-center justify-center text-white bg-black">video aqui</div>
              </div>
            </section>
            <section className="px-4 py-8 md:py-32 flex items-center justify-center bg-purple-400">
              <div className="md:w-2/3 flex flex-col-reverse md:flex-row justify-between py-6">
                <div className="md:max-w-2xl">
                  <h2 className="text-xl">Texto sobre o TCC</h2>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor odio, consequatur illum alias sed sapiente est tempore. Illo exercitationem provident ex reprehenderit architecto voluptatum debitis doloribus eaque, amet aliquid earum.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero dolorum ut atque quas rerum ducimus voluptates vitae impedit maiores nemo laborum tempore, magnam debitis quis aliquam maxime reprehenderit animi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor odio, consequatur illum alias sed sapiente est tempore. Illo exercitationem provident ex reprehenderit architecto voluptatum debitis doloribus eaque, amet aliquid earum.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero dolorum ut atque quas rerum ducimus voluptates vitae impedit maiores nemo laborum tempore, magnam debitis quis aliquam maxime reprehenderit animi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor odio, consequatur illum alias sed sapiente est tempore. Illo exercitationem provident ex reprehenderit architecto voluptatum debitis doloribus eaque, amet aliquid earum.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero dolorum ut atque quas rerum ducimus voluptates vitae impedit maiores nemo laborum tempore, magnam debitis quis aliquam maxime reprehenderit animi!
                  </p>
                </div>
              </div>
            </section>
            <section className="min-h-screen px-4 flex items-center justify-center">
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