import React from 'react';
import '../App2.css';
function Login2(){
    return(
        
        <body className='body1' >
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true"></input>
            <div class="login">
                <form>
                    <label >Login</label>
                    <input type="text" name="username" placeholder="Username" required=""></input>
                    <input type="password" name="pswd" placeholder="Password" required=""></input>
                    <a href=""><button type="submit">Login</button></a>
                    <br></br>
                    <br></br>
                    <center>
                        <h5 className="member">Not a Member?</h5><h5><button className="signupnow">Signup</button></h5>
                        </center>
                </form>
            </div>   
     </div>
</body>
    )
}
export default Login2;