import React, { Component } from 'react'
import NavMenuDesktop from '../components/partials/NavMenuDesktop'
import NavMenuMobile from '../components/partials/NavMenuMobile'
import FooterDesktop from '../components/partials/FooterDesktop'
import FooterMobile from '../components/partials/FooterMobile'
import Login from '../components/home/Login';

export class LoginPage extends Component {
  render() {
    return (
        <>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>
            
            <Login />

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

export default LoginPage
