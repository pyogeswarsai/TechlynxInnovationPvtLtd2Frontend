import React from 'react'
import './Homepage.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Homecontact = () => {
  return (
    <div className="cta-strip text-center py-5">
      <h2>🚀 Ready to Grow with Techlynx Training?</h2>
      <p className="lead">Join hundreds of learners achieving their career goals.</p>
      <div className="cta-buttons mt-4">
        <Link to="/contact-us">
          <button className="btn btn-warning mx-2">Contact US</button>
        </Link>
        <a href='mailto:hr@techlynxinnovations.com'>
          <button className="btn btn-light mx-2 fw-bold">Meet HR</button>
        </a>
      </div>
      <div className="cta-cards mt-5 d-flex justify-content-center flex-wrap">
      </div>
    </div>
  )
}

export default Homecontact;