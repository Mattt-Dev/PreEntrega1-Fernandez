import cart from "./assets/cart.png"
import  "./CartWidget.css"

function CartWidget() {
    return (
        <div className="carrito">
            <img src={cart} className="carritoImagen"/>
            <span className="cantidad">0</span>
        </div>
    )
}

export default CartWidget