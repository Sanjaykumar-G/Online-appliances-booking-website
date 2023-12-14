function Signup() {
  return (
    <body>

    <div>
      
    
    <box>
      <center>

      <nav>
        
        <h1 className='up'><marquee>Signup</marquee></h1>
        
        </nav>
    <form>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='container'>
      <lable className='first'><h4>First Name :
        <input type= "text" placeholder="First Name" required></input>
      </h4></lable>

      <lable className=''><h4>Last Name : 
        <input type ="text" placeholder="Last Name" required></input>
      </h4></lable>
      
      <lable><h4>Email :
        <input type ="email" placeholder="Email" required></input>
      </h4></lable>
      
      <lable><h4>Password :
        <input type ="password" placeholder="Password" required></input>
      </h4></lable>
      <lable><h4>Retype-Password :
        <input type ="password" placeholder="Retype-Password" required></input>
      </h4></lable>
      <br></br>
      </div>
      <center><button><h3>Signup</h3></button></center>
      <h2><center>OR</center></h2>

      <center><h3>Already have a Account?</h3><button><h3>Login</h3></button></center>
    </form>
      </center>
    </box> 
   </div>
    </body>
  );
}

export default Signup;