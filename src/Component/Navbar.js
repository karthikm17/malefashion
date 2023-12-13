import logo from '../Images/logo.png';
import { FaBars } from "react-icons/fa6";
import { FaHeart} from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaSistrix } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import React from 'react';
const navbar=()=>{


let navname=["USD","EUR","USD"];
let navname2=["About Us","Shop Details","Shopping Cart","Check Out","Blog Detail"];
let navname3=["Blog","Contacts"];
let navicon=[<FaSistrix/>,<FaHeart/>,<FaCartShopping/>];
return(
<div>


<div className='mobilenav'>
  <div >
  <a className='firsticon'><FaTimes/></a>
  </div>
<div className='mobilelist'>
<ul>
<li><a href="#">SIGN IN</a></li>
<li><a href="#"> FAQS</a></li>
<li className='mobilelist1'><a href="#">  USD </a>
<ul className='mobilelist2'>
{navname.map((val)=>{
  return <li><a href="#">{val}</a></li>
})}
</ul>
</li>
</ul>
</div>
<div className='mobileicon'>
 
{navicon.map((val)=>{
  return  <a href>{val}</a>
})}
  
</div>

<div className='mobilemenu'>
<ul>
 <li className='active'><a href="#" >Home</a></li>   
 <li><a href="#">Shop</a></li>
 <li className="mobilepages"><a href="#">Pages</a>
 <ul className='mobileAbout'>

{navname2.map((val)=>{
  return  <li><a href="#">{val}</a></li>
})} 
 </ul>
 </li>

{navname3.map((val)=>{
  return  <li><a href="#">{val}</a></li>
  })}
</ul>
<div className='mobileh'>
  <h5>Free shipping, 30-day return or refund guarantee.</h5>
</div>
</div>


</div>







<div className='nav'>
<div>
  <h5>Free shipping, 30-day return or refund guarantee.</h5>
</div>
<div className='list'>
<ul>
<li><a href="#">SIGN IN</a></li>
<li><a href="#"> FAQS</a></li>
<li className='list1'><a href="#">  USD </a>
<ul className='list2'>

{navname.map((val)=>{
  return <li><a href="#">{val}</a></li>
})}
</ul>
</li>
</ul>
</div>
</div>
<div className='navbar'>
<div className='logo'>
<img src={logo} alt="logo"/>
</div>
<div className='menu'>
<ul>
 <li className='active'><a href="#" >Home</a></li>   
 <li><a href="#">Shop</a></li>
 <li className="pages"><a href="#">Pages</a>
 {/* <ul className='About'>
 {navname2.map((val)=>{
  return  <li><a href="#">{val}</a></li>
})} 
 </ul> */}
 </li>
 {navname3.map((val)=>{
  return  <li><a href="#">{val}</a></li>
  })}
</ul>
</div>
<div className='icon'>
{navicon.map((val)=>{
  return  <a href>{val}</a>
})}
  
</div>
<div className='icons' id='icon' >
<a href><FaBars/></a>
</div>


</div>
  </div>
);
}
export default navbar;