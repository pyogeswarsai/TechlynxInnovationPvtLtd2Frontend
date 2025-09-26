import React, { useState } from "react";
import axios from "axios";

const FeedbackSection = () => {
  const [feedbackCategory, setFeedbackCategory] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [ratingText, setRatingText] = useState("Click stars to rate");
  const [sliders, setSliders] = useState({
    courseQuality: 3,
    teachingMethod: 3,
    supportStaff: 3,
    valueMoney: 3,
    recommendation: 3,
    overallExperience: 3,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const ratingTexts = {
    1: "Poor - Needs significant improvement",
    2: "Fair - Below expectations",
    3: "Good - Meets expectations",
    4: "Very Good - Exceeds expectations",
    5: "Excellent - Outstanding experience",
  };

  const handleStarClick = (rating) => {
    setOverallRating(rating);
    setRatingText(ratingTexts[rating]);
  };

  const handleSliderChange = (e) => {
    const { id, value } = e.target;
    setSliders((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCategorySelect = (value) => {
    setFeedbackCategory(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackName = e.target.feedbackName.value.trim();
    const feedbackEmail = e.target.feedbackEmail.value.trim();
    const feedbackText = e.target.feedbackText.value.trim();
    const suggestions = e.target.suggestions.value.trim();
    const anonymous = e.target.anonymous.checked;

    if (
      !feedbackName ||
      !feedbackEmail ||
      !feedbackCategory ||
      !overallRating ||
      !feedbackText ||
      !suggestions
    ) {
      alert("Please fill in all required fields and provide a rating.");
      return;
    }

    const payload = {
      name: feedbackName,
      email: feedbackEmail,
      category: feedbackCategory,
      overall_rating: overallRating,
      course_quality: sliders.courseQuality,
      teaching_method: sliders.teachingMethod,
      support_staff: sliders.supportStaff,
      value_for_money: sliders.valueMoney,
      recommendation: sliders.recommendation,
      overall_experience: sliders.overallExperience,
      detailed_feedback: feedbackText,
      suggestions: suggestions,
    };

    try {
      const res = await axios.post("http://localhost:5000/feedback", payload);
      alert(res.data.message);

      setFormSubmitted(true);
      e.target.reset();
      setFeedbackCategory("");
      setOverallRating(0);
      setRatingText("Click stars to rate");
      setSliders({
        courseQuality: 3,
        teachingMethod: 3,
        supportStaff: 3,
        valueMoney: 3,
        recommendation: 3,
        overallExperience: 3,
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="h1 fw-bold text-dark mb-3 send">Share Your Feedback</h2>
        <p className="fs-5 text-secondary">
          Help us improve our training programs and services
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <div
          className="bg-white rounded-3xl p-3 p-md-4 custom-shadow w-100"
          style={{ maxWidth: "900px" }}
        >
          <form id="feedbackForm" className="d-grid gap-3" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Your Name *</label>
                <input
                  type="text"
                  name="feedbackName"
                  placeholder="Enter your name"
                  required
                  className="form-control rounded-xl"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Email Address *</label>
                <input
                  type="email"
                  name="feedbackEmail"
                  placeholder="Enter your email"
                  required
                  className="form-control rounded-xl"
                />
              </div>
            </div>

            {/* Category */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Feedback Category *</label>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {[
                  { label: "📚 Course Content", value: "course-content" },
                  { label: "👨‍🏫 Instructors", value: "instructors" },
                  { label: "🏢 Facilities", value: "facilities" },
                  { label: "🤝 Support", value: "support" },
                ].map((category, idx) => (
                  <div key={idx} className="col">
                    <div
                      onClick={() => handleCategorySelect(category.value)}
                      className={`p-3 text-center border rounded-xl transition-all cursor-pointer ${feedbackCategory === category.value
                          ? "border-primary bg-primary bg-opacity-10"
                          : "border-gray-200 bg-light"
                        }`}
                    >
                      <div className="fs-3 mb-2">
                        {category.label.split(" ")[0]}
                      </div>
                      <div className="fw-semibold">
                        {category.label.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Star Rating */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Overall Rating *</label>
              <div className="d-flex justify-content-center gap-4 mb-2 flex-wrap">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="star cursor-pointer d-inline-flex align-items-center justify-content-center rounded-circle"
                    onClick={() => handleStarClick(star)}
                    style={{
                      fontSize: window.innerWidth < 576 ? "3rem" : "4rem",   // bigger star symbol
                      width: window.innerWidth < 576 ? "4rem" : "5rem",      // bigger clickable area
                      height: window.innerWidth < 576 ? "4rem" : "5rem",
                      color: star <= overallRating ? "green" : "black",
                    }}
                  >
                    {star <= overallRating ? "★" : "☆"}
                  </span>
                ))}
              </div>

              <input
                type="hidden"
                name="overallRating"
                value={overallRating}
                required
              />

              <div className="text-center text-secondary">{ratingText}</div>
            </div>

            {/* Sliders */}
            <div className="row g-3">
              {[
                { label: "Course Quality", id: "courseQuality" },
                { label: "Teaching Method", id: "teachingMethod" },
                { label: "Support Staff", id: "supportStaff" },
                { label: "Value for Money", id: "valueMoney" },
                { label: "Recommendation", id: "recommendation" },
                { label: "Overall Experience", id: "overallExperience" },
              ].map((item, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <label className="form-label fw-semibold d-flex justify-content-between align-items-center">
                    {item.label}
                    <span>{sliders[item.id]}/5</span>
                  </label>
                  <input
                    type="range"
                    id={item.id}
                    min="1"
                    max="5"
                    value={sliders[item.id]}
                    className="form-range"
                    onChange={handleSliderChange}
                  />
                </div>
              ))}
            </div>

            {/* Feedback Text */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Your Detailed Feedback *</label>
              <textarea
                name="feedbackText"
                required
                rows="6"
                className="form-control rounded-xl p-2"
                placeholder="Please share your detailed feedback..."
              ></textarea>
            </div>

            {/* Suggestions */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Suggestions for Improvement *</label>
              <textarea
                name="suggestions"
                required
                rows="4"
                className="form-control rounded-xl p-2"
                placeholder="Any suggestions on how we can improve our services?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-3 rounded-xl shadow-lg"
            >
              Submit Feedback 📝
            </button>
          </form>

          {formSubmitted && (
            <div className="mt-4 p-3 bg-success text-white rounded-xl">
              🎉 Thank you for your feedback! We appreciate your help improving our programs.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
