import React from 'react';
import { FaStar } from "react-icons/fa6";
import product1 from '../Images/product-1.jpg';
import product2 from '../Images/product-2.jpg';
import product3 from '../Images/product-3.jpg';
import product4 from '../Images/product-4.jpg';
import product5 from '../Images/product-5.jpg';
import product6 from '../Images/product-6.jpg';
import product7 from '../Images/product-7.jpg';
import product8 from '../Images/product-8.jpg';
const product=()=>{

    const products=[{image:product1,productname:"shoe",price:67.24},
    {image:product2,productname:"Piqué Biker Jacket",price:67.24},
    {image:product3,productname:"shoe",price:43.48},
    {image:product4,productname:"Diagonal Textured Cap",price:60.09},
    {image:product5,productname:"Lether Backpack",price:31.37},
    {image:product6,productname:"Ankle Boots",price:98.49},
    {image:product7,productname:"bag",price:49.66},
    {image:product8,productname:"T-shirt Contrast Pocket",price:26.28}];
let list=["Best Sellers","New Arrivals","Hot Sales"];

    return(
          <div>

          <div className='productname'>
            <ul>
                
           {list.map((val)=>{
            return <li><a herf="#">{val}</a></li>
           })}
            </ul>

         </div>

         
         <div className='product'>
             {products.map((val,index)=>{
               return<div className="card" key={index}>
               <img src={val.image} alt="products"/>
               <h6 >{val.productname}</h6>
              <p > <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
               <p style={{fontWeight:"bold"}}>&#x24;{val.price}</p>
               </div>
             })
            }                  
         </div>  
         </div>
    );

}
export default product;