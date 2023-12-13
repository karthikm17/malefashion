import React, { Component } from 'react';
import Banner1 from '../Images/banner-1.jpg';
import Banner2 from '../Images/banner-2.jpg';
import Banner3 from '../Images/banner-3.jpg';

class Banner extends Component{

render(){



return <div>
<div className='row'>
<div className='col-1'>
<div className='banner'>
<div className='bannerimage1'>
<img src={Banner1} alt="banner"/>
</div>
<div className='bannertext1' style={{}} >
<h2 >Clothing Collections 2030</h2>
<a href="#">Show Now</a>
</div>
</div>   
</div>
<div className='col-2'>
<div className='banner'>
<div className='bannerimage2'>
<img src={Banner2} alt="banner"/>
</div>
<div className='bannertext2'>
<h2>Accessories</h2>
<a href="#">Show Now</a>
</div>
</div> 
    
</div>
<div className='col-3'>
<div className='banner'>
<div className='bannerimage3'>
<img src={Banner3} alt="banner"/>
</div>
<div className='bannertext3' style={{}}>
<h2>Shoes Spring 2030</h2>
<a href="#">Show Now</a>
</div>
</div>     
</div>

</div>
</div>
}
}
export default Banner;