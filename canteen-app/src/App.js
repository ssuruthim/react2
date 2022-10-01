import './App.css';
import Header from './componenet/Header';
import Categorylist from './categorylist';
import Topdeals from './topdealsholder';
import Cartholder from './componenet/addcarts/Cartholder';
// import Topdeals from './components/topDeals/Topdeals';
import Product from './fruits/product';
import React,{useEffect, useState } from 'react';
import Login from './login';
import Logout from "./logout"
import { Routes, Route, Link} from "react-router-dom";
import AddContext from "./context";
import { useSelector } from 'react-redux';
import { selectUser } from './userslice';
  function App() {
    const[cart,setCart]=useState([]);
const[increasecart , setIncreasecart] = useState(0);
    const addCart=(item)=>{

    setCart((preitems)=>{
        return[item,...preitems]
      })
    }
    const user= useSelector(selectUser);
    console.log(user.isLogin);

  return (
    <div className="App">
     
   
      <AddContext.Provider value={{addCart,cart , increasecart}}>
      <Header></Header>
      {/* {user ? <Logout/> :<Login/>} */}
      <Routes>
      
        <Route index element={<Categorylist></Categorylist>}></Route>
        <Route path= "login" element={<Login/>}></Route>
        <Route path='addcart' element={user.isLogin ? <Cartholder/> : <Login/>}></Route>
        <Route path='/items/:category' element={<Product/>}></Route>
      </Routes>
      
     
      {/* <Topdeals></Topdeals> */}
      </AddContext.Provider>
      
    </div>
  );
}
export default App;