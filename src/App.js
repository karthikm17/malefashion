
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Product from './Component/Product';
import Offer from './Component/Offer';
import Images from './Component/Images';
import News from './Component/News';
import Footer from './Component/Footer';
import Responsive from'./Component/Carousel';
import './Component/NAvbar.css';
import './Component/Carousel.css';
import './Component/Banner.css';
import './Component/Product.css';
import './Component/Offer.css';
import './Component/Images.css';
import './Component/News.css';
import'./Component/Footer.css';

function App() {
  return (
    <div >
      <div>
     <Navbar/>
     </div>
    <div>
      <Responsive/>
    </div>
     <div>
      <Banner/>
     </div>
     <div>
      <Product/>
    
     </div>
     <div>
      <Offer/>
     </div>
     <div>
      <Images/>
     </div>
     <div>
      <News/>
     </div>
     <div>
      <Footer/>
     </div>
    </div>
    
  );
}

export default App;
