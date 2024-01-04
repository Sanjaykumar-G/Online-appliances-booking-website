import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App2.css';

function Login2() {
    const navigate = useNavigate(); 

    const handleLogin = () => {
        navigate('/home'); 
    };

    const handleSignupClick = () => {
        navigate('/signup'); 
    };

    return (
        <body className='body1'>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true"></input>
                <div className="login">
                    <form>
                        <label className='label3'>Login</label>
                        <input type="text" name="username" placeholder="Username" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
    
                        <button className='button1' type="button" onClick={handleLogin}>Login</button>
                        <br />
                        <br />
                        <center>
                            <h5 className="member"><b>Not a Member?</b></h5>
                        
                            <h5><button type="button" onClick={handleSignupClick} className="signupnow">Signup</button></h5>
                        </center>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Login2;
