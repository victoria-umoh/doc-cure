import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/react-fontawesome'; // Import the circle icon
import Slider1 from '../../assets/img/specialities/specialities-01.png';
import Slider2 from '../../assets/img/specialities/specialities-02.png';
import Slider3 from '../../assets/img/specialities/specialities-03.png';
import Slider4 from '../../assets/img/specialities/specialities-04.png';
import Slider5 from '../../assets/img/specialities/specialities-05.png';

export class Specialty extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const specialities = [
      { imgSrc: Slider1, name: 'Urology' },
      { imgSrc: Slider2, name: 'Neurology' },
      { imgSrc: Slider3, name: 'Orthopedic' },
      { imgSrc: Slider4, name: 'Cardiologist' },
      { imgSrc: Slider5, name: 'Dentist' },
    ];

    return (
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <Slider {...settings} className="specialities-slider slider">
                {specialities.map((speciality, index) => (
                  <div key={index} className="speciality-item text-center">
                    <div className="speciality-img">
                      <img src={speciality.imgSrc} className="img-fluid" alt="Speciality" />
                      {/* <FontAwesomeIcon icon={faCircle} aria-hidden="true" /> */}
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    </div>
                    <p>{speciality.name}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Specialty;
