import { useState } from "react";
import "./ItemCount.css";
import Flex from "../Flex/Flex";

export default function ItemCount({ stock }) {
    let [count, setCount] = useState(0);

    function handleAdd() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <Flex>
            <div className="itemCount-container">
                <small>Agregar al carrito</small>
                <div className="itemCount-controlador">
                    <button onClick={handleSubstract} className="btn-quitar">-</button>
                    <p>{count}</p>
                    <button onClick={handleAdd} className="btn-agregar">+</button>
                </div>
                <div>
                    <button className="btn-add">Agregar</button>
                </div>
            </div>
        </Flex>
    )
}