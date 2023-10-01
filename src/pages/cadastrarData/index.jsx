import { Link } from "react-router-dom";

const CadastroData = () =>{
    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center editCadastro">
                    <div className="md:p-12 bg-white content-editCadastro">
                    <Link to='/perfilPsicologo' className="exiit">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>
                        <div className="h-full flex items-center justify-center">
                            <form method="POST" className="form">
                                <h2 className="text-center text-xl title">Cadastrar datas e horários</h2>
                                <h2 className="text-center text-xl py-8">Selecione os dias da semana você estará disponível</h2>
                                <div className="grid grid-cols-7 grid-flow-row-dense">
                                    <div className="w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Dom</div>
                                    <div className="w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Seg</div>
                                    <div className="w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Ter</div>
                                    <div className="w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Qua</div>
                                    <div className="w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Qui</div>
                                    <div className="w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Sex</div>
                                    <div className="w-full h-20 mx-2 flex items-center justify-center cursor-pointer hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Sab</div>
                                </div>
                                <h2 className="text-center text-xl py-8">Horários disponíveis:</h2>
                                <div className="flex justify-center">
                                    <select className="my-2 px-4 py-4 rounded-lg cursor-pointer rounded-xç text-white bg-purple-400" name="" id="">
                                        <option value="">13/10/2023</option>
                                        <option value="">14/10/2023</option>
                                        <option value="">20/10/2023</option>
                                        <option value="">21/10/2023</option>
                                    </select>
                                </div>
                                <div className="flex justify-center mt-16">
                                    <Link to="/bioPsicologo"><button className="w-auto md:w-96 py-4 hover:bg-purple-700 transition rounded-xl text-white bg-purple-400">Editar</button></Link>
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
