import HomeItems from "../../components/Home-items";
import NavBar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import NotFound from "../notFound";

const Home = () =>{
    if(JSON.parse(sessionStorage.getItem("token")).nivelAcesso = "biscoito"){
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
    else{
        <>
            <NavBar />
            <main>
                <article>
                    <NotFound/>
                </article>
            </main>
            <Rodape />
        </>
    }
}

export default Home;