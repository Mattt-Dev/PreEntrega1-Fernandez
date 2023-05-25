import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/producto/:id' element={<ItemDetailContainer />}></Route>
        <Route path="/categoria/:categoryid" element={<ItemListContainer />} />
        <Route path="*" element={<h4>Error 404: Pagina no encontrada.</h4>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
