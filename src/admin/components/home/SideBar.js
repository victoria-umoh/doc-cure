import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome, 
    // faLayout,
     faUsers, faUserPlus, faUser, faStar,
    faExchangeAlt, faVectorSquare, faFileAlt, faExclamationTriangle,
    faFile, faThLarge, faTable, faCode
} from '@fortawesome/free-solid-svg-icons';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const SideBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <>
          <div className="sidebar" id="sidebar">
            <PerfectScrollbar>
                <div className="sidebar-inner">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title"><span>Main</span></li>
                            <li><Link to="/admin-dashboard"><FontAwesomeIcon icon={faHome} /> <span>Dashboard</span></Link></li>
                            <li className="active"><Link to="/appointment-list">
                              {/* <FontAwesomeIcon icon={faLayout} />  */}
                              <span>Appointments</span></Link></li>
                            <li><Link to="/specialities"><FontAwesomeIcon icon={faUsers} /> <span>Specialities</span></Link></li>
                            <li><Link to="/doctor-list"><FontAwesomeIcon icon={faUserPlus} /> <span>Doctors</span></Link></li>
                            <li><Link to="/patient-list"><FontAwesomeIcon icon={faUser} /> <span>Patients</span></Link></li>
                            <li><Link to="/review"><FontAwesomeIcon icon={faStar} /> <span>Reviews</span></Link></li>
                            <li><Link to="/transactions-list"><FontAwesomeIcon icon={faExchangeAlt} /> <span>Transactions</span></Link></li>
                            <li><Link to="/settings"><FontAwesomeIcon icon={faVectorSquare} /> <span>Settings</span></Link></li>
                            <li className={`submenu ${activeMenu === 'reports' ? 'active' : ''}`}>
                                <a href="#" onClick={() => toggleMenu('reports')}><FontAwesomeIcon icon={faFileAlt} /> <span> Reports</span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: activeMenu === 'reports' ? 'block' : 'none' }}>
                                    <li><Link to="/invoice-report">Invoice Reports</Link></li>
                                </ul>
                            </li>
                            <li className="menu-title"><span>Pages</span></li>
                            <li><Link to="/profile"><FontAwesomeIcon icon={faUserPlus} /> <span>Profile</span></Link></li>
                            <li className={`submenu ${activeMenu === 'authentication' ? 'active' : ''}`}>
                                <a href="#" onClick={() => toggleMenu('authentication')}><FontAwesomeIcon icon={faFileAlt} /> <span> Authentication </span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: activeMenu === 'authentication' ? 'block' : 'none' }}>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/forgot-password">Forgot Password</Link></li>
                                    <li><Link to="/lock-screen">Lock Screen</Link></li>
                                </ul>
                            </li>
                            <li className={`submenu ${activeMenu === 'error' ? 'active' : ''}`}>
                                <a href="#" onClick={() => toggleMenu('error')}><FontAwesomeIcon icon={faExclamationTriangle} /> <span> Error Pages </span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: activeMenu === 'error' ? 'block' : 'none' }}>
                                    <li><Link to="/error-404">404 Error</Link></li>
                                    <li><Link to="/error-500">500 Error</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/blank-page"><FontAwesomeIcon icon={faFile} /> <span>Blank Page</span></Link></li>
                            <li className="menu-title"><span>UI Interface</span></li>
                            <li><Link to="/components"><FontAwesomeIcon icon={faVectorSquare} /> <span>Components</span></Link></li>
                            <li className={`submenu ${activeMenu === 'forms' ? 'active' : ''}`}>
                                <a href="#" onClick={() => toggleMenu('forms')}><FontAwesomeIcon icon={faThLarge} /> <span> Forms </span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: activeMenu === 'forms' ? 'block' : 'none' }}>
                                    <li><Link to="/form-basic-inputs">Basic Inputs</Link></li>
                                    <li><Link to="/form-input-groups">Input Groups</Link></li>
                                    <li><Link to="/form-horizontal">Horizontal Form</Link></li>
                                    <li><Link to="/form-vertical">Vertical Form</Link></li>
                                    <li><Link to="/form-mask">Form Mask</Link></li>
                                    <li><Link to="/form-validation">Form Validation</Link></li>
                                </ul>
                            </li>
                            <li className={`submenu ${activeMenu === 'tables' ? 'active' : ''}`}>
                                <a href="#" onClick={() => toggleMenu('tables')}><FontAwesomeIcon icon={faTable} /> <span> Tables </span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: activeMenu === 'tables' ? 'block' : 'none' }}>
                                    <li><Link to="/tables-basic">Basic Tables</Link></li>
                                    <li><Link to="/data-tables">Data Table</Link></li>
                                </ul>
                            </li>
                            <li className={`submenu ${activeMenu === 'multiLevel' ? 'active' : ''}`}>
                                <a href="javascript:void(0);" onClick={() => toggleMenu('multiLevel')}><FontAwesomeIcon icon={faCode} /> <span>Multi Level</span> <span className="menu-arrow"></span></a>
                                <ul style={{ display: activeMenu === 'multiLevel' ? 'block' : 'none' }}>
                                    <li className={`submenu ${activeMenu === 'level1' ? 'active' : ''}`}>
                                        <a href="javascript:void(0);" onClick={() => toggleMenu('level1')}><span>Level 1</span> <span className="menu-arrow"></span></a>
                                        <ul style={{ display: activeMenu === 'level1' ? 'block' : 'none' }}>
                                            <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                            <li className={`submenu ${activeMenu === 'level2' ? 'active' : ''}`}>
                                                <a href="javascript:void(0);" onClick={() => toggleMenu('level2')}><span>Level 2</span> <span className="menu-arrow"></span></a>
                                                <ul style={{ display: activeMenu === 'level2' ? 'block' : 'none' }}>
                                                    <li><a href="javascript:void(0);">Level 3</a></li>
                                                    <li><a href="javascript:void(0);">Level 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"><span>Level 1</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </PerfectScrollbar>
        </div>
        </>
    );
}

export default SideBar;
