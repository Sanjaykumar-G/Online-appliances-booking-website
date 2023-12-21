import React from 'react';



import clean from '../assets/nitro.jpeg'
import dish from '../assets/idea.jpeg'
import fridge from '../assets/rog.jpeg'
import oven from '../assets/asus.jpeg'
import wash from '../assets/victus.jpeg'
import pre from '../assets/pre.jpeg'

import red from '../assets/red.jpeg'
import ip from '../assets/ip.jpeg'
import one from '../assets/one.jpeg'
import real from '../assets/real.jpeg'
import not from '../assets/not.jpeg'
import pix from '../assets/pix.jpeg'



import oven1 from '../assets/oven1.jpeg'
import stove1 from '../assets/stove1.jpeg'
import oven2 from '../assets/oven2.jpeg'
import stove2 from '../assets/stove2.jpeg'
import oven3 from '../assets/oven3.jpeg'
import stove3 from '../assets/stove3.jpeg'




import MyCarousel from './Carousel';

function HomePage(){
    return(
<body>

  <header>
    <h1>TechHaven Appliance Hub</h1>
  </header>
  <nav>

    <a href="/">Home</a>
    <a href="#">Products</a>
    <a href="#">About Us</a>
    <a href="#">Contact</a>
    <a href="/login">Login</a>
    <a href="/signup">Signup</a>
  </nav>


<MyCarousel></MyCarousel>

  <section>
    {/* <div class="featured-appliance">
      <h2>Featured Appliance</h2>
      <p>Check out our latest and greatest appliance!</p>
      <button>View Details</button>
    </div> */}

    <h2>Laptops</h2>
    <div class="appliance-list">
      <div class="appliance-item">
        <br></br>
        <img src={fridge} className='productimg' alt="Appliance 1"></img>
        <br></br>
        <br></br>
        <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
        {/* <br></br> */}
        <b><p>$999.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={wash} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>HP Victus Intel Core i7 12th Gen 12650H </h6>
        <br></br>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={dish} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Lenovo IdeaPad Gaming 3 AMD Ryzen 5 Hexa Core 6600H</h6>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <img src={oven} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>ASUS TUF Gaming F15 Intel Core i5 11th Gen 11260H</h6>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={clean} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Acer Nitro 5 Intel Core i7 12th Gen 12650H</h6>
        <br></br>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={pre} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Acer Predator Helios Neo 16 Gaming Laptop 13th Gen Intel Core i7</h6>
        <b><p>$799.99</p></b>
      </div>
      
    







    </div>
    <h2>Mobiles</h2>
    <div class="appliance-list">
      <div class="appliance-item">
        <br></br>
        <img src={red} className='productimg' alt="Appliance 1"></img>
        <br></br>
        <br></br>
        <h6>Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage)</h6>
        {/* <br></br> */}
        <b><p>$999.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={ip} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Apple iPhone 15 Pro (256 GB) - Natural Titanium</h6>
        <br></br>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={one} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage)</h6>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br>
        </br>
        <img src={real} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>realme 11 Pro 5G (Sunrise Beige, 8GB RAM, 256GB Storage)</h6>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={not} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Nothing Phone (2) 5G (Dark Grey, 12GB RAM, 256GB Storage)</h6>
        <br></br>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={pix} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Pixel 8 5G (Hazel, 8GB RAM, 128GB Storage)</h6>
        <b><p>$799.99</p></b>
      </div>
    </div>








    <h2>Oven & Stove</h2>
    <div class="appliance-list">
      <div class="appliance-item">
        <br></br>
        <img src={oven1} className='productimg' alt="Appliance 1"></img>
        <br></br>
        <br></br>
        <h6>AGARO Marvel 9 Liters Oven Toaster Griller,Cake Baking Otg (Black)</h6>
        {/* <br></br> */}
        <b><p>$999.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={oven2} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Wonderchef Oven Toaster Griller (OTG) Crimson Edge - 28Litres</h6>
        <br></br>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={oven3} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Borosil Prima 42 L Oven Toaster & Grill Convection Heating</h6>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br>
        </br>
        <img src={stove1} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>MILTON Champion Pro 4 Burner Auto-Ignition Gas Stove </h6>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={stove2} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Butterfly Smart Glass 4 Burner Gas Stove, Black, Manual</h6>
        <br></br>
        <b><p>$799.99</p></b>
      </div>
      <div class="appliance-item">
        <br></br>
        <img src={stove3} className='productimg' alt="Appliance 2"></img>
        <br/>
        <br/>
        <h6>Faber 4 Burner 70cm Hob |Auto-Ignition| HOB PRIME HT704</h6>
        <b><p>$799.99</p></b>
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
      <p>Phone: (555) 123-4567</p>
    </div>

    <div class="footer-section social">
      <h3>Follow Us</h3>
      <p><a href="#" target="_blank">Facebook</a></p>
      <p><a href="#" target="_blank">Twitter</a></p>
      <p><a href="#" target="_blank">Instagram</a></p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2023 TechHaven Appliance Hub. All rights reserved.</p>
  </div>
</footer>


</body>

    )
}

export default HomePage;