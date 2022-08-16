
import './App.css';
import logo from './google.png';




function App() {
  return (
   
    <div className="App">
      <div id='square'>

               <div id='pattern'>
        <div id='login'>
        <h3>Sign Up</h3>
        </div>
        <div id='details'>
        Email address<br></br>
        <input className='input' type="email" placeholder='Enter your Email'></input><br></br>
        <div className='password'>
        Password<br></br>
        <input className='input' type="password" placeholder='Enter your password'></input><br></br>
         <input id='box' type='checkbox'></input><p className='pass'>Show password</p>
         <a href='#' ><button className='button'>  Sign Up &#8594;</button></a><br></br>
         <p id='dash'>
          <p id='or'>_________                 _______      </p>
          or
         </p>
         <a href='#@'>
          <button className='google'>
               <img src={logo} id="logo" /><span id='go'>Continue with Google</span>
          </button>
         </a>
        </div>
        </div>
      </div>
        <div id='blur'>
        <div id='good'>
          <p>
            THE<span className='bold'>GOOD</span ><br></br> NETWORK
          </p>
          <p className='line'>_______<br></br></p>
          <p className='we'>
          We are <br></br>
          
          </p>
        </div>
        <p className='invite'>
            Invite only right now.
            <p className='million'>
              10 Million+ people have joined our network. <br></br>
              We invite you to join the tribe. <br></br>
            </p>
            <p className='created'>
              Already have an account?
            </p>
            <h1 className='sign-in'><b>
              Sign in</b>
            </h1>
          </p>
        </div>

      </div>
      <div >
     
        </div>
    </div>
  );
}

export default App;
