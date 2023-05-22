import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="*" element={<h4>Error 404: Pagina no encontrada.</h4>} />
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
