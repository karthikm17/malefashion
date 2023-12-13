import React, { Component } from 'react';
import footerlogo from '../Images/footer-logo.png';
import  payment from'../Images/payment.png';
class footer extends Component{

    render(){
    let list1=["Clothing Store","Trending Shoes","Accessories","Sale"];
    let list2=["Contact Us","Payment Methods","Delivary","Return & Exchanges"]
    return <div>


          <div className='footer'>
         <div className='rows'>
          <div className='footer1'>
             <img src={footerlogo} alt="footer"/>
             <p>The customer is at the heart of our unique business model, which includes design.</p>
             <img src={payment} alt="payment"/>
          </div>
           
           <div className='footer2'>
            <h6>SHOPPING</h6>
            <ul>{list1.map((value)=>{
               return <li><a href="#">{value}</a></li>
            })}
                
            </ul>
           </div>
           <div className='footer3'>
            <h6>SHOPPING</h6>
            <ul>{list2.map((val)=>{
               return <li><a href="#">{val}</a></li>
            })}
            </ul>
           </div>

         <div className='footer4'>
            <h6>NEWLETTER</h6>
            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
            <input type="text"/>
         </div></div>
        
         <div className='foot'>
            <p>Copyright © 20232020 All rights reserved | This template is made with  by Colorlib</p>
         </div>
         </div>
    </div>
    
    
    }}


   export default footer; 