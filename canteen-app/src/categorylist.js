import fruits from './componenet/image/fruits.webp';
import snacks from './fruits/pop.jpg';
import vegetables from './componenet/image/vegtables.jpg';
import grocery from "./componenet/image/grocery.jpg"
import Categoryitems from './categoryitems';
import "./categorylist.css";
import Topdeals from './topdealsholder';
function Categorylist() {
    const categorylist =[
        {
            id:1,
            name: "fruits",
           
            image: fruits
          },
          {
            id:2,
            name: "vegetables",
          
            image: vegetables
          },
            {
                id:3,
                name: "snacks",
              
                image: snacks
              },
              {
                id:4,
                name:"grocery",
               
                image:grocery
              }

    ]; 
    return(
      <div className='category'>
        <div className='ccontainer'>
          <h2>Enjoy your shopping</h2>
          <div className='categoryWrapper'>
    
    {
        categorylist.map((items)=>{

return (<Categoryitems key={items.id} id={items.id} image={items.image} name={items.name} link={items.link}></Categoryitems>);
})
    }
</div>
<Topdeals/></div>
</div>)
};
export default Categorylist;