import React, { Component } from 'react';
import NavMenuDesktop from '../components/partials/NavMenuDesktop';
import NavMenuMobile from '../components/partials/NavMenuMobile';
import FooterDesktop from '../components/partials/FooterDesktop';
import FooterMobile from '../components/partials/FooterMobile';
import SideBar from '../components/home/SideBar';
import Dashboard from '../components/home/Dashboard';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/css/DashboardPage.css'; // Create a CSS file to fix the sidebar

export class DashboardPage extends Component {
  render() {
    return (
      <>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row>
            <div className="Desktop">
              <NavMenuDesktop />
            </div>

            <div className="Mobile">
              <NavMenuMobile />
            </div>

            <Col lg={2} md={2} sm={12}>
              <SideBar />
            </Col>

            <Col lg={10} md={10} sm={12} className="dashboard-content">
              <Dashboard />
            </Col>
          </Row>
        </Container>

        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </>
    );
  }
}

export default DashboardPage;
