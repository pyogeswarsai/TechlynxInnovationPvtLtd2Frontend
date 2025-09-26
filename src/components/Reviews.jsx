import React, { useState, useEffect } from "react";
import "./Reviews.css";

function Reviews() {
  const reviews = [
    { name: "Prathyusha Kolluri", role: "Operational Manager", img: "pra.jpg", text: "Techlynx Innovations Pvt.Ltd, provides an excellent work culture that values innovation, teamwork, personal growth. The company offers abundant opportunities for career development, making it a truly rewarding place to work." },
    { name: "Renuka Kolasanakoti", role: "HR", img: "re.jpg", text: "A beautiful platform for software as well HR career. If you have big dream into software fields - you can get it true through. The TECHLYNX INNOVATIONS PRIVATE LIMITED COMPANY which is located in Guntur, 522002, Andhra Pradesh." },
    { name: "Vignasai Chunduru", role: "HR", img: "vig.jpg", text: "Beautifull platform for Software as well as HR career. The company helps for learning and career development, Great place to work, friendly atomsphere. Techlynx Innovations Pvt.Ltd gives us high-quality solutions." },
    { name: "Yogeswarsai Polisetty", role: "Team Leader", img: "yog.jpg", text: "Techlynx Innovations Pvt. Ltd gives us high-quality solutions at the right cost. It's also a great place for students, freshers to grow, learn. A perfect partner for business looking for reliable, modern tech solutions." },
    { name: "Meghana Kunchanapalli", role: "Trainee", img: "me.jpg", text: "It is a good platform to start career. The team is Friendly and Supportive. Managers guide well and encourage growth. The company focuses on teamwork, innovation. Overall, it is a good company for career development." },
    { name: "Bushra Shaik", role: "Team Leader", img: "bu.jpg", text: "Great company with excellent service and a professional team. Highly recommended for freshers. The company helps for learning and career development, Great place to work, friendly atomsphere. The company focuses on teamwork and innovation." },
    { name: "Chandra Sekhar Kadiyala", role: "Trainee", img: "cha.jpg", text: "Techlynx Innovations Pvt Ltd is a leading IT company known for delivering innovative solutions. Their expertise in technology and commitment to quality is impressive. The team is professional and responsive, ensuring timely project delivery." },
    { name: "Sravani Martham", role: "Trainee", img: "sra.jpg", text: "Techlynx Innovations Private limited is a Good company to start career, it is the best platform for freshers, management services is Excellent. It's a wonderful to grow personally and professionally it is the best opportunities for learning, career development." },
    { name: "Jhansi Vemula", role: "Trainee", img: "ja.jpg", text: "Techlynx Innovations Pvt Ltd, we feel comfortable, supported, respected. It offers us a good work-life balance. I appreciate the company because it prioritize capabilities, offer flexibility. Techlynx gives opportunities for career development learning new skills." },
    { name: "Chaitanya Gadiboena", role: "Trainee", img: "chai.jpg", text: "Techlynx Innovations pvt.ltd is the best platform to ourself. The company focuses on teamwork and innovation. The office culture is professional and respectful. Overall, it is a good company for career development. The company gives good exposure to real projects." },
    { name: "Harshith Sai Bontha", role: "Team Leader", img: "harry.jpg", text: "I had a wonderful experience with this company. The team is highly professional, approachable, and always ready to assist with a positive attitude. Overall, it is a good company for career development. The company gives good exposure to real projects." },
    { name: "Imam Chan Basha Shaik", role: "Team Leader", img: "chan.jpg", text: "It's a Good Platform to work and grow in life personally, professionally. Good working culture friendly atomsphere. Managers guide well and encourage growth. It is a nice place to learn and improve technical knowledge. The office culture is professional and respectful." },
  ];

  // 🔹 Responsive chunk size
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 640) {
        setChunkSize(1); // 📱 Phone → 1 card
      } else if (window.innerWidth < 992) {
        setChunkSize(2); // 📱 Tablet → 2 cards
      } else if (window.innerWidth < 1440) {
        setChunkSize(2); // 📱 Tablet → 2 cards
      } else {
        setChunkSize(3); // 💻 Laptop → 3 cards
      }
    };

    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  // Group reviews based on chunkSize
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += chunkSize) {
    groupedReviews.push(reviews.slice(i, i + chunkSize));
  }

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">
        What Our <span className="fw-bold">People Say</span>
      </h2>
<div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">

  {/* Carousel items */}
  <div className="carousel-inner">
    {groupedReviews.map((group, i) => (
      <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
        <div className="row justify-content-center">
          {group.map((review, j) => (
            <div key={j} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="review-card shadow-sm p-3 text-center">
                <img src={review.img} alt={review.name} className="rounded-circle mb-3" />
                <h6 className="fw-bold">{review.name}</h6>
                <small className="text-muted d-block mb-2">{review.role}</small>
                <p className="review-text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>

  {/* ✅ Indicators after carousel-inner */}
  <div className="carousel-indicators indicators-outside">
    {groupedReviews.map((_, i) => (
      <button
        key={i}
        type="button"
        data-bs-target="#reviewsCarousel"
        data-bs-slide-to={i}
        className={i === 0 ? "active" : ""}
        aria-current={i === 0 ? "true" : "false"}
        aria-label={`Slide ${i + 1}`}
      ></button>
    ))}
  </div>
</div>
      

        </div>
      
  );
}

export default Reviews;