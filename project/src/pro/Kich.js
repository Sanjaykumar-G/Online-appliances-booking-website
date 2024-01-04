import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import oven1 from '../assets/oven1.jpeg';
import stove1 from '../assets/stove1.jpeg';
import oven2 from '../assets/oven2.jpeg';
import stove2 from '../assets/stove2.jpeg';
import oven3 from '../assets/oven3.jpeg';
import stove3 from '../assets/stove3.jpeg';
import fridge from '../assets/rog.jpeg';


function Kich() {
  return (
    <div>
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
            <SearchIcon className="icon" />
          </button>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <center><b><h1>Laptop Accessories</h1></b></center>
      <section>
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
        <h3>Gaming Laptops</h3>
        <div className="appliance-list">
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          
          
        </div>
        <h3>Gaming Laptops</h3>
        <div className="appliance-list">
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
            </button>
          </div>
          <div className="appliance-item">
            <button>

            <br />
            <img src={fridge} className="productimg" alt="Appliance 1"></img>
            <br />
            <br />
            <h6>ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h6>
            <b>
              <p>$999.99</p>
            </b>
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
    </div>
  );
}

export default Kich;
