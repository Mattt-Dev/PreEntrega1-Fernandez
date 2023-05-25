import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import productos from "../../data/productos";
import "./ItemListContainer.css";

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    })
}

function ItemListContainer() {

    let [productos, setProductos] = useState([]);
    const { categoryid } = useParams();
    
    useEffect(() => {
        getData().then((respuesta) => {
            if (categoryid) {
                const filtrarProductos = respuesta.filter((item) => item.categoria === categoryid);
                setProductos(filtrarProductos);
            } else {
                setProductos(respuesta);
            }
        });
    }, [categoryid]);

    return (
        <div className="item-list-container">
            <h1 className="itemListTitle">TECNOLOGIA GAMER</h1>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;