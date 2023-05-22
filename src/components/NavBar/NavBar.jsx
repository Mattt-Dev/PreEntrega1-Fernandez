import './navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo.png"
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ul className="nav-menu">
                <NavLink to='/'>
                    <div className='logoBrand'>
                        <a href=""><img src={logo} className='logo' /></a>
                        <h1 className="brand">G-Byte</h1>
                    </div>
                </NavLink>
                <li className=''><NavLink to="/categoria/Motherboards">Motherboards</NavLink></li>
                <li className=''><NavLink to="/categoria/Procesadores">Procesadores</NavLink></li>
                <li className=''><NavLink to="/categoria/Placas_de_Video">Placas de Video</NavLink></li>
                <CartWidget />
            </ul>
            <hr />
        </nav>
    )
}

export default NavBar