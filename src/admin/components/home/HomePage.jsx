import React, { Component } from 'react'
import Dashboard from './Dashboard'
import NavMenuDesktop from '../partials/NavMenuDesktop'
import NavMenuMobile from '../partials/NavMenuMobile'
import FooterDesktop from '../partials/FooterDesktop'
import FooterMobile from '../partials/FooterMobile'

export class HomePage extends Component {
  render() {
    return (
         <>
            <div class="main-wrapper">
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                {/* things you want to display on the index page gos here */}
                <SideBar />

                <Dashboard />
                {/* things you want to display on the index page gos here */}

                <div className="Desktop">
                    <FooterDesktop />
                </div>

                <div className="Mobile">
                    <FooterMobile />
                </div>
            </div>
      </>
    )
  }
}

export default HomePage
