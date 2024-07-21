import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Error404 extends Component {
  render() {
    return (
      <>
        <div className="error-page d-flex justify-content-center mt-5 pt-5">
	
            {/* Main Wrapper  */}
            <div className="main-wrapper">
                
                <div className="error-box ">
                    <h1>404</h1>
                    <h3 className="h2 mb-3">
                      <FontAwesomeIcon icon={faWarning} /> 
                      Oops! Page not found!</h3>
                    <p className="h4 font-weight-normal">The page you requested was not found.</p>
                    <Link to="/admin-dashboard" className="btn btn-primary">Back to Home</Link>
                </div>
            
            </div>
            {/* /Main Wrapper  */}
        </div>
      </>
    )
  }
}

export default Error404
