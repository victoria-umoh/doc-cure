import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronDown, faHospital } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/img/logo.png';
import '../../assets/css/navMenuDesktop.css';

class NavMenuDesktop extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" className="header navbar shadow-sm bg-white p-5 m-0">
                    <Row className="w-100 custom-row">
                        <Col lg={2} md={2} sm={12} xs={12} className="custom-col order-1">
                            <div className="navbar-header">
                                <a id="mobile_btn" href="javascript:void(0);">
                                    <span className="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </a>
                                <Link to="/" className="navbar-brand logo">
                                    <img src={Logo} className="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={12} xs={12} className="custom-col order-2">
                            <div className="main-menu-wrapper">
                                <div className="menu-header">
                                    <Link to="/" className="menu-logo">
                                        <img src={Logo} className="img-fluid" alt="Logo" />
                                    </Link>
                                    <Link to="/" id="menu_close" className="menu-close" href="javascript:void(0);">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </Link>
                                </div>
                                <ul className="main-nav">
                                    <li className="link-items"> <Link to="/" className="link-items">Home</Link> </li>
                                    <li className="has-submenu"> <Link to="/" className="link-items">  Doctors <FontAwesomeIcon icon={faChevronDown} /> </Link>
                                        <ul className="submenu">
                                            <li> <Link to="/doctor-dashboard" className="link-items">Doctor Dashboard</Link> </li>
                                            <li> <Link to="/appointments" className="link-items">Appointments</Link>  </li>
                                            <li> <Link to="/schedule-timings" className="link-items">Schedule Timing</Link> </li>
                                            <li> <Link to="/my-patients" className="link-items">Patients List</Link> </li>
                                            <li> <Link to="/patient-profile" className="link-items">Patients Profile</Link> </li>
                                            <li> <Link to="/chat-doctor" className="link-items">Chat</Link> </li>
                                            <li> <Link to="/invoices" className="link-items">Invoices</Link> </li>
                                            <li> <Link to="/doctor-profile-settings" className="link-items"> Profile Settings </Link> </li>
                                            <li> <Link to="/reviews" className="link-items">Reviews</Link> </li>
                                            <li> <Link to="/doctor-register" className="link-items">Doctor Register</Link> </li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu"> <Link to="#" className="link-items"> Patients <FontAwesomeIcon icon={faChevronDown} /> </Link>
                                        <ul className="submenu">
                                            <li> <Link to="/search" className="link-items">Search Doctor</Link> </li>
                                            <li> <Link to="/doctor-profile" className="link-items">Doctor Profile</Link> </li>
                                            <li> <Link to="/booking" className="link-items">Booking</Link> </li>
                                            <li> <Link to="/checkout" className="link-items">Checkout</Link> </li>
                                            <li> <Link to="/booking-success" className="link-items">Booking Success</Link> </li>
                                            <li> <Link to="/patient-dashboard" className="link-items">Patient Dashboard</Link> </li>
                                            <li> <Link to="/favourites" className="link-items">Favourites</Link> </li>
                                            <li> <Link to="/chat" className="link-items">Chat</Link> </li>
                                            <li> <Link to="/profile-settings" className="link-items">Profile Settings</Link> </li>
                                            <li> <Link to="/change-password" className="link-items">Change Password</Link> </li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu"> <Link to="#" className="link-items"> Pages <FontAwesomeIcon icon={faChevronDown} /> </Link>
                                        <ul className="submenu">
                                            <li> <Link to="/voice-call" className="link-items">Voice Call</Link> </li>
                                            <li> <Link to="/video-call" className="link-items">Video Call</Link> </li>
                                            <li> <Link to="/search" className="link-items">Search Doctors</Link> </li>
                                            <li> <Link to="/calendar" className="link-items">Calendar</Link> </li>
                                            <li> <Link to="/components" className="link-items">Components</Link> </li>
                                            <li className="has-submenu">
                                                <Link to="/invoices" className="link-items">Invoices</Link>
                                                <ul className="submenu">
                                                    <li> <Link to="/invoices" className="link-items">Invoices</Link> </li>
                                                    <li> <Link to="/invoice-view" className="link-items">Invoice View</Link> </li>
                                                </ul>
                                            </li>
                                            <li> <Link to="/blank-page" className="link-items">Starter Page</Link>  </li>
                                            <li> <Link to="/login" className="link-items">Login</Link> </li>
                                            <li> <Link to="/register" className="link-items">Register</Link> </li>
                                            <li> <Link to="/forgot-password" className="link-items">Forgot Password</Link> </li>
                                        </ul>
                                    </li>
                                    <li> <Link to="/admin-dashboard" target="_blank" className="link-items">  Admin </Link> </li>
                                    <li className="login-link"> <Link to="/login" className="link-items">Login / Signup</Link> </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12} className="custom-col order-3">
                            <ul className="nav header-navbar-rht">
                                <li className="nav-item contact-item">
                                    <div className="header-contact-img">
                                        <FontAwesomeIcon icon={faHospital} />
                                    </div>
                                    <div className="header-contact-detail">
                                        <p className="contact-header">Contact</p>
                                        <p className="contact-info-header">+1 315 369 5943</p>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link header-login">
                                        Login / Signup
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Navbar>
            </>
        );
    }
}

export default NavMenuDesktop;
