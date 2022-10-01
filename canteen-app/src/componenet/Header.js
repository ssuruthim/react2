import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from 'react-redux';
import { selectUser } from '../userslice';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddContext from "../context"
import {logout} from '../userslice'
import "./Header.css";

function Header() {
    const cartLength = useContext(AddContext).cart;
    const [navBar, setNavbar] = useState("navItems")
    const addCartto = useNavigate()
    const prop = useSelector(selectUser);
    const dispatch = useDispatch();
    const handlelogout = (e) => {

        dispatch(logout());
    }


        const barHandler = () => {
            if (navBar == "navItems") {
                setNavbar("navItems1")
            }
            else {
                setNavbar("navItems")
            }
        }
        const cartHandler = () => {
            addCartto("/addcart")

        }
        return (<>
            <header>
                <div className="container">
                    <div className="headerWrapper">
                        <div className="logo">

                            <p>The</p><span>Freshmarket</span>
                        </div>

                        <div className={navBar}><div className="searchBox">
                            <input type='search' />
                            <i className="fa fa-search" aria-hidden="true"></i>

                        </div>
                            <div>

                                <Link to="/">Home</Link>
                                {prop.isLogin ? <button className="logout" onClick={(e)=>
                 handlelogout((e))}>Logout</button> : <Link>login</Link>}
                            </div>
                            <span>
                                <i className="fa fa-cart-plus" onClick={cartHandler}></i>
                                <span>{cartLength.length}</span>
                            </span>

                        </div>
                        <div className="bars" onClick={barHandler}>
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>

        </>)
    };
    export default Header;
