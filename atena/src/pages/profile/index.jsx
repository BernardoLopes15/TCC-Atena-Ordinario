import NavBar from "../../components/Navbar";

const Perfil = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div class="min-h-screen md:flex items-center justify-center bg-white md:bg-purple-100">
                        <div class="pt-16 md:px-4">
                            <div class="h-64 bg-purple-800"></div>
                            <div class="bg-white px-4">
                                <div class="h-0 flex items-center mb-16">
                                    <div class="w-32 h-32 flex-0 rounded-full bg-purple-200"></div>
                                </div>
                                <h2 class="text-xl md:pr-96">Bernado lopez da cruz</h2>
                                <div class="py-4">
                                    <p class="text-lg">Whats app</p>
                                    <p class="text-lg">Whats app</p>
                                    <p class="text-lg">Whats app</p>
                                    <p class="text-lg">Whats app</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Perfil;