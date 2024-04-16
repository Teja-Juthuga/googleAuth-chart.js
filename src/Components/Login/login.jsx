import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    


    const handleGoogleSignIn = () => {
        loginWithRedirect({
            connection: 'google-oauth2',
            mode: 'popup',
        });
    }
    return (
        <div className="login-page-container">
            <div className="section-one">
                <h1>Board.</h1>
            </div>
            <div className="section-two">
                <div>
                    <h1> Sign in </h1>
                    <p> Sign in to your account </p>
                </div>
                <div className="register-cards">
                    
                    <div onClick={handleGoogleSignIn} className="r-card"> Sign in with Google </div>
                    <div onClick={() => loginWithRedirect({ connection: 'apple' })} className="r-card"> Sign in with Apple </div>
                    {
                        isAuthenticated ? <Link to={'/Dashboard'}></Link> : null
                    }
                </div>
                <form className="login-card">
                        <div>
                            <label>Email address</label> <br/>
                            <input type="text"/> 
                        </div>
                        <div>
                            <label> Password </label> <br/>
                            <input type="password" />
                        </div>
                        <p href="www.example.com" className="link"> Forgot password? </p>
                              
                        <Link to={'/Dashboard'}>
                            <button className="signin-btn"> Sign In </button>
                        </Link>
                </form>
                <p style={{textAlign:"center",}}>Don't have account? <span className="link"> Register here</span></p>
            </div>
        </div>
    )
}