import { BrowserRouter, Routes, Route } from "react-router-dom";

import Apresentacao from "./pages/presentation/index";
import Login from "./pages/login/index";
import HomeCliente from "./pages/homeCliente/index";
import HomePsicologo from "./pages/homePsicologo/index";	
import BuscarPsicologo from "./pages/search_psychologist/index";
import PerfilCliente from "./pages/profileCliente/index";
import PerfilPsicologo from "./pages/profilePsicologo/index"
import CadastroCliente from "./pages/cadastro/cliente";
import CadastroPsicologo from "./pages/cadastro/psicologo";
import EditCadastroCliente from "./pages/editPerfilCliente/index";
import EdiiCadastroPsicologo from "./pages/editPerfilPsicologo/index";
import Consulta from "./pages/consulta/cliente";
import InspecionarPsicologo from "./pages/inspecionarPsicologo";
import AgendarConsulta from "./pages/agendarConsulta";
import CadastrarImagem from "./pages/cadastro/cliente/imagePerfil";
import CadastrarImagemPsicologo from "./pages/cadastro/psicologo/imagePerfil";
import CadastrarBioPsicologo from "./pages/cadastro/psicologo/bioPsicologo";
import EditBio from "./pages/editPerfilPsicologo/editBio";
import Calendario from "./pages/calendario";
import SolicitacaoConsulta from "./pages/solicitacaoConsulta";
import ConsultaPsicologo from "./pages/consulta/psicologo";
import CadastroData from "./pages/cadastrarData";

const App = () =>{
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Apresentacao />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cadastro" element={<CadastroCliente />}/>
      <Route path="/cadastroPsicologo" element={<CadastroPsicologo />}/>

      { /* Tela Cliente */}
      <Route path="/homeCliente" element={<HomeCliente />}/>
      <Route path="/perfilCliente" element={<PerfilCliente />}/>
      <Route path="/editCliente" element={<EditCadastroCliente/>}/>
      <Route path="/consultas" element={<Consulta />}/>
      <Route path="/buscaPsicologo" element={<BuscarPsicologo />}/>
      <Route path="/psicologo" element={<InspecionarPsicologo />} />
      <Route path="/agendarConsulta" element={<AgendarConsulta />} />
      <Route path="/cadastroImagem" element={<CadastrarImagem/>}></Route>
      
      { /* Tela Psicologo */}
      <Route path="/homePsicologo" element={<HomePsicologo />}/>
      <Route path="/perfilPsicologo" element={<PerfilPsicologo />}/>
      <Route path="/editPsicologo" element={<EdiiCadastroPsicologo/>}/>
      <Route path="/imagemPsicologo" element={<CadastrarImagemPsicologo/>} />
      <Route path="/editBio" element={<EditBio/>}/>
      <Route path="/calendario" element={<Calendario/>}/>
      <Route path="/bioPsicologo" element={<CadastrarBioPsicologo/>} />
      <Route path="/consultaPsicologo" element={<ConsultaPsicologo/>} />
      <Route path="/solicitacao" element={<SolicitacaoConsulta/>} />
      <Route path="/data" element={<CadastroData/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;