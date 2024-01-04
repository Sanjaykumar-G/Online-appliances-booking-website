import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import clean from '../assets/nitro.jpeg';
import dish from '../assets/idea.jpeg';
import fridge from '../assets/rog.jpeg';
import oven from '../assets/asus.jpeg';
import wash from '../assets/victus.jpeg';
import pre from '../assets/pre.jpeg';
import { useNavigate } from 'react-router-dom'; 

function Laptop() {
  const navigate = useNavigate(); 

    const handleProduct1 = () => {
        navigate('/laptop/product1'); 
    };
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
        <h3>Gaming Laptops</h3>
        <div className="appliance-list">
          <div className="appliance-item">
            <button onClick={handleProduct1}>

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

export default Laptop;
