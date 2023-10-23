import { useState } from "react";
import { Link } from "react-router-dom";

const CadastroData = () =>{
    const dias = [
        "domingo",
        "segunda",
        "terca",
        "quarta",
        "quinta",
        "sexta",
        "sabado"
    ];

    const [dia, setDia] = useState("segunda");
    const [hrComeco, setHrComeco] = useState();
    const [hrFim, setHrFim] = useState();

    const [consulta, setConsulta] = useState();

    const mudarDia = (diaSelect) =>{
        setDia(diaSelect);
    }

    const cadastrarData = (e) =>{
        e.preventDefault();

        setConsulta(
            {
                dia: dia,
                hrComeco: hrComeco,
                hrFim: hrFim
            }    
        );
    }

    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center editCadastro">
                    <div className="md:p-12 bg-white content-editCadastro">
                        <div className="mt-2">
                            <Link to='/calendario'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                            </svg>
                            </Link>
                        </div>
                        <div className="h-full flex items-center justify-center">
                            <form method="POST" className="form">
                                <h2 className="text-center text-xl title">Cadastrar Datas e Horários</h2>
                                <h2 className="text-center text-xl py-8">Selecione os dias da semana que você estará disponível</h2>
                                <div className="grid grid-cols-7 grid-flow-row-dense">
                                    <div onClick={() => mudarDia("domingo")} className={`w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white ${dia === "domingo" && "bg-pink-500"} bg-purple-400`}>Dom</div>
                                    <div onClick={() => mudarDia("segunda")} className={`w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white ${dia === "segunda" && "bg-pink-500"} bg-purple-400 ml-3`}>Seg</div>
                                    <div onClick={() => mudarDia("terca")} className={`w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white ${dia === "terca" && "bg-pink-500"} bg-purple-400 ml-4`}>Ter</div>
                                    <div onClick={() => mudarDia("quarta")} className={`w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white ${dia === "quarta" && "bg-pink-500"} bg-purple-400 ml-5`}>Qua</div>
                                    <div onClick={() => mudarDia("quinta")} className={`w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white ${dia === "quinta" && "bg-pink-500"} bg-purple-400 ml-6`}>Qui</div>
                                    <div onClick={() => mudarDia("sexta")} className={`w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white ${dia === "sexta" && "bg-pink-500"} bg-purple-400 ml-7`}>Sex</div>
                                    <div onClick={() => mudarDia("sabado")} className={`w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white ${dia === "sabado" && "bg-pink-500"} bg-purple-400 ml-8`}>Sab</div>
                                </div>
                                <h2 className="text-center text-xl py-8">Selecione o período que estará disponível</h2>
                                <div className="flex justify-center">
                                  <label className="text-lg mr-2">Dás:</label>
                                  <input type="time" onChange={(e) => setHrComeco(e.target.value)} name="horarioInicial" className=" rounded-md border-2 border-purple-600"/>

                                  <label className="text-lg mr-2 ml-3">Até:</label>
                                  <input type="time" onChange={(e) => setHrFim(e.target.value)} name="horarioFinal" className=" rounded-md border-2 border-purple-600"/>
                                </div>
                                <div className="flex justify-center mt-16">
                                    <button onClick={cadastrarData} className="text-xl w-auto md:w-80 py-4 hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Cadastrar</button>
                                    {/*<Link to="/calendario"><button className="text-xl w-auto md:w-80 py-4 hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Cadastrar</button></Link>*/}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroData;
