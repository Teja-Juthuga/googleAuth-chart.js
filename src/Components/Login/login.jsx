import "./login.css"

export const Login = () => {
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
                <div>
                    <div> Google </div>
                    <div> Apple </div>
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
                        <button className="signin-btn"> Sign In </button>
                </form>
                <p>Don't have account? <span className="link"> Register here</span></p>
            </div>
        </div>
    )
}