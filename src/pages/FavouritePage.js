import React, { Component } from 'react'
import Favourites from '../components/home/Favourites'
import NavMenuDesktop from '../components/partials/NavMenuDesktop'
import NavMenuMobile from '../components/partials/NavMenuMobile'
import FooterDesktop from '../components/partials/FooterDesktop'
import FooterMobile from '../components/partials/FooterMobile'
export class FavouritePage extends Component {
  render() {
    return (
      <>
      <div className="Desktop">
          <NavMenuDesktop />
      </div>

      <div className="Mobile">
          <NavMenuMobile />
      </div>

      {/* things you want to display on the index page gos here */}

      <Favourites />

      {/* things you want to display on the index page gos here */}

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

export default FavouritePage
