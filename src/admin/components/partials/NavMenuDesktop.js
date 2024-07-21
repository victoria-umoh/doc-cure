import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import Avatar from '../../assets/img/profiles/avatar-01.jpg'
// import LogoSmall from '../../assets/img/logo-small.png'
import Patient3 from '../../assets/img/patients/patient3.jpg'
import Patient2 from '../../assets/img/patients/patient2.jpg'
import Patient1 from '../../assets/img/patients/patient1.jpg'
import DoctorThumb1 from '../../assets/img/doctors/doctor-thumb-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Col, Button } from 'react-bootstrap'

export class NavMenuDesktop extends Component {
  render() {
    return (
        <>
            <div className='TopSectionDown' style={{ marginBottom: '80px' }} >
                <Navbar fixed={"top"} bg="light" fluid={true} className="header navbar shadow-sm bg-white p-2 m-0">
                    
                    <Col className='mx-3' lg={4} md={4} sm={12} xs={12}>

                        <div className="header-left">
                            <Link to="/admin-dashboard" className="logo">
                                <img src={Logo} alt="Logo" />
                            </Link>
                            {/* <Link to="/admin-dashboard" className="logo logo-small">
                                <img src={LogoSmall} alt="Logo" width="30" height="30" />
                            </Link> */}
                        </div>
                        {/* <a href="javascript:void(0);" id="toggle_btn">
                            <i className="fe fe-text-align-left"></i>
                        </a> */}
                        
                        
                        {/* Mobile Menu Toggle */}
                        {/* <a className="mobile_btn" id="mobile_btn">
                            <FontAwesomeIcon icon={faBars} />
                        </a> */}
                        {/* /Mobile Menu Toggle */}
                    </Col>
                

                    <Col className='' lg={4} md={4} sm={12} xs={12}>
                        <div className="top-nav-search">
                            <form>
                                <input type="text" className="form-control" placeholder="Search here" />
                                <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                            </form>
                        </div>
                    </Col>
                
            
                
                    {/* Header Right Menu */}
                    <Col className='' lg={4} md={4} sm={12} xs={12}>
                        <ul className="nav user-menu">

                            {/* Notifications */}
                            <li className="nav-item dropdown noti-dropdown">
                                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                    <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px', color: 'gray', border: 'black' }} />
                                    <sup><span className="badge badge-pill bg-danger">3</span></sup>
                                </a>
                                <div className="dropdown-menu notifications">
                                    <div className="topnav-dropdown-header">
                                        <span className="notification-title">Notifications</span>
                                        <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                                    </div>
                                    <div className="noti-content">
                                        <ul className="notification-list">
                                            <li className="notification-message">
                                                <a href="#">
                                                    <div className="media">
                                                        <span className="avatar avatar-sm">
                                                            <img className="avatar-img rounded-circle" alt="User" src={DoctorThumb1} />
                                                        </span>
                                                        <div className="media-body">
                                                            <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                                                            <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="notification-message">
                                                <a href="#">
                                                    <div className="media">
                                                        <span className="avatar avatar-sm">
                                                            <img className="avatar-img rounded-circle" alt="User" src={Patient1} />
                                                        </span>
                                                        <div className="media-body">
                                                            <p className="noti-details"><span className="noti-title">Charlene Reed</span> has booked her appointment to <span className="noti-title">Dr. Ruby Perrin</span></p>
                                                            <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="notification-message">
                                                <a href="#">
                                                    <div className="media">
                                                        <span className="avatar avatar-sm">
                                                            <img className="avatar-img rounded-circle" alt="User" src={Patient2} />
                                                        </span>
                                                        <div className="media-body">
                                                            <p className="noti-details"><span className="noti-title">Travis Trimble</span> sent an amount of $210 for his <span className="noti-title">appointment</span></p>
                                                            <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="notification-message">
                                                <a href="#">
                                                    <div className="media">
                                                        <span className="avatar avatar-sm">
                                                            <img className="avatar-img rounded-circle" alt="User" src={Patient3} />
                                                        </span>
                                                        <div className="media-body">
                                                            <p className="noti-details"><span className="noti-title">Carl Kelly</span> send a message <span className="noti-title"> to his doctor</span></p>
                                                            <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="topnav-dropdown-footer">
                                        <a href="#">View all Notifications</a>
                                    </div>
                                </div>
                            </li>
                            {/* /Notifications */}
                            
                            {/* User Menu */}
                            <li className="nav-item dropdown has-arrow">
                                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                    <span className="user-img">
                                        <img className="rounded-circle" src={Avatar} width="31" alt="Ryan Taylor" />
                                    </span>
                                </a>
                                <div className="dropdown-menu">
                                    <div className="user-header">
                                        <div className="avatar avatar-sm">
                                            <img src={Avatar} alt="User" className="avatar-img rounded-circle" />
                                        </div>
                                        <div className="user-text">
                                            <h6>Ryan Taylor</h6>
                                            <p className="text-muted mb-0">Administrator</p>
                                        </div>
                                    </div>
                                    <Link to="/profile" className="dropdown-item">My Profile</Link>
                                    <Link to="/settings" className="dropdown-item">Settings</Link>
                                    <Link to="/login" className="dropdown-item">Logout</Link>
                                </div>
                            </li>
                            {/* /User Menu */}
                            
                        </ul>
                    </Col>
                    {/* /Header Right Menu */}              
                </Navbar>
          </div>
        </>
    )
  }
}

export default NavMenuDesktop
