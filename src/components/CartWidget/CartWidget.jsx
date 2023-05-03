import cart from "./assets/cart.png"

function CartWidget() {
    return (
        <div className="flex place-content-evenly w-20">
            <img src={cart} alt="" className="w-8 " />
            <span className="font-bold">0</span>
        </div>
    )
}

export default CartWidget