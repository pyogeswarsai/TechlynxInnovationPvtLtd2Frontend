import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center display-4 fw-bold mb-6">Get In Touch</h2>
      <p className="text-center fs-5 text-secondary mb-5">
        Ready to advance your tech career? Contact us today to learn about our{" "}
        <br /> innovative training programs and start your journey to success.
      </p>

      {/* Contact Methods */}
      <div className="row justify-content-center mb-5">
        {[
          {
            icon: "📞",
            title: "Phone",
            desc: "Call us directly",
            contact: "+91-9989681812",
            href: "tel:+919989681812",
          },
          {
            icon: "✉️",
            title: "Email",
            desc: "Send us a mail",
            contact: "info@techlynxinnovations.com, hr@techlynxinnovations.com",
            href: "mailto:info@techlynxinnovations.com,hr@techlynxinnovations.com",
          },
          {
            icon: "📍",
            title: "Location",
            desc: "Visit our Company",
            contact:
              "33-6-73 Arundelpet 19/3, Opp Rabindranath Tagore, Brodipet, Guntur, Andhra Pradesh, India, 522002",
            href: "https://maps.app.goo.gl/Geef3xaRQJkSco6E9",
          },
          {
            icon: "🕒",
            title: "Hours",
            desc: "We're open",
            contact: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center"
          >
            <div
              className="card p-4 text-center custom-card rounded w-100"
              style={{ maxWidth: "18rem" }}
            >
              <div className="fs-1 mb-3 icon-container">{item.icon}</div>
              <h5 className="fs-4">{item.title}</h5>
              <p>{item.desc}</p>
              <a
                href={item.href}
                className="contact-link fw-bold text-decoration-none"
              >
                {item.contact}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
