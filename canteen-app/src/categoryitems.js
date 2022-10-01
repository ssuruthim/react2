import "./categoryitems.css";

import { useNavigate } from "react-router-dom";

function Categoryitems(props) {
    const categoryTo= useNavigate();
    const categoryHandler=()=>{
        categoryTo("/items/"+props.name);
    }

return (<>
        
    
        <div className="categoryItems" onClick={categoryHandler}>
            <div><img src={props.image} ></img></div>
            <div><p>{props.name}</p></div>
        </div>
       
        </>)
}
export default Categoryitems;

