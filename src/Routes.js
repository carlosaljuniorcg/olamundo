<<<<<<< HEAD
import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> parent of 0dd03ca (Update 21012023)
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />  

      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="posts/:id" element={<Post />} />
=======
>>>>>>> parent of 3107a7f (Update 23012023)
=======
>>>>>>> parent of 3107a7f (Update 23012023)
        </Route>
        
        <Route path="*" element={<NaoEncontrada />} />
=======
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div><h1>Página não encontrada.</h1></div>}/> 
>>>>>>> parent of 0dd03ca (Update 21012023)
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
