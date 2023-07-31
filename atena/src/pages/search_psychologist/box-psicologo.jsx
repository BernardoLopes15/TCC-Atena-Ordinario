import imgstar from "../../assets/star.png";

const BoxPsicologo = ( { nome }) =>{
    return(
        <>
            <div class="py-4 px-8 mt-8 flex flex-wrap justify-center rounded-lg border-black bg-white">
                <div class="w-20 h-20 bg-purple-500 rounded-full"></div>
                <div class="flex justify-around flex-col">
                    <div class="flex flex-col md:flex-row">
                        <h2 class="ml-8 text-lg md:border-b-4 border-purple-400">{nome}</h2>
                        <h3 class="ml-8 md:ml-16">19 Anos</h3>
                        <h3 class="ml-8 md:ml-16">Psicologo</h3>
                        <h3 class="ml-8 md:ml-16">Tiradentes</h3>
                    </div>
                    <div class="flex">
                        <img class="w-6 h-6 ml-8" src={imgstar} alt="star" />
                        <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                        <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                        <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                        <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxPsicologo;