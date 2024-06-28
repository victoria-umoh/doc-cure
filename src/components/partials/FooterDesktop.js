import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
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
              <div className='footer'>
                <Container fluid={true}>
                  <div className='footer-top'>
                    <Row className='px-0 my-5'>
                      <Col lg={3} md={3} sm={6} xs={12}>
                        <div class="footer-widget footer-about">
                          <div className="footer-widget footer-about">
                              <div className="footer-logo">
                                <img src={FooterLogo} alt="logo" />
                              </div>
                          </div>
                          <div class="footer-about-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div class="social-icon">
                              <ul>
                                <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://dribbble.com"><FontAwesomeIcon icon={faDribbble} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col lg={3} md={3} sm={6} xs={12}>
                        <div class="footer-widget footer-menu">
                          <h2 className="footer-title">For Patients</h2>  
                          <ul>               
                            <li><Link to="/search" className="footer-link"> <FontAwesomeIcon icon={faAngleDoubleRight} />Search for Doctors </Link></li>
                            <li><Link to="/login" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Login</Link></li>
                            <li><Link to="/register" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Register</Link></li>
                            <li><Link to="/booking" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Booking</Link></li>
                            <li><Link to="/patient-dashboard" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Patient Dashboard</Link></li>
                          </ul> 
                        </div>
                      </Col>

                      <Col lg={3} md={3}  sm={6} xs={12}>
                        <div class="footer-widget footer-menu">
                          <h2 class="footer-title">For Doctors</h2>
                          <ul>               
                            <li><Link to="/appointments" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Appointments</Link></li>
                            <li><Link to="/chat" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Chat</Link></li>
                            <li><Link to="/login" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Login</Link></li>
                            <li><Link to="/doctor-register" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} /> Register</Link></li>
                            <li><Link to="/doctor-dashboard" className="footer-link"><FontAwesomeIcon icon={faAngleDoubleRight} />Doctor Dashboard</Link></li>
                          </ul>
                        </div>
                      </Col>

                      <Col lg={3} md={3} sm={6} xs={12}>
                        <div className="footer-widget footer-contact">
                          <h2 className="footer-title">Contact Us</h2>
                          <div className="footer-contact-info">
                            <div className="footer-address">
                              <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                              <p> 3556  Beech Street, San Francisco,<br/> California, CA 94108 </p>
                            </div>
                            <p>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                                +1 315 369 5943
                            </p>
                            <p className="mb-0">
                            <FontAwesomeIcon icon={faEnvelope} />
                                doccure@example.com
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>

                <div class="footer-bottom">
                  <div class="container-fluid">
                    <div class="copyright">
                      <Container fluid={true} className='text-center text-light m-0 pt-3 pb-1'>
                        <Row>
                          <div class="col-md-6 col-lg-6">
                            <div class="copyright-text">
                              <h6 className="text-light">
                                <strong>Copyright &copy; {this.state.currentYear}  |  All rights reserved</strong>           
                             </h6>
                            </div>
                          </div>

                          <div class="col-md-6 col-lg-6">
                            <div class="copyright-menu">
                              <ul className="mb-0 text-light policy-menu">
                                <li><a href="term-condition.html">Terms and Conditions</a></li>
                                <li><a href="privacy-policy.html">Policy</a></li>
                              </ul>
                            </div>
                          </div>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </div>

              </div>

               {/* jQuery  */}
              <script src="../../assets/js/jquery.min.js"></script>
              
              {/* Bootstrap Core JS  */}
              <script src="../../assets/js/popper.min.js"></script>
              <script src="../../assets/js/bootstrap.min.js"></script>
              
              {/* Sticky Sidebar JS  */}
                  <script src="../../assets/plugins/theia-sticky-sidebar/ResizeSensor.js"></script>
                  <script src="../../assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>
              
              {/* Datetimepicker JS  */}
              <script src="../../assets/js/moment.min.js"></script>
              <script src="../../assets/js/bootstrap-datetimepicker.min.js"></script>
              
              {/* Full Calendar JS  */}
                  <script src="../../assets/plugins/jquery-ui/jquery-ui.min.js"></script>
                  <script src="../../assets/plugins/fullcalendar/fullcalendar.min.js"></script>
                  <script src="../../assets/plugins/fullcalendar/jquery.fullcalendar.js"></script>

                  {/* Circle Progress JS  */}
              <script src="../../assets/js/circle-progress.min.js"></script>

                {/* Select2 JS  */}
                <script src="../../assets/plugins/select2/js/select2.min.js"></script>
                
                {/* Dropzone JS  */}
                <script src="../../assets/plugins/dropzone/dropzone.min.js"></script>
                
                {/* Bootstrap Tagsinput JS  */}
                <script src="../../assets/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.js"></script>
                
                {/* Profile Settings JS  */}
                <script src="../../assets/js/profile-settings.js"></script>
                
                    {/* Fancybox JS  */}
                <script src="../../assets/plugins/fancybox/jquery.fancybox.min.js"></script>
                
                    {/* Slick JS  */}
                <script src="../../assets/js/slick.js"></script>
                
                {/* Custom JS  */}
                <script src="../../assets/js/script.js"></script>
            </>
        );
    }
}

export default FooterDesktop;