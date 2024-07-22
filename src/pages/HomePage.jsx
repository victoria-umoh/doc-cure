import React, { Component } from 'react';
import NavMenuMobile from '../components/partials/NavMenuMobile';
import NavMenuDesktop from '../components/partials/NavMenuDesktop';
import FooterDesktop from '../components/partials/FooterDesktop';
import FooterMobile from '../components/partials/FooterMobile';
import HomeBanner from '../components/home/HomeBanner';
import Specialty from '../components/home/Specialty';
import Popular from '../components/home/Popular';
import Feature from '../components/home/Feature';

class HomePage extends Component {
    componentDidMount(){
        window.scroll(0,0);

      }

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
                <HomeBanner />

                <Specialty />

                <Popular />

                <Feature />
                {/* things you want to display on the index page gos here */}

                <div className="Desktop">
                    <FooterDesktop />
                </div>

                <div className="Mobile">
                    <FooterMobile />
                </div>
            </div>
            </>
        );
    }
}

export default HomePage;