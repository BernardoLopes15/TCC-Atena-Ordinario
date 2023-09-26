import { useEffect, useState } from "react";
import NavBar from "../../components/NavbarPsicologo";
import Rodape from "../../components/Rodape";

const Calendario = () =>{
    const [mesEscolhido, setMesEscolhido] = useState(9);
    const [anoEscolhido, setAnoEscolhido] = useState(2023);

    const [meses, setMeses] = useState([]);
    const [dia, setDias] = useState([]);
    const [inicioMes, setInicio] = useState([]);

    let todosMeses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

    useEffect(()=>{
        const numMeses = [];

        const daysInMonth = new Date(anoEscolhido, mesEscolhido, 0).getDate();
        numMeses.push(daysInMonth);
        
        setMeses(numMeses);
    },[mesEscolhido]);

    useEffect(()=>{
        let dias = [];

        for(let i = 1; i <= meses; i++){
            dias.push(i);
        }

        setDias(dias);

        let diaEspecifico = new Date(`2023-0${mesEscolhido}-1`);
        diaEspecifico = diaEspecifico.getDay();

        let diaSemana = [];

        for(let i = 0; i < diaEspecifico; i++){
            diaSemana.push(i);
        }
        
        setInicio(diaSemana);
    },[meses]);

    const mudarMes = (mudanca) =>{
        if(mudanca === 1){
            setMesEscolhido(mesEscolhido + 1);
        } else{
            setMesEscolhido(mesEscolhido - 1);
        }

        if(mesEscolhido === 1){
            setAnoEscolhido(anoEscolhido - 1);
            setMesEscolhido(12);
        } else if(mesEscolhido === 12){
            setAnoEscolhido(anoEscolhido + 1);
            setMesEscolhido(1);
        }
    }

    return(
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center bg-purple-100">
                <div className="pt-16">
                    <div className="my-4 flex justify-around">
                        <p>{todosMeses[mesEscolhido - 1]}</p>
                        <p>{anoEscolhido}</p>
                    </div>
                    <div className="flex flex-wrap">
                        <button className="mx-6" onClick={()=>mudarMes(2)}>voltar</button>
                        <div className="grid grid-cols-7 bg-purple-500">
                            <h2 className="p-2 lg:p-4 bg-white">dom</h2>
                            <h2 className="p-2 lg:p-4 bg-white">seg</h2>
                            <h2 className="p-2 lg:p-4 bg-white">ter</h2>
                            <h2 className="p-2 lg:p-4 bg-white">qua</h2>
                            <h2 className="p-2 lg:p-4 bg-white">qui</h2>
                            <h2 className="p-2 lg:p-4 bg-white">sex</h2>
                            <h2 className="p-2 lg:p-4 bg-white">sab</h2>
                            {
                                inicioMes.map(()=>(
                                    <h2></h2>
                                ))
                            }
                            {
                                dia.map((dia)=>(
                                    <h2 className="p-4 lg:p-8 flex items-center justify-center hover:bg-purple-300 cursor-pointer text-white bg-purple-500">{dia}</h2>
                                ))
                            }
                        </div>
                        <button className="mx-6" onClick={()=>mudarMes(1)}>avancar</button>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default Calendario;