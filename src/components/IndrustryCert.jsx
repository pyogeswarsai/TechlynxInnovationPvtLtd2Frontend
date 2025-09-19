
// import React, { useState } from "react";

// const certificates = [
//   {
//     title: "Python Full Stack",
//     desc: "Gain in-depth knowledge of both frontend and backend development with Python. Learn Django, Flask, REST APIs, and database integration with MySQL/PostgreSQL.",
//     img: 601,
//     modal: "certPython",
//   },
//   {
//     title: "Java Full Stack",
//     desc: "Master Java-based web development including Spring Boot, Hibernate, and REST APIs. Learn Angular for frontend, integrate with databases like Oracle & MySQL.",
//     img: 602,
//     modal: "certJava",
//   },
//   {
//     title: "Data Science",
//     desc: "Explore data analysis, visualization, statistical modeling, and machine learning with Python and R. Work on real-world datasets and predictive modeling.",
//     img: 603,
//     modal: "certDataScience",
//   },
//   // ➝ Add the rest of your certificates here (trimmed for example)
// ];

// function IndrustryCert() {
//   const [openModal, setOpenModal] = useState(null);

//   return (
//     <div
//       className="font-sans text-white min-h-screen"
//       style={{
//         backgroundImage: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80'),
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Header Section */}
//       <header className="text-center py-12 bg-black bg-opacity-50">
//         <h1 className="text-4xl font-bold mb-2">Industry Certifications</h1>
//         <p className="text-lg">
//           Explore our course achievements and career-ready skills
//         </p>
//       </header>

//       {/* Cards */}
//       <main className="container mx-auto px-4 py-12 space-y-12">
//         {certificates.map((cert, index) => (
//           <div
//             key={cert.modal}
//             className={`glass-card flex flex-col ${
//               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             } items-center overflow-hidden shadow-lg`}
//             style={{
//               backdropFilter: "blur(10px)",
//               background: "rgba(255,255,255,0.15)",
//               borderRadius: "1rem",
//               border: "1px solid rgba(255,255,255,0.2)",
//             }}
//           >
//             <div className="md:w-1/2 w-full">
//               <img
//                 src={`https://picsum.photos/600/400?random=${cert.img}`}
//                 alt={cert.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="md:w-1/2 w-full p-8">
//               <h2 className="text-3xl font-bold mb-4">{cert.title}</h2>
//               <p className="mb-4">{cert.desc}</p>
//               <button
//                 onClick={() => setOpenModal(cert.modal)}
//                 className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold"
//               >
//                 View Certificate
//               </button>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Modals */}
//       {certificates.map((cert, index) =>
//         openModal === cert.modal ? (
//           <div
//             key={cert.modal}
//             className="fixed inset-0 flex bg-black bg-opacity-70 items-center justify-center"
//           >
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
//               <h3 className="text-2xl font-bold mb-4">
//                 {cert.title} Certificate
//               </h3>
//               <img
//                 src={`https://picsum.photos/800/500?random=${700 + index}`}
//                 alt={`${cert.title} Certificate`}
//                 className="w-full rounded"
//               />
//               <button
//                 onClick={() => setOpenModal(null)}
//                 className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         ) : null
//       )}
//     </div>
//   );
// }

// export default IndrustryCert;



