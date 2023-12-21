import React from 'react';
import '../App2.css';
function Signup2(){
    return(
        <body className='body1'>

        <div class="main">
                <form>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="user" placeholder="Username" required=""></input>
                    <input type="email" name="email" placeholder="Email" required=""></input>
                    <input type="password" name="pswd" placeholder="Password" required=""></input>
                    <input type="password" name="repswd" placeholder="Confirm Password" required=""></input>
                    <button type="submit" id="signup">Sign up</button> 
                </form>
        </div>
        </body>
    )
}

export default Signup2;