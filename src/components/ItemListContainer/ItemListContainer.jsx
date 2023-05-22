import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import productos from "../../data/productos";

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
                const filtrarProductos = respuesta.filter((item) => item.category === categoryid);
                setProductos(filtrarProductos);
            } else {
                setProductos(respuesta);
            }
        });
    }, [categoryid]);

    return <ItemList productos={productos} />
}

export default ItemListContainer;