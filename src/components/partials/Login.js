import React, { Component } from 'react';
import LoginBanner from '../../assets/img/login-banner.png'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-solid-svg-icons';
class Login extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }

    render() {
        return (
            <>
            <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>

                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                        <div className="col-md-12 col-lg-6 login-right">
										<div className="login-header">
											<h3>Login <span>Doccure</span></h3>
										</div>
										<form action="https://dreamguys.co.in/demo/doccure/index.html">
											<div className="form-group form-focus">
												<input type="email" className="form-control floating"/>
												<label className="focus-label">Email</label>
											</div>
											<div className="form-group form-focus">
												<input type="password" className="form-control floating"/>
												<label className="focus-label">Password</label>
											</div>
											<div className="text-right">
												<a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
											<div className="login-or">
												<span className="or-line"></span>
												<span className="span-or">or</span>
											</div>
											<div className="row form-row social-login">
											<div className="col-6">
													<a href="#" className="btn btn-facebook btn-block">
													<FontAwesomeIcon icon={faFacebook} /> Login</a>
												</div>
												<div className="col-6">
													<a href="#" className="btn btn-google btn-block">
														<FontAwesomeIcon icon={faGoogle} /> Login</a>
												</div>
											</div>
											<div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
										</form>
									</div>
                        </Col>

                        <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                            <img className='onboardBanner' src={LoginBanner} alt="Doccure Login" />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
            </>
        );
    }
}

export default Login;