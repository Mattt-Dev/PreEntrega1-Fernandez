import Item from "../Item/Item";

export default function ItemList({ productos }){
    return (
        <div>
            {productos.map((itemInArray) => (
                <Item key={itemInArray.id} {...itemInArray} />
            ))}
        </div>
    )
}