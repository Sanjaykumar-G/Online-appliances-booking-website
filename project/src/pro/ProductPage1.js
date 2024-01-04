import React from 'react';
import fridge from '../assets/rog.jpeg';
// import { useNavigate } from 'react-router-dom'; 
import '../App4.css';

const ProductPage = () => {
    const buyNow = () => {
        alert('Redirecting to checkout...');
    };

    const addToCart = () => {
        alert('Product added to cart!');
    };

    return (
        <div className="container">
            <div className="product">
                <div className="product-image">
                    <img src={fridge} alt="Product Image" />
                </div>
                <div className="product-details">
                    <h2 className="product-name">ASUS ROG Strix G16 Intel Core i7 13th Gen 13650HX</h2>
                    <div className="rating">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                    </div>

                    <div className="specifications-section">
                        <h2>Specifications</h2>
                        <ul className="specifications">
                            <li>Brand: Lenovo</li>
                            <li>Model Name: Ideapad Gaming 3</li>
                            <li>Screen Size: 15.6 Inches</li>
                            <li>Colour: Gray</li>
                            <li>Hard Disk Size: 512 GB</li>
                            <li>CPU Model: Core i5</li>
                            <li>RAM Memory Installed Size: 16 GB</li>
                            <li>Operating System: Windows 11 Home</li>
                            <li>Special Feature: Aluminum Top Cover, Wi-Fi 6, Elevated Design, Thunderbolt 4</li>
                            <li>Graphics Card: [Add graphics card details]</li>
                            {/* Add more specifications as needed */}
                        </ul>
                    </div>

                    <div className="description-section">
                        <h2>Description</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <p className="price">Price: $19.99</p>

                    <button className="btn-buy-now" onClick={buyNow}>Buy Now</button>
                    <button className="btn-add-to-cart" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
