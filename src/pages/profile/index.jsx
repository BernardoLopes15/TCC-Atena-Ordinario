import NavBar from "../../components/Navbar";

const Perfil = () =>{
    return(
        <>
            <NavBar />
            <main>
                <article>
                    <div class="min-h-screen lg:flex items-center justify-center bg-white lg:bg-purple-100">
                        <div class="lg:w-6/12 pt-16 lg:px-4">
                            <div class="h-64 lg:rounded-t-lg bg-purple-800"></div>
                            <div class="h-96 lg:rounded-b-lg bg-white px-4">
                                <div class="h-0 flex items-center mb-16">
                                    <div class="w-32 h-32 flex-0 rounded-full bg-purple-200"></div>
                                </div>
                                <h2 class="text-xl pt-4">Bernado lopez da cruz</h2>
                                <div class="py-4 flex justify-between">
                                    <div>
                                        <p>Cpf</p>
                                        <p>Data Nascimento</p>
                                        <p>Bio</p>
                                    </div>
                                    <div class="text-right">
                                        <p>Gmail</p>
                                        <p>Telefone</p>
                                    </div>
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