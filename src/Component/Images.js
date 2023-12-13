import React, { Component } from 'react';
import instagram1 from '../Images/instagram-1.jpg';
import instagram2 from '../Images/instagram-2.jpg';
import instagram3 from '../Images/instagram-3.jpg';
import instagram4 from '../Images/instagram-4.jpg';
import instagram5 from '../Images/instagram-5.jpg';
import instagram6 from '../Images/instagram-6.jpg';
class images extends Component{

    render(){
    
    let image=[instagram1,instagram2,instagram3,instagram4,instagram5,instagram6];
    
    return <div>
     <div className='instagram'>

<div className='firstimages'>
    {image.map((val)=>{
        return <div className='image'><img src={val}/></div>
    })}
    
</div>
<div className='firstinstagram'>
     <h2>Instagram</h2>
     <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<h3>#Male_Fashion</h3>
</div >



     </div>
    </div>
    }
}

export default images;