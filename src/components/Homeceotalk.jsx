import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./Homepage.css";

const Homeceotalk = () => {
  return (
    <section className="ceo-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* CEO Image */}
          <Col
            md={5}
            className="text-center mb-4 mb-md-0"
            data-aos="fade-right"
          >
            <div className="ceo-img-wrapper">
              <div className="glow-ring"></div>
              <img
                src="/ceoSir.png" // replace with CEO image
                alt="CEO"
                className="ceo-img"
              />
            </div>
            <h5 className="mt-3 fw-bold">Mr. Nagul Meera Shaik</h5>
            <p className="text-muted">
              Founder & CEO – Techlynx Innovations Pvt Ltd
            </p>
          </Col>

          {/* CEO Message */}
          <Col md={7} data-aos="fade-up">
            <div className="ceo-message-box shadow-lg p-4 rounded-4">
              <div className="heading-wrapper mb-3">
                <h3 className="fw-bold">Message from Our CEO</h3>
                <div className="heading-underline"></div>
              </div>
              <FaQuoteLeft className="quote-bg-icon" />

              {/* Typewriter Effect */}
              <div className="lead mb-3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "I’m a visionary entrepreneur with 8+ years in software and IT leadership, building scalable digital solutions.<br/>" +
                        "My vision is to bridge business needs and IT gaps with innovative, cost-effective solutions.<br/>" +
                        "Our core values: Integrity & Trust, Customer-First Approach, Innovation with Simplicity."
                      )
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    delay: 35,
                    loop: false,
                  }}
                />

              </div>

              <p className="fw-semibold mb-0">— Nagul Meera Shaik</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Homeceotalk;
