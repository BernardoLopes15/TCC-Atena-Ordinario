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

    const [consulta, setConsulta] = useState(
        [
            {
                dia: "segunda",
                dtInicio: "14:12",
                dtTermino: "14:12"
            },
            {
                dia: "segunda",
                dtInicio: "14:12",
                dtTermino: "14:12"
            },
            {
                dia: "segunda",
                dtInicio: "14:12",
                dtTermino: "14:12"
            },
            {
                dia: "segunda",
                dtInicio: "14:12",
                dtTermino: "14:12"
            },
            {
                dia: "segunda",
                dtInicio: "14:12",
                dtTermino: "14:12"
            },
            {
                dia: "segunda",
                dtInicio: "14:12",
                dtTermino: "14:12"
            }
        ]
    );

    const mudarDia = (diaSelect) => setDia(diaSelect);

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
                <div className="min-h-screen flex items-center justify-center">
                    <div className="w-full my-16 md:w-6/12 lg:w-5/12 md:p-12 rounded-lg bg-white">
                        <div className="mt-2">
                            <Link to='/calendario'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>
                            </Link>
                            <div className="mt-8">
                                <h2 className="text-3xl">Cadastrar Datas e Horarios</h2>
                                <div className=" my-6 flex justify-between">
                                    <div>
                                        <h4 className="text-lg text-purple-700">Dia da Semana</h4>
                                        <select name="">
                                            <option value="">domingo</option>
                                            <option value="">segunda</option>
                                            <option value="">terça</option>
                                            <option value="">quarta</option>
                                            <option value="">quinta</option>
                                            <option value="">sexta</option>
                                            <option value="">sabado</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-purple-700">Hora de Inicio</h4>
                                        <input type="time" name="" id="" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-purple-700">Hora de Término</h4>
                                        <input type="time" name="" id="" />
                                    </div>
                                </div>
                                <button>Adicionar</button>
                                <div className="mt-12 border grid grid-cols-5">
                                    <div className="px-4 border-box my-2">e.dia</div>
                                    <div className="my-2">e.dtInicio</div>
                                    <div className="my-2">e.dtTermino</div>
                                    <div className="my-2"></div>
                                    <div className="my-2"></div>
                                </div>
                                <div className="border grid grid-cols-5">
                                    {consulta.map((e)=>(
                                        <>
                                            <div className="px-4 border-box my-2">{e.dia}</div>
                                            <div className="my-2">{e.dtInicio}</div>
                                            <div className="my-2">{e.dtTermino}</div>
                                            <button className="bg-yellow-400">Editar</button>
                                            <button className="bg-red-400">Apagar</button>
                                        </>
                                    ))}
                                </div>
                                <button className="w-full mt-12 py-3 rounded-3xl bg-purple-400">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroData;