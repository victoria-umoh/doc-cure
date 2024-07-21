import React, { Component } from 'react'
import LogoWhite from '../../assets/img/logo-white.png'
// import LoginBanner from '../../assets/img/login-banner.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image  } from 'react-bootstrap'
import '../../assets/css/style.css'
export class Login extends Component {
  render() {
    return (
      <>
         {/* Main Wrapper  */}
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<Container>
                	<Row className="loginbox">

                    	<Col lg={6} md={6} sm={12} xs={12} className="login-left">
							<Image fluid src={LogoWhite} alt="Logo" />
                        </Col>

                        <Col lg={6} md={6} sm={12} xs={12} className="login-right">
							<div className="login-right-wrap">
								<h1>Admin Login</h1>
								<p className="account-subtitle">Access to Admin dashboard</p>
								
								 {/* Form  */}
								<form action="https://dreamguys.co.in/demo/doccure/admin/index.html">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Email" />
									</div>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Password" />
									</div>
									<div className="form-group">
										<button className="btn btn-primary btn-block" type="submit">Login</button>
									</div>
								</form>
								 {/* /Form  */}
								
								<div className="text-center forgotpass"><Link to="/admin-forgot-password">Forgot Password?</Link></div>
								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span> 
								</div>
								  
								 {/* Social Login  */}
								<div className="social-login">
									<span>Login with</span>
									<a href="#" className="facebook"><i className="fab fa-facebook-f mr-1"></i></a>
                  					<a href="#" className="google"><i className="fab fa-google mr-1"></i></a>
								</div>
								 {/* /Social Login  */}
								
								<div className="text-center dont-have">Don't have an account? <Link to="/admin-register">Register</Link></div>
							</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
		 {/* /Main Wrapper  */}
      </>
    )
  }
}

export default Login
