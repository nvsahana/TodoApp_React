
import React from 'react';
import './signup.css'
const Signup = () => {

    return (
        <div className="signup-page">
            <div className = "signup-container">
                <h1 style={{textAlign: 'center'}}>Create an account....</h1>
                <form action="/main" className="form-signup">
                    <div className="form-group">
                        <label style ={{color: 'black'}}> Name </label>
                        <input type="text" placeholder="Full Name"/>
                    </div>
                    <div className="form-group">
                        <label style ={{color: 'black'}}> EMAIL </label>
                        <input type="email" placeholder="email@example.com"/>
                    </div>

                    <div className="form-group">
                        <label style ={{color: 'black'}}> PASSWORD </label>
                        <input type="Password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label style ={{color: 'black'}}>CONFIRM PASSWORD </label>
                        <input type="Password" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group">
                        <button style ={{color: 'black', fontFamily: 'Courier New'}} type="submit" className="submit-button">Sign Up</button>
                    </div>
                </form>
                <div className="signin-container">
                    <a href="/" style={{fontSize: '12px', margin:0, textAlign:'center'}}>Already have an account? Sign In</a>    
                </div>
                 <div className="signin-container">
                    <a href="#" style={{fontSize: '12px', margin:0, textAlign:'center'}}>Forgot Password?</a>    
                </div>
            </div>
        </div>

    );

}
export default Signup;