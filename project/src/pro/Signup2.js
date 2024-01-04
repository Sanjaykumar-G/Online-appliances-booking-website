import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App2.css';

function Signup2() {
    const navigate = useNavigate(); 

    const handleLoginClick = () => {
        navigate('/home');
    };

    return (
        <body className='body1'>
            <div className="main">
                <form>
                    <label className='label3' htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="user" placeholder="Username" required="" />
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <input type="password" name="repswd" placeholder="Confirm Password" required="" />
                    <br></br>
    
                    <button className='button1' type="button" onClick={handleLoginClick}>Sign up</button> 
                </form>
            </div>
        </body>
    );
}

export default Signup2;
