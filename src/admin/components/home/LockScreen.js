import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import Avatar2 from '../../assets/img/profiles/avatar-02.jpg'

export class LockScreen extends Component {
  render() {
    return (
      <>
         {/* Main Wrapper  */}
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">
                    	<div className="login-left">
							<img className="img-fluid" src={Logo} alt="Logo" />
                        </div>
                        <div className="login-right">
							<div className="login-right-wrap">
								<div className="lock-user">
									<img className="rounded-circle" src={Avatar2} alt="User" />
									<h4>John Doe</h4>
								</div>
								
								 {/* Form  */}
								<form action="https://dreamguys.co.in/demo/doccure/admin/index.html">
									<div className="form-group">
										<input className="form-control" type="text" placeholder="Password" />
									</div>
									<div className="form-group mb-0">
										<button className="btn btn-primary btn-block" type="submit">Enter</button>
									</div>
								</form>
								 {/* /Form  */}
								
								<div className="text-center dont-have">Sign in as a different user? <Link to="/login">Login</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		 {/* /Main Wrapper  */}
      </>
    )
  }
}

export default LockScreen
