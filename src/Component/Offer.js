import React from 'react';
import productsale from '../Images/product-sale.png';
const Offer=()=>{

let date=[{number:29,name:"days"},{number:"07",name:"Hours"},{number:15,name:"minutes"},{number:"00",name:"Second"}]

return(

<div className='offer'>
    

<div className='first' >
<h2>
    Clothings Hot <br/>
    <span>Shoe Collection</span><br/>
    Accessories
    </h2>
</div>
<div className='second'>
<img src={productsale} alt="product"/>
</div>

<div className='third'>
<span>DEAL OF THE WEEK</span>
<h2>Multi-pocket Chest Bag Black</h2>
<div className='time'>
 {date.map((val)=>{
    return <div>   
    <span>{val.number}</span>
        <p>{val.name}</p>
    </div>
 })}   


<a href="#">shop now</a>
</div>

</div>




</div>
);
}
export default Offer;