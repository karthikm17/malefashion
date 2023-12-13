import Hero1 from '../Images/hero-1.jpg';
import Hero2 from '../Images/hero-2.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from 'react';
import Slider from "react-slick";




export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     
    };
    const scroll={
      width:"100%",
      heigh:"100%"
}
    return (
      <div className='container1'>
  
        <Slider {...settings}>
          
          <div className='firstslide'>
            <div className='slide1'>
            <h6>Summer Collection</h6>
            <h2>Fall - Winter Collections 2030</h2>
            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
            commitment to exceptional quality.</p> 

            <a href="#" className='button'>shop now</a>                    
          </div>                    
          </div>
          <div className='secondslide'>
            <div className='slide2'>
            <h6>Summer Collection</h6>
            <h2>Fall - Winter Collections 2030</h2>
            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
            commitment to exceptional quality.</p> 

            <a href="#" className='button'> shop now</a> 
            </div>
          </div>
       
        </Slider>
      </div>
    );
  }
}