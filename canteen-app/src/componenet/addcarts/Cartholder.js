import { useContext } from "react";
import AddContext from "../../context";
import CartItems from "./Cartltems";
import"./Cartholder.css"
function Cartholder() {
    const cartHolder = useContext(AddContext); 
    return(<><div className="cartHolder">
        <div className="cortContainer">
            <div className="cartWrapper">
            {
                cartHolder.cart.map((items)=>{
                    return <CartItems  key={items.id} name={items.name} image={items.image} price={items.price} offer={items.offer} qty={items.qty}/>
                })
            }
            </div>
        </div>
    </div>

    </>)
}
export default Cartholder;