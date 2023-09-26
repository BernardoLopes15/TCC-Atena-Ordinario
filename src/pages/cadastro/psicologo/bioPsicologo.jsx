import { Link } from "react-router-dom";

const CadastroBioPsicologo = () =>{
    return(
        <main>
            <article>
                <div className="min-h-screen flex items-center justify-center cadastroBio">
                    <div className="md:p-12 bg-white content-cadastroBio">

                    <Link to='/imagemPsicologo' className="exiit">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#281161" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                     </svg>
                    </Link>

                        <h2 className="text-center text-xl title">Redija uma curta apresentação para que a sua paciente possa conhecer melhor você </h2>
                        
                        <form method="POST" className="form">
                         <div className="flex content-formBio">
                         
                         <textarea id="msg" name="msg" rows="4" cols="50"></textarea>

                         </div>

                         <div className="flex justify-center mt-16">
                            <Link to="/login"><button className="py-2 text-white btn">Cadastrar</button></Link>
                        </div>

                        </form>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default CadastroBioPsicologo;
