import Item from "../Item/Item";
import Flex from "../Flex/Flex";

export default function ItemList({ productos }){
    return (
        <div>
            <Flex>
            {productos.map((itemInArray) => (
          <Item key={itemInArray.id} {...itemInArray} />
            ))}
      </Flex>
        </div>
    )
}