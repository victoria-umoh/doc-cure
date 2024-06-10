import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import FooterLogo from '../../assets/img/footer-logo.png'
class FooterDesktop extends Component {
    constructor() {
        super();
        this.state = {
          currentYear: new Date().getFullYear()
        };
      }
    render() {
        return (
            <>
                 <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
          <Container>
            
            <Row className='px-0 my-5'>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
                <div className="footer-widget footer-about">
                    <div className="footer-logo">
					   <img src={FooterLogo} alt="logo" />
				    </div>
              </div>
                <h5 className='footer-menu-title'> OFFICE ADDRESS </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <h5 className='footer-menu-title'> SOCIAL LINK </h5>
                <a href="https://facebook.com"><i className="fab m-1 h4 fa-facebook"></i></a>
                <a href="https://instagram.com"><i className="fab m-1 h4 fa-instagram"></i></a>
                <a href="https://twitter.com"><i className="fab m-1 h4 fa-twitter"></i></a>
                <a href="https://linkedin.com"><i className="fab m-1 h4 fa-linkedin-in"></i></a>
                <a href="https://dribbble.com"><i className="fab m-1 h4 fa-dribbble"></i></a>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
              <div class="footer-widget footer-menu">
					<h2 className="footer-title">For Patients</h2>
					
				
                <h5 className='footer-menu-title'> THE COMPANY </h5>
                <Link to="/search" className="footer-link">Search for Doctors </Link><br></br>
                <Link to="/login" className="footer-link">Login</Link><br></br>
                <Link to="/register" className="footer-link">Register</Link>
                <Link to="/booking" className="footer-link">Booking</Link><br></br>
                <Link to="/patient-dashboard" className="footer-link">Patient Dashboard</Link>
                </div>
              </Col>

              <Col lg={3} md={3}  sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title'> MORE INFO </h5>
                <div class="footer-widget footer-menu">
					<h2 class="footer-title">For Doctors</h2>
                <Link to="/appointments" className="footer-link">Appointments</Link><br></br>
                <Link to="/chat" className="footer-link">Chat</Link><br></br>
                <Link to="/login" className="footer-link">Login</Link>
                <Link to="/doctor-register" className="footer-link"> Register</Link><br></br>
                <Link to="/doctor-dashboard" className="footer-link">Doctor Dashboard</Link>
                </div>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title'> DOWNLOAD APPS </h5>
                <div className="footer-widget footer-contact">
					<h2 className="footer-title">Contact Us</h2>
					<div className="footer-contact-info">
						<div className="footer-address">
							<span><i className="fas fa-map-marker-alt"></i></span>
							<p> 3556  Beech Street, San Francisco,<br/> California, CA 94108 </p>
						</div>
						<p>
							<i className="fas fa-phone-alt"></i>
								+1 315 369 5943
						</p>
						<p className="mb-0">
							<i className="fas fa-envelope"></i>
								doccure@example.com
						</p>
					</div>
				</div>
                  Change Your Language <br></br>
                  <div className="" id="google_translate_element"></div>
              </Col>
            </Row>
          </Container>

          <Container fluid={true} className='text-center text-light m-0 pt-3 pb-1 bg-dark'>
            <Row>
              <h6 className="">
                <strong>Copyright &copy; {this.state.currentYear} | All rights reserved</strong>
                {/* <script>document.write(new Date().getFullYear());</script>
                <script>document.querySelector('.footer-text').innerHTML += new Date().getFullYear();</script> */}            
              </h6>
            </Row>
          </Container>
        </div>
            </>
        );
    }
}

export default FooterDesktop;