import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import red from '../assets/red.jpeg';
import ip from '../assets/ip.jpeg';
import one from '../assets/one.jpeg';
import real from '../assets/real.jpeg';
import not from '../assets/not.jpeg';
import pix from '../assets/pix.jpeg';
import fridge from '../assets/rog.jpeg';


function Mobile() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="TechHaven Logo" />
          {/* <div className="logo-text">TechHaven</div> */}
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
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

export default Mobile;
