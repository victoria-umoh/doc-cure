import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureImg from '../../assets/img/features/feature.png';
import Feature1 from '../../assets/img/features/feature-01.jpg';
import Feature2 from '../../assets/img/features/feature-02.jpg';
import Feature3 from '../../assets/img/features/feature-03.jpg';
import Feature4 from '../../assets/img/features/feature-04.jpg';
import Feature5 from '../../assets/img/features/feature-05.jpg';
import Feature6 from '../../assets/img/features/feature-06.jpg';

class Feature extends Component {
    render() {
        

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            initialSlide: 0,
            slidesToShow: 5, // to show 3 slides at once
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            arrows: false,
            centerMode: true, // center the current slide
            centerPadding: '0', // no padding around the centered slide
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        // dots: true,
                        // infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // dots: true,
                        // infinite: true,
                    }
                }
            ]
        };

        const features = [
            { src: Feature1, label: "Patient Ward" },
            { src: Feature2, label: "Test Room" },
            { src: Feature3, label: "ICU" },
            { src: Feature4, label: "Laboratory" },
            { src: Feature5, label: "Operation" },
            { src: Feature6, label: "Medical" }
        ];

        return (
            <section className="section section-features">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 features-img">
                            <img src={FeatureImg} className="img-fluid" alt="Feature" />
                        </div>
                        <div className="col-md-7">
                            <div className="section-header">
                                <h2 className="mt-2">Available Features in Our Clinic</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className="features-slider slider">
                                <Slider {...settings}>
                                    {features.map((feature, index) => (
                                        <div key={index} className="feature-item text-center">
                                            <img src={feature.src} className="img-fluid" alt={feature.label} />
                                            <p>{feature.label}</p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Feature;
