import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import clean from '../assets/nitro.jpeg';
import dish from '../assets/idea.jpeg';
import fridge from '../assets/rog.jpeg';
import oven from '../assets/asus.jpeg';
import wash from '../assets/victus.jpeg';
import pre from '../assets/pre.jpeg';

import red from '../assets/red.jpeg';
import ip from '../assets/ip.jpeg';
import one from '../assets/one.jpeg';
import real from '../assets/real.jpeg';
import not from '../assets/not.jpeg';
import pix from '../assets/pix.jpeg';

import oven1 from '../assets/oven1.jpeg';
import stove1 from '../assets/stove1.jpeg';
import oven2 from '../assets/oven2.jpeg';
import stove2 from '../assets/stove2.jpeg';
import oven3 from '../assets/oven3.jpeg';
import stove3 from '../assets/stove3.jpeg';
import logo from '../assets/logo.png';

import ap from '../assets/appliances_1.jpg';
import kic from '../assets/kic.jpg';
import game from '../assets/gadgets_gaming.jpg';
import la from '../assets/laptop_tablet_accessories .jpg';
import tv from '../assets/led_tv_1.jpg';
import mob from '../assets/4.jpg';


import MyCarousel from './Carousel';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
// import { ButtonGroupContext } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate(); 

    const handleTV = () => {
        navigate('/tv'); 
    };
    const handleGame = () => {
        navigate('/game'); 
    };
    const handleKich = () => {
        navigate('/kich'); 
    };
    const handleLaptop = () => {
        navigate('/laptop'); 
    };
    const handleMobile = () => {
        navigate('/mobile'); 
    };
    const handleAppl = () => {
        navigate('/appl'); 
    };

  return (
    <body>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="TechHaven Logo" />
          {/* <div className="logo-text">TechHaven</div> */}
        </div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="/contacts">Contact</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="button" className="search-icon">
            <SearchIcon className="icon"/>
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      

      <div class="product1">
    <button onClick={handleTV}>
        <img src={tv} alt="Product 1"/>
        <span>TV & Accessories</span>
    </button>
    <button onClick={handleGame}>
        <img src={game} alt="Product 1"/>
        <span>Gaming & Gadgets</span>
    </button>
    <button onClick={handleAppl}>
        <img src={ap} alt="Product 1"/>
        <span>Accessories</span>
    </button>
    <button onClick={handleMobile}>
        <img src={mob} alt="Product 1"/>
        <span>Mobiles & Wearables</span>
    </button>
    <button onClick={handleLaptop}>
        <img src={la} alt="Product 1"/>
        <span>Laptop Accessories</span>
    </button>
    <button onClick={handleKich}>
        <img src={kic} alt="Product 1"/>
        <span>Kitchen Appliances</span>
    </button>
    

</div>

      <MyCarousel></MyCarousel>

      <section>
    

    <h2>Laptops</h2>
    <div class="appliance-list">
        
      <div class="appliance-item">
      <button>
        <br></br>
        <img src={fridge} className='productimg' alt="Appliance 1"></img>
        <br></br>
        <br></br>
        <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
        {/* <br></br> */}
        <b><p>$999.99</p></b>
      </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={wash} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>HP Victus Intel Core i7 12th Gen 12650H </h6>
        <br></br>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={dish} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Lenovo IdeaPad Gaming 3 AMD Ryzen 5 Hexa Core 6600H</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <img src={oven} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>ASUS TUF Gaming F15 Intel Core i5 11th Gen 11260H</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={clean} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Acer Nitro 5 Intel Core i7 12th Gen 12650H</h6>
        <br></br>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={pre} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Acer Predator Helios Neo 16 Gaming Laptop 13th Gen Intel Core i7</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      
    







    </div>
    <h2>Mobiles</h2>
    <div class="appliance-list">
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={red} className='productimg' alt="Appliance 1"></img>
        <br></br>
        <br></br>
        <h6>Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage)</h6>
        {/* <br></br> */}
        <b><p>$999.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={ip} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Apple iPhone 15 Pro (256 GB) - Natural Titanium</h6>
        <br></br>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={one} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage)</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br>
        </br>
        <img src={real} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>realme 11 Pro 5G (Sunrise Beige, 8GB RAM, 256GB Storage)</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={not} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Nothing Phone (2) 5G (Dark Grey, 12GB RAM, 256GB Storage)</h6>
        <br></br>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={pix} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Pixel 8 5G (Hazel, 8GB RAM, 128GB Storage)</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
    </div>








    <h2>Oven & Stove</h2>
    <div class="appliance-list">
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={oven1} className='productimg' alt="Appliance 1"></img>
        <br></br>
        <br></br>
        <h6>AGARO Marvel 9 Liters Oven Toaster Griller,Cake Baking Otg (Black)</h6>
        {/* <br></br> */}
        <b><p>$999.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={oven2} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Wonderchef Oven Toaster Griller (OTG) Crimson Edge - 28Litres</h6>
        <br></br>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={oven3} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Borosil Prima 42 L Oven Toaster & Grill Convection Heating</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br>
        </br>
        <img src={stove1} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>MILTON Champion Pro 4 Burner Auto-Ignition Gas Stove </h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={stove2} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Butterfly Smart Glass 4 Burner Gas Stove, Black, Manual</h6>
        <br></br>
        <b><p>$799.99</p></b>
        </button>
      </div>
      <div class="appliance-item">
        <button>

        <br></br>
        <img src={stove3} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Faber 4 Burner 70cm Hob |Auto-Ignition| HOB PRIME HT704</h6>
        <b><p>$799.99</p></b>
        </button>
      </div>
      
    
    </div>
  </section>

  <footer>
  <div class="footer-content">
    <div class="footer-section about">
      <h3>About Us</h3>
      <p>Your go-to store for high-quality appliances. We strive to make your home a smarter and more efficient place.</p>
    </div>

    <div class="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: info@TechHavenApplianceHub.com</p>
      <p>Phone: 9551234567</p>
    </div>

    <div class="footer-section social">
      <h3>Follow Us</h3>
      <p><a href="https://www.facebook.com/login/" target="_blank"><FacebookIcon/>Facebook</a></p>
      <p><a href="https://twitter.com/i/flow/login" target="_blank"><TwitterIcon/>Twitter</a></p>
      <p><a href="https://www.instagram.com/accounts/login/" target="_blank"><InstagramIcon/>Instagram</a></p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2023 TechHaven Appliance Hub. All rights reserved.</p>
  </div>
</footer>

    </body>
  );
}

export default HomePage;
