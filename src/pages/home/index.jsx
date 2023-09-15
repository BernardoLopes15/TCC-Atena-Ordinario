import HomeItems from "../../components/Home-items";
import NavBar from "../../components/Navbar";
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