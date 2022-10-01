import { useEffect, useState } from "react";

import "./topdealslist.css";
import Productholder from"./fruits/productholder";


function Topdeals() {
    const [deals, setDeals] = useState([]);
    useEffect(() => {
        setDeals([]);
        fetch('https://6315b80b5b85ba9b11e598f8.mockapi.io/fruits').then((response) => {
            // console.log(response.json());
            if (response.ok) {
                return response.json()
            }
            return false
        })
            .then((data) => {
                let sorted = data.sort((a, b) => {
                    return b.offer - a.offer
                })
                let topDeal = sorted[0]
                setDeals((prev) => {
                    return [...prev, topDeal]
                })
                console.log(topDeal);
            })
            .then(() => {
                fetch("https://6315b80b5b85ba9b11e598f8.mockapi.io/vegetables").then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    return false
                }).then((data) => {
                    let sorted = data.sort((a, b) => {
                        return b.offer - a.offer
                    })
                    let topDeal = sorted[0]
                    setDeals((prev) => {
                        return [...prev, topDeal]
                    })
                    console.log(topDeal);
                })
            }).then(()=>
            {
                fetch("https://6315b80b5b85ba9b11e598f8.mockapi.io/snacks").then((response)=>{
                    if(response.ok){
                        return response.json()
                    }
                    return false
                }).then((data)=>{
                    let sorted = data.sort((a,b)=>{
                        return b.offer-a.offer
                    })
                    let topDeal = sorted[0]
                    setDeals((prev)=>{
                        return[...prev,topDeal]
                    })
                    console.log(topDeal);
                })
            }).then(()=>
            {
                fetch("https://6315b80b5b85ba9b11e598f8.mockapi.io/grocery").then((response)=>{
                    if(response.ok){
                        return response.json()
                    }
                    return false
                }).then((data)=>{
                    let sorted = data.sort((a,b)=>{
                        return b.offer-a.offer
                    })
                    let topDeal = sorted[0]
                    setDeals((prev)=>{
                        return[...prev,topDeal]
                    })
                    console.log(topDeal);
                })
            })
            

    }, []);
    console.log(deals);

    return (
        <>
            <div className="fruits">
                <div className="fcontainer">
                    <div className="fruitsWrapper">
                        {
                            deals.map((items)=>{
                                return <Productholder key={Math.random()} items={items} name={items.name} image={items.image} price={items.price} offer={items.offer} qty={items.qty}></Productholder>
                                
                                // return <Productholder key={items.id} items={items} name={items.name} image={items.image} price={items.price} offer={items.offer} qty={items.qty}></Productholder>
                            })
                        }
                    </div>
                </div>
            </div>
        </>)
}

export default Topdeals

