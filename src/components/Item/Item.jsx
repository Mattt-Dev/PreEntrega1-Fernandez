import "./Item.css";
import { Link } from "react-router-dom";

function CardDescription({ precio, categoria }) {
    return (
        <div className="item-card_detail">
            <h3>$ {precio}</h3>
            <small>{categoria}</small>
        </div>
    );
}

function hayStock(stock) {
    if (stock > 0) {
        return (
         <p className="en-stock">En Stock</p>
     )
    } else {
        return (
            <p className="sin-stock">Sin Stock</p>
        )
    }
}

export default function Item({ nombre, imagen, precio, categoria, id, stock }) {
    return (
        <Link to={`/product/${id}}`}>
            <div className="item-card">
                <div className="item-card_header">
                    <h2>{nombre}</h2>
                    <small>{categoria}</small>
                </div>
                <div className="item-card_img">
                    <img src={imagen} alt={nombre} />
                </div>
                <CardDescription precio={precio} />
                <div className="item-card_stock">{hayStock(stock)}</div>
            </div>
        </Link>
    )
}