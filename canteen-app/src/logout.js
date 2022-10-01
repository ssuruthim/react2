import { useDispatch } from "react-redux";
import { logout } from "./userslice";



function Logout (){

const  dispatch = useDispatch();
const handlelogout = (e) => {
   
    dispatch (logout());

};
    return(
        <div>
            Welcome 
            <button className="logout" onClick={(e)=>
                 handlelogout((e))}>Logout</button>
        </div>
    )
}
export default Logout;