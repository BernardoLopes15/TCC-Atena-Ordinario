import { useNavigate } from "react-router-dom";
import {
    Nav,
    NavMenu,
    NavLink,
    Div,
    Main,
    Footer
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
        *Entrar

     </Div>

     <Main id="project">

        *Projeto
     </Main>

     <Main id="about">
       *Texto sobre a equipe
     </Main>

     <Footer id="team">
       *Equipe
     </Footer>


    </>)
}

export { Home };