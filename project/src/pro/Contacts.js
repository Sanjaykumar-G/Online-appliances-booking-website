import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App3.css';

function Contacts() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/home');
    };

    return (
        <body className='body2'>

        <div className="container">
            <h1  className='h12' style={{ fontSize: '40px', color: 'white' }}><b>Connect with us</b></h1>
            <p>We would love to respond to your queries and help you succeed.<br /></p>
            <div className="contact-box">
                <div className="contact-left">
                    <h3 className='h32'>Send your request</h3>
                    <form>
                        <div className="input-row">
                            <div className="input-group">
                                <label className='label2'>Name</label>
                                <input className='input2' type="text" placeholder="Name" />
                            </div>
                            <div className="input-group">
                                <label className='label2'>Phone</label>
                                <input className='input2' type="number" placeholder="+91 1234567890" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label className='label2'>Email</label>
                                <input className='input2' type="email" placeholder="something@gmail.com" />
                            </div>
                            <div className="input-group">
                                <label className='label2'>Subject</label>
                                <input className='input2' type="text" placeholder="Text" />
                            </div>
                        </div>
                        <label className='label2'>Message</label>
                        <textarea className='textarea2' rows="5" placeholder="Your message"></textarea>
                        <button className='button2' onClick={handleLoginClick}>SEND</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3 className='h32'>Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>TechHaven@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+91 9466926423</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                Street: 22 Main Road
                                City: Bengaluru
                                070 0838 1384
                                DD3 6HF
                                India
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </body>
    );
}

export default Contacts;
