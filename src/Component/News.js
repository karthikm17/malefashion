import React from 'react';

const News=()=>{

const picture =[{image:"https://themewagon.github.io/malefashion/img/blog/blog-1.jpg",date:"16 February 2020",heading:"What Curling Irons Are The Best Ones"},
{image:"https://themewagon.github.io/malefashion/img/blog/blog-2.jpg ",date:"21 February 2020",heading:"Eternity Bands Do Last Forever"},
{image:"https://themewagon.github.io/malefashion/img/blog/blog-3.jpg",date:"28 February 2020",heading:"The Health Benefits Of Sunglasses"}]


return(
 
 <div className='news'>
    <div className='heading'>
 
<span>LATEST NEWS</span>
<h2> Fashion New Trends</h2>
    </div>

<div className='picture'>
{picture.map((val,index)=>{
return <div className='pic'>
<div className='first' style={{backgroundImage:"url({val.image})"}}>
    <img src={val.image} alt="image"/>
</div>
<div className='second'>
<span>{val.date}</span>
<h5>{val.heading}</h5>
<a href="#" className='btn'>READ MORE</a>
</div>
</div>
})}
</div>
 </div>

 );





}
export default News;