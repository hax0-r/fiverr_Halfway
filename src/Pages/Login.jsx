import React from 'react'

const Login = () => {
    return (
        <>

            <div className="login-container">
                <div className="form-section">
                    <h1 className="form-title">LOG IN</h1>
                    <form className="form-modern">
                        <div className="form-group">
                            <i className="bx bx-user" />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Email" required="" />
                        </div>
                        <div className="form-group">
                            <i className="bx bx-lock" />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                required=""
                            />
                        </div>
                        <a href="#" className="forgot-password">
                            Forgot Password?
                        </a>
                        <button className="btn-modern">Sign in</button>
                        <a href="sign-up.html" className="btn-create-account">
                            Create Account
                        </a>
                    </form>
                </div>
                <div className="divider" />
                <div className="map-section">
                    <h2 className="map-title">MEET ME HALFWAY</h2>
                    <div className="animated-description">
                        <p>
                            Welcome to <strong>Meet Me Halfway</strong>, your web app for finding
                            the perfect midpoint!
                        </p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Login