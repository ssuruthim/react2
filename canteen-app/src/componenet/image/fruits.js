    
    import mango from"../image/mango.webp";
    import apple from"../image/apple.jpg";
    import guava from"../image/guava.jpg";
    import grapes from"../image/guava.jpg";
    import guava from"../image/guava.jpg";
    import'./fruit.css'
import FruitProping from "../fruitproping";
    function Fruits (props){
       const fruits=
       [ {
            name:"Mango",
            rate:"40rs",
            
            price:"20₹",
            image:mango
        },
        {
            name:"Apple",
            rate:"40rs",
            
            price:"20₹",
            image:apple
        },
        {
            name:"Guava",
            rate:"40rs",
            
            price:"20₹",
            image:guava
        }, {
            name:"Grapes",
            rate:"40rs",
            
            price:"20₹",
            image:grapes
        }
       
        ]

        return(
            <div className="fruitscontainer">
                {
                    fruits.map((frut)=>{
return(<FruitProping key={frut.id} name={frut.name} price={frut.price} rate={frut.rate} image={frut.image}></FruitProping> )
                    })
                }
            </div>
        )
       
    }
    export default Fruits