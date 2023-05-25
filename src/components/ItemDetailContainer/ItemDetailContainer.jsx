import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../data/productos.js";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function getData(idURL) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const requestedData = productos.find(
                (producto) => producto.id === Number(idURL));
                resolve(requestedData);
        }, 1000);
    })
}

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const id  = useParams().id;

    useEffect(() => {
        getData(id).then((respuesta) => {
            setProducto(respuesta);
        })
    }, [id]);

    return (
        <div className="producto-detail_main">
            <div className="producto-detail_img">
                <img src={producto.imagen} alt={producto.title} />
            </div>
            <div className="producto-detail_info">
                <h2>{producto.nombre}</h2>
                <small>{producto.detalle}</small>
                <small>{producto.detalle1}</small>
                <small>{producto.detalle2}</small>
                <h3>${producto.precio}</h3>
            <ItemCount stock={producto.stock} />
            </div>
        </div>
    )
}
