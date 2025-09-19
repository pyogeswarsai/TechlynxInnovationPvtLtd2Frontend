import React from 'react';
import './Testimonials.css';
import { Button } from 'react-bootstrap';

const testimonials = [
    {
        name: "Yogeswar Sai",
        text: "I had a great experience at Techlynx Innovations Pvt. Ltd. The HR team was extremely supportive, and the management ensured a smooth learning environment. Working on live projects helped me gain practical skills and improve my technical abilities.",
        rating: 5,
    },
    {
        name: "Chandra Sekhar",
        text: "Techlynx Innovations Pvt. Ltd. provided excellent mentorship and a collaborative work culture. The HR and management team were always helpful and approachable. Live project training played a major role in enhancing my confidence and skills.",
        rating: 5,
    },
    {
        name: "Harshith Sai",
        text: "I'm thankful to Techlynx Innovations Pvt. Ltd. for giving me a platform to learn and grow. The support from the HR team and the exposure to real-time projects truly elevated my learning experience and career readiness.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <div className="testimonial-page ">

            <h2 className="text-center mt-3 mb-5 section-title">Voices from Within</h2>

            <div id="testimonialCarousel" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide-to={idx}
                            className={idx === 0 ? 'active' : ''}
                            aria-current={idx === 0}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <div className="carousel-inner">
                    {testimonials.map((t, i) => (
                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                            <div className="card testimonial-card mx-auto shadow-sm">
                                <div className="avatar-circle mx-auto">
                                    <span className="avatar-initial">{t.name[0]}</span>
                                </div>
                                <h5 className="text-center mt-3">{t.name}</h5>
                                <div className="text-warning text-center mb-2">
                                    {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                                </div>
                                <p className="testimonial-text text-black text-center">{t.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-3">
                <a href='https://www.google.com/maps/place/TECHLYNX+INNOVATIONS+PVT+LTD/@16.303086,80.4412121,17z/data=!4m8!3m7!1s0x3a4a750072463f81:0x99b6c2dc7b39e20f!8m2!3d16.303086!4d80.443787!9m1!1b1!16s%2Fg%2F11yhb3h6pd?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D'>
                <button
                    className="btn btn-info btn-md explore-btn mb-5 mt-2"
                    type="button"
                >   
                    Explore More
                </button></a>
            </div>
        </div>
    );
};

export default Testimonials;
