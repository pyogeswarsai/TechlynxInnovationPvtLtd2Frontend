import React, { useState, useEffect } from "react";
import "./Reviews.css";

function Reviews() {
  const reviews = [
    { name: "Prathyusha Kolluri", role: "Software Engineer", img: "pra.jpg", text: "Techlynx Innovations Pvt. Ltd. provides an excellent work culture that values innovation, teamwork, and personal growth. The company offers abundant opportunities for learning and career development, making it a truly rewarding place to work." },
    { name: "Renuka kolasanakoti", role: "HR", img: "re.jpg", text: "A beautiful platform for software as well HR career, if you have big dream into software fields -you can get it true through the TECHLYNX INNOVATIONS PRIVATE LIMITED COMPANY which is located in Guntur, Andhra Pradesh." },
    { name: "vignasai chunduru", role: "HR", img: "vig.jpg", text: "Beautifull platform for Software as well HR career." },
    { name: "Yogeshwarsai polisetty", role: "Team Leader", img: "yog.jpg", text: "Techlynx Innovations Pvt. Ltd gives us high-quality solutions at the right cost. The team is supportive, innovative and easy to work with. It's also a great place for students and freshers to grow and learn. A perfect partner for business looking for reliable and modern tech solutions." },
    { name: "Meghana kunchanapalli", role: "Trainee", img: "me.jpg", text: "It is a good platform to start career and improve skills. the team is Friendly and supportive." },
    { name: "Bushra Shaik", role: "Team Leader", img: "bu.jpg", text: "Great company with excellent service and a professional team. Highly recommended for freshers." },
    { name: "chandra shekar kadiyala", role: "Trainee", img: "cha.jpg", text: "Techlynx Innovations Pvt Ltd is a leading IT company known for delivering innovative solutions. Their expertise in technology and commitment to quality is impressive. The team is professional and responsive, ensuring timely project delivery. Highly recommended for businesses seeking reliable tech partners." },
    { name: "Sravani martham", role: "Trainee", img: "sra.jpg", text: "Techlynx Innovations Private limited is a Good company to start career,it is the best platform for freshers and management services is excellent .it's a wonderful to grow personally and professionally it is the best opportunities for learning and career development." },
    { name: "jhansi vemula", role: "Trainee", img: "ja.jpg", text: "Techlynx Innovations Pvt Ltd is a workplace where we feel comfortable, supported, and respected.It offers us a good work-life balance.I appreciate the company because it prioritize capabilities and offer flexibility. Techlynx gives opportunities for career development and learning new skills." },
    { name: "Chaitanaya gadiboena", role: "Trainee", img: "chai.jpg", text: "TECHLYNX INNOVATIONS PVT LTD IS THE BEST PLATFORM TO OURSELF." },
    { name: "Harshith Sai bontha", role: "Team Leader", img: "harry.jpg", text: "I had a wonderful experience with this company. The team is highly professional, approachable, and always ready to assist with a positive attitude." },
    { name: "Imam Chan Basha Shaik", role: "Team Leader", img: "chan.jpg", text: "It's a Good Platform to work and grow in life personally, professionally. Good working culture friendly atomsphere." },
  ];

  // 🔹 Responsive chunk size
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 640) {
        setChunkSize(1); // 📱 Phone → 1 card
      } else if (window.innerWidth < 992) {
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
