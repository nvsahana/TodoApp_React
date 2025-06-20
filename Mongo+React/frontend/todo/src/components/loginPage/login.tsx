
import React from 'react';
import './login.css'

const Login = () => {

    return (
        <div className="login-page">
            <div className = "login-container">
                <h1 style={{textAlign: 'center'}}>Welcome....</h1>
                <form action="/main" className="form-login">
                    <div className="form-group">
                        <label style ={{color: 'black'}}> EMAIL </label>
                        <input type="email" placeholder="email@example.com"/>
                    </div>
                    
                    <div className="form-group">
                        <label style ={{color: 'black'}}> PASSWORD </label>
                        <input type="Password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button style ={{color: 'black', fontFamily: 'Courier New'}} type="submit" className="submit-button">Login</button>
                    </div>
                </form>
                <div className="signupLink-container">
                    <a href="/signup" style={{fontSize: '12px', margin:0, textAlign:'center'}}>Don't have an account yet? Sign Up</a>    
                </div>
                 <div className="signupLink-container">
                    <a href="#" style={{fontSize: '12px', margin:0, textAlign:'center'}}>Forgot Password?</a>    
                </div>
            </div>
        </div>

    );

}
export default Login;