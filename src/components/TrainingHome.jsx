import React from 'react';


function TrainingHome() {
  return (
    <div className="hero-fullscreen d-flex justify-content-center align-items-center p-3 text-dark fw-bold"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/fitness-concept-with-dumbbells-frame_23-2148531434.jpg')",
                 backgroundPosition:"center",
                 backgroundSize:"cover",
                 height:"70vh",
                 width:"100vw"    
         }}
      >
        <div className="overlay">
          <div className="text-section"
            style={{
              top:"30%",
              left:"10%",
            }}>
            <h1 className='fs-1 mt-5'>
              Most trusted Training Platform<br />
              <span className=' fs-1 text-center'>Training Courses with 100% Placement</span>
            </h1>
            <ul className='list-unstyled mt-3'>
              <li><span style={{color:"gold", fontSize:"25px"}}>&#9733;</span> 100% Certification pass Guarentee</li>
              <li><span style={{color:"gold", fontSize:"25px"}}>&#9733;</span> 250+ hours In-depth Classes</li>
              <li><span style={{color:"gold", fontSize:"25px"}}>&#9733;</span> Experts and  real-time project Faculty</li>
              <li><span style={{color:"gold", fontSize:"25px"}}>&#9733;</span> Patience and Friendly Nature</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default TrainingHome;
