import { useNavigate } from "react-router-dom";
import {
    Nav, NavMenu, NavLink, Div, Main, Footer, Button, CardEntrar, Logo, Subtitle, Title, CardProject, CardAbout, TextContent, Section
} from './style';

const Home = () => {
    const navigate = useNavigate();

    return (<>
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

     <Div>
      <CardEntrar>

      <Logo src="../imgs/Logo.png"/>
      <Subtitle className="subtitle">Você é forte e será capaz de <br/> lutar e conquistar o seu espaço.</Subtitle>
        <Button>Entrar</Button> 
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


    </>)
}

export { Home };