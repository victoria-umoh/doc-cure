import React, { Component } from 'react'
import { Link } from "react-router-dom"
import LogoWhite from '../../assets/img/logo-white.png'

export class ForgotPassword extends Component {
  render() {
    return (
        <>
            {/* Main Wrapper */}
            <div className="main-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <div className="loginbox">
                            <div className="col-md-6 login-left">
                                <img className="img-fluid" src={LogoWhite} alt="Logo" />
                            </div>
                            <div className="col-md-6 login-right">
                                <div className="login-right-wrap">
                                    <h1>Forgot Password?</h1>
                                    <p className="account-subtitle">Enter your email to get a password reset link </p>
                                    {/* Form */}
                                    <form action="https://dreamguys.co.in/demo/doccure/admin/login.html">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Email" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                                        </div>
                                    </form>
                                    {/* /Form */}
                                    <div className="text-center dont-have">
                                        Remember your password? <Link href="/login">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Main Wrapper */}
      </>
      
    )
  }
}

export default ForgotPassword
