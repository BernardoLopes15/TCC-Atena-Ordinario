import HomeItems from "../../components/Home-items";
import NavBar from "../../components/Navbar";

const Home = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <HomeItems />
                </article>
            </main>
        </>
    )
}

export default Home;