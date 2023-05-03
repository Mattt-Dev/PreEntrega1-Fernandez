import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Tecnologia Gamer"}/>
    </>
  )
}

export default App
