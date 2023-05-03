import './navbar.css'
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav>
            <h1 className="text-center font-bold text-3xl">G-Byte</h1>
            <ul className="flex place-content-evenly max-w-4xl p-2 mx-auto mt-8">
                <li className='font-bold text-red-700'><button>Motherboards</button></li>
                <li className='font-bold text-red-700'><button>Procesadores</button></li>
                <li className='font-bold text-red-700'><button>Placas de Video</button></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar