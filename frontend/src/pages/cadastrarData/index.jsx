import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MainUrl from "../../connection config/url";

const CadastroData = () =>{
    const [dia, setDia] = useState("0");
    const [hrComeco, setHrComeco] = useState("10:42");
    const [hrFim, setHrFim] = useState("20:53");
    const [indexEditar, setIndexEditar] = useState();
    const [executouEfeito, setExecutouEfeito] = useState(false);

    let calendario = useRef();
    const [modo, setModo] = useState("Adicionar");

    const [consulta, setConsulta] = useState(
        [
            {
                dia: "0",
                dtInicio: "14:12",
                dtTermino: "14:12"
            }
        ]
    );

    const buscarDatas = () =>{
        axios.post(MainUrl + "buscarHorario.php", sessionStorage.getItem("token"))
        .then((e) => setConsulta(e.data?.response));
    }

    useEffect(() => {
        if (executouEfeito) {
            buscarDatas();
        } else{
            setExecutouEfeito(true);
        }
    }, [executouEfeito]);

    const adicionarData = () => {
        if(modo === "Adicionar"){
            if(consulta){
                setConsulta((prevState) => [...prevState, {dia: dia,dtInicio: hrComeco,dtTermino: hrFim}]);
            } else{
                setConsulta([{dia: dia,dtInicio: hrComeco,dtTermino: hrFim}]);
            }
            return;
        }

        let copiaArray = [...consulta];
        copiaArray[indexEditar].dia = dia;
        copiaArray[indexEditar].dtInicio = hrComeco;
        copiaArray[indexEditar].dtTermino = hrFim;
        setConsulta(copiaArray);
        setModo("Adicionar");
    };

    const editarData = (index) => {
        setIndexEditar(index);
        setHrComeco(consulta[index]?.dtInicio);
        setHrFim(consulta[index]?.dtTermino);
        setDia(consulta[index]?.dia);
        setModo("editar");
    };

    const confirmarAlteracao = () =>{
        let cd_psicologo = JSON.parse(sessionStorage.getItem("token"));
        axios.post(MainUrl + "cadastrarHorario.php", JSON.stringify({ cd_psicologo: cd_psicologo.id, consulta: consulta }))
        .then((e) => {
            console.log(e);
            calendario.current.click();
        });
    }

    const apagarData = (index) => {
        let novaData = [...consulta];
        novaData.splice(index, 1);
        setConsulta(novaData);
    };

    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="w-full my-16 md:w-8/12 lg:w-6/12 md:p-12 p-4 border-box rounded-lg bg-white">
                        <div className="mt-2">
                            <Link to='/calendario'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>
                            </Link>
                            <div className="mt-8">
                                <h2 className="text-3xl">Cadastrar Datas e Horarios</h2>
                                <p>As datas listadas abaixo são os horários nos quais podem ser marcadas consultas, de acordo com a preferência do usuário.</p>
                                <div className={`${modo == "editar" && "border bg-yellow-200"} my-6 flex justify-between`}>
                                    <div>
                                        <h4 className="text-lg text-purple-700">Dia da Semana</h4>
                                        <select value={dia} onChange={(e)=> setDia(e.target.value)}>
                                            <option value="0">domingo</option>
                                            <option value="1">segunda</option>
                                            <option value="2">terça</option>
                                            <option value="3">quarta</option>
                                            <option value="4">quinta</option>
                                            <option value="5">sexta</option>
                                            <option value="6">sábado</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-purple-700">Hora de Inicio</h4>
                                        <input type="time" value={hrComeco} onChange={(e)=>setHrComeco(e.target.value)} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-purple-700">Hora de Término</h4>
                                        <input type="time" value={hrFim} onChange={(e)=>setHrFim(e.target.value)} />
                                    </div>
                                </div>
                                <button className={`${modo == "editar" && "bg-yellow-400 rounded-2xl px-4 py-2"}`} onClick={adicionarData}>{modo == "editar" ? "Confirmar Alteração" : "Adicionar"}</button>
                                {modo == "editar" ? <button className="rounded-2xl px-4 py-2" onClick={() => setModo("Adicionar")}>Cancelar</button> : ""}
                                <div className="mt-12 border grid grid-cols-5">
                                    <div className="px-4 border-box my-2">Dia</div>
                                    <div className="my-2">Inicio</div>
                                    <div className="my-2">Termino</div>
                                    <div className="my-2"></div>
                                    <div className="my-2"></div>
                                </div>
                                <div className="border grid grid-cols-5">
                                    {
                                        consulta &&
                                        consulta
                                        //.slice().sort((a, b) => a.dia - b.dia)
                                        .map((e, index)=>(
                                        <>
                                            <div key={e.dtInicio} className="px-4 border-box my-2">{
                                                (()=>{
                                                    switch(e.dia){
                                                        case "0":
                                                            return "domingo";
                                                        case "1":
                                                            return "segunda";
                                                        case "2":
                                                            return "terça";
                                                        case "3":
                                                            return "quarta";
                                                        case "4":
                                                            return "quinta";
                                                        case "5":
                                                            return "sexta";
                                                        case "6":
                                                            return "sábado";
                                                        default:
                                                            return "inválido";
                                                    }
                                                })()
                                            }</div>
                                            <div className="my-2">{e.dtInicio.substring(0, 5)}</div>
                                            <div className="my-2">{e.dtTermino.substring(0, 5)}</div>
                                            <button className="bg-yellow-400" onClick={() => editarData(index)}>Editar</button>
                                            <button className="bg-red-400" onClick={() => apagarData(index)}>Apagar</button>
                                        </>
                                    ))}
                                </div>
                                <button className="w-full mt-12 py-3 rounded-3xl bg-purple-400" onClick={confirmarAlteracao}>Confirmar</button>
                                <Link to="/calendario" ref={calendario}></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroData;