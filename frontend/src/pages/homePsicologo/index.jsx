import HomeItems from "../../components/HomePsicologo";
import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";

const Home = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <HomeItems />
                </article>
            </main>
            <Rodape />
        </>
    )
}

export default Home;