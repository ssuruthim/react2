
    import "./product.css";
    import { useParams } from "react-router-dom";
    import { useState, useEffect } from "react";
    import  Productholder from "./productholder.js";
    
    function Fruitslist() {
        const [fruitsList,setFruitslist]=useState([]);
     const params = useParams()
        useEffect(() => {
            fetch('https://6315b80b5b85ba9b11e598f8.mockapi.io/'+params.category.toLowerCase()).then((response) => {
                // console.log(response.json());
                if (response.ok) {
                    return response.json()
                }
                return false
            })
                .then((data) => {
                    data.forEach((item)=>
                    {
item.finalprice = parseInt(item.price - ((item.offer/100)*item.price))
                    })
                    setFruitslist(data)
                })
    
        }, []);
   const lowhandler =()=>{
    alert("ok")
        let x = fruitsList.sort((a, b) => {
            return a.finalprice - b.finalprice
        
        })
        setFruitslist([...x]);
        console.log(x);
    }
    const highhandler =()=>{
        alert("ok")
            let x = fruitsList.sort((a, b) => {
                return b.finalprice - a.finalprice
            
            })
            setFruitslist([...x]);
            console.log(x);
        }
        return (<>
            <div className="fruits">
                <div className="fcontainer">
                  <span> <button onClick={lowhandler}>
                        LowToHigh
                    </button>
                    <button onClick={highhandler}>
                        HighToLow
                    </button></span> 
                    <div className="fruitsWrapper">
                        {
                            fruitsList.map((items)=>{
                                return <Productholder key={items.id} items={items} name={items.name} image={items.image} price={items.price} offer={items.offer} qty={items.qty}></Productholder>
                            })
                        }
                    </div>
                </div>
            </div>
        </>)
    };
    export default Fruitslist;