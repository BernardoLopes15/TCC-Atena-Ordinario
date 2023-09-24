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
import Consulta from "./pages/consulta";
import Teste from "./pages/testePHP";
import InspecionarPsicologo from "./pages/inspecionarPsicologo";
import AgendarConsulta from "./pages/agendarConsulta";
import CadastrarImagem from "./pages/cadastro/cliente/imagePerfil"
import CadastrarImagemPsicologo from "./pages/cadastro/psicologo/imagePerfil"
import CadastrarBioPsicologo from "./pages/cadastro/psicologo/bioPsicologo"

const App = () =>{
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Apresentacao />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/homeCliente" element={<HomeCliente />}/>
      <Route path="/homePsicologo" element={<HomePsicologo />}/>
      <Route path="/buscaPsicologo" element={<BuscarPsicologo />}/>
      <Route path="/perfilCliente" element={<PerfilCliente />}/>
      <Route path="/perfilPsicologo" element={<PerfilPsicologo />}/>
      <Route path="/cadastro" element={<CadastroCliente />}/>
      <Route path="/cadastroPsicologo" element={<CadastroPsicologo />}/>
      <Route path="/editCliente" element={<EditCadastroCliente/>}/>
      <Route path="/editPsicologo" element={<EdiiCadastroPsicologo/>}/>
      <Route path="/consultas" element={<Consulta />}/>
      <Route path="/testePHP" element={<Teste />}/>
      <Route path="/psicologo" element={<InspecionarPsicologo />} />
      <Route path="/agendarConsulta" element={<AgendarConsulta />} />
      <Route path="/cadastroImagem" element={<CadastrarImagem/>}></Route>
      <Route path="/imagemPsicologo" element={<CadastrarImagemPsicologo/>} />
      <Route path="/bioPsicologo" element={<CadastrarBioPsicologo/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;