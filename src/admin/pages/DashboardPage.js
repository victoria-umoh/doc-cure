import React, { Component } from 'react'
import NavMenuDesktop from '../components/partials/NavMenuDesktop'
import NavMenuMobile from '../components/partials/NavMenuMobile'
import FooterDesktop from '../components/partials/FooterDesktop'
import FooterMobile from '../components/partials/FooterMobile'
import SideBar from '../components/home/SideBar'
import Dashboard from '../components/home/Dashboard'
import { Col, Container, Row } from 'react-bootstrap'

export class DashboardPage extends Component {
  render() {
    return (
        <>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                {/* things you want to display on the index page gos here */}
                <Col lg={3} md={3} sm={12} >
                    <SideBar />
                </Col>

                <Col lg={9} md={9} sm={12} >
                    <Dashboard />
                </Col>
                {/* things you want to display on the index page gos here */}

            </Row>
        </Container>
        
        <div className="Desktop">
            <FooterDesktop />
        </div>

        <div className="Mobile">
            <FooterMobile />
        </div>
    </>
    )
  }
}

export default DashboardPage
