// import img from '../assets/funky.jpg';
function Login() {
    return (
      <body>

  
      <div>
        
      <box>
        <div id="center">

        <center>

        <nav>
          
          <h1 className='up'><marquee>Login</marquee></h1>
          
          </nav>
      <form>
        {/* <center><p><h2>Sign Up</h2></p></center> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <lable><h3>UserName :
        <input type= "text" placeholder="UserName" required></input></h3>
      </lable>
      <lable><h3>Password :
        <input type ="password" placeholder="Password" required></input>
      </h3></lable>
      <br></br>
    
      {/* <br></br> */}
      <center><button><h3>Login</h3></button></center>
      <br></br>
      <h2><center>OR</center></h2>

     
      <center><a href="https://www.facebook.com/login/"><button class="social-signin facebook"><h5><b>Log in with facebook</b></h5></button></a></center>
      <br></br>
      {/* <center><a href="https://twitter.com/i/flow/login"><button class="social-signin twitter">Log in with Twitter</button></a></center>
      <br></br> */}
      <center><a href="https://accounts.google.com/Login/signinchooser?ifkv=AWnogHeB-7Iqyltvkyg8GCu0f6ziyYCD60D0kGNflLZmpL2PVi3o2F9h2RycK8HemvlQhgicMkUvKA&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button class="social-signin google"><b><h5>Log in with Google</h5></b></button></a></center>
      <br></br>
      <br></br>
      <center><h3>Not a Member?</h3><button><h3>Signup now</h3></button></center>
      </form>
        </center>
        </div>
      </box> 
     </div>
      </body>
    );
  }
  
  export default Login;