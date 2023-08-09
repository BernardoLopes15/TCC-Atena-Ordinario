import imgstar from "../../assets/star.png";

const BoxPsicologo = ( { nome }) =>{
    return(
        <>
            <div class="py-4 px-8 mt-8 flex rounded-lg border-black bg-white">
                <div class="w-20 h-20 bg-purple-500 rounded-full"></div>
                <div class="flex justify-around flex-col grow">
                    <div class="flex flex-col md:flex-row justify-between">
                        <h2 class="ml-8 text-lg md:border-b-4 border-purple-400">{nome}</h2>
                        <div class="flex flex-col md:flex-row">
                            <h3 class="ml-8 md:ml-16">19 Anos</h3>
                            <h3 class="ml-8 md:ml-16">Psicologo</h3>
                            <h3 class="ml-8 md:ml-16 w-32 overflow-hidden whitespace-nowrap text-ellipsis">Tiradentes</h3>
                        </div>
                    </div>
                    <div class="flex justify-between flex-col md:flex-row">
                        <div class="flex">
                            <img class="w-6 h-6 ml-8" src={imgstar} alt="star" />
                            <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                            <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                            <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                            <img class="w-6 h-6 ml-2" src={imgstar} alt="star" />
                        </div>
                        <div>
                            <sub class="ml-8">Ativo desde 00/00/0000</sub>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxPsicologo;