import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt, faClock, faMoneyBillAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Doctor1 from '../../assets/img/doctors/doctor-01.jpg';
import Doctor2 from '../../assets/img/doctors/doctor-02.jpg';
import Doctor3 from '../../assets/img/doctors/doctor-03.jpg';
import Doctor4 from '../../assets/img/doctors/doctor-04.jpg';
import Doctor5 from '../../assets/img/doctors/doctor-05.jpg';
import Doctor6 from '../../assets/img/doctors/doctor-06.jpg';
import Doctor7 from '../../assets/img/doctors/doctor-07.jpg';
import Doctor8 from '../../assets/img/doctors/doctor-08.jpg';
import { Link } from 'react-router-dom';

export class Popular extends Component {
  render() {
    const doctors = [
      { id: 1, name: 'Ruby Perrin', speciality: 'MDS - Periodontology and Oral Implantology, BDS', location: 'Florida, USA', available: 'Fri, 22 Mar', price: '$300 - $1000', rating: 17, img: Doctor1 },
      { id: 2, name: 'Darren Elder', speciality: 'BDS, MDS - Oral & Maxillofacial Surgery', location: 'Newyork, USA', available: 'Fri, 22 Mar', price: '$50 - $300', rating: 35, img: Doctor2 },
      { id: 3, name: 'Deborah Angel', speciality: 'MBBS, MD - General Medicine, DNB - Cardiology', location: 'Georgia, USA', available: 'Fri, 22 Mar', price: '$100 - $400', rating: 27, img: Doctor3 },
      { id: 4, name: 'Sofia Brient', speciality: 'MBBS, MS - General Surgery, MCh - Urology', location: 'Louisiana, USA', available: 'Fri, 22 Mar', price: '$150 - $250', rating: 4, img: Doctor4 },
      { id: 5, name: 'Marvin Campbell', speciality: 'MBBS, MD - Ophthalmology, DNB - Ophthalmology', location: 'Michigan, USA', available: 'Fri, 22 Mar', price: '$50 - $700', rating: 66, img: Doctor5 },
      { id: 6, name: 'Katharine Berthold', speciality: 'MS - Orthopaedics, MBBS, M.Ch - Orthopaedics', location: 'Texas, USA', available: 'Fri, 22 Mar', price: '$100 - $500', rating: 52, img: Doctor6 },
      { id: 7, name: 'Linda Tobin', speciality: 'MBBS, MD - General Medicine, DM - Neurology', location: 'Kansas, USA', available: 'Fri, 22 Mar', price: '$100 - $1000', rating: 43, img: Doctor7 },
      { id: 8, name: 'Paul Richard', speciality: 'MBBS, MD - Dermatology , Venereology & Lepros', location: 'California, USA', available: 'Fri, 22 Mar', price: '$100 - $400', rating: 49, img: Doctor8 },
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <section className="section section-doctor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header">
                <h2>Book Our Doctor</h2>
                <p>Lorem Ipsum is simply dummy text</p>
              </div>
              <div className="about-content">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                <p>Web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>					
                <a href="javascript:;">Read More..</a>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider {...settings} className="doctor-slider slider">
                {doctors.map(doctor => (
                  <div key={doctor.id} className="profile-widget">
                    <div className="doc-img">
                      <Link to="/doctor-profile">
                        <img className="img-fluid" alt="User" src={doctor.img} />
                      </Link>
                      <Link to="/javascript:void(0)" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/doctor-profile">{doctor.name}</Link> 
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">{doctor.speciality}</p>
                      <div className="rating">
                        {[...Array(5)].map((star, index) => (
                          <FontAwesomeIcon key={index} icon={faStar} className={index < Math.floor(doctor.rating / 10) ? 'filled' : ''} />
                        ))}
                        <span className="d-inline-block average-rating">({doctor.rating})</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {doctor.location}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faClock} /> Available on {doctor.available}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faMoneyBillAlt} /> {doctor.price} 
                          <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link to="/doctor-profile" className="btn view-btn">View Profile</Link>
                        </div>
                        <div className="col-6">
                          <Link to="/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
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

export default Popular;
