import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Modes = () => {
  const modes = [
    {
      img: "https://img.icons8.com/fluency/96/classroom.png",
      title: "Classroom Training",
      text: "Interactive face-to-face classroom training with Real-time projects."
    },
    {
      img: "https://img.icons8.com/fluency/96/laptop.png",
      title: "Online Training",
      text: "Live instructor-led sessions accessible from anywhere."
    },
    {
      img: "https://img.icons8.com/fluency/96/conference.png",
      title: "Corporate Training",
      text: "Customized skill-building programs for your workforce."
    },
    {
      img: "https://img.icons8.com/fluency/96/video.png",
      title: "Video Based Training",
      text: "Flexible self-paced learning through recorded sessions."
    }
  ];

  return (
    <>
      {/* Whychoose Section */}
      <div className="container my-5">
        <h2 className="text-center mb-3">
          Why Techlynx Innovations pvt.Ltd. to Choose
        </h2>

        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-row gap-3 align-items-center p-4 border border-3 border-primary  rounded">
              <img
                src="https://th.bing.com/th/id/OIP.Es0ahXH3VLxAKG8vEr3QBgHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                style={{ width: "40px", height: "50px" }}
                alt="Certification"
              />
              100% Certification pass Guarentee
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex flex-row gap-3 align-items-center p-4 border border-3 border-grey border-primary rounded text-center">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.wb7D7rb2WqD8QGRhvDD93AHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
                style={{ width: "60px", height: "60px" }}
                alt="Syllabus"
              />
              Customized Syllabus for your needs.
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex flex-row gap-3 align-items-center p-4 border border-3 border-primary rounded text-center">
              <img
                src="https://th.bing.com/th/id/OIP.LUg-S0BuZugW_8RXyTUGBgHaFj?w=266&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                style={{ width: "50px", height: "50px" }}
                alt="Practical Training"
              />
              Practical Training and Competence Pricing.
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="d-flex flex-row gap-3 align-items-center p-4 border border-3 border-primary rounded text-center">
              <img
                src="https://th.bing.com/th/id/OIP.oXF0jB3IArbZe3sRnM_e6gHaHa?w=189&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                style={{ width: "60px", height: "60px" }}
                alt="Patience"
              />
              Patience and Friendly Nature
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="d-flex flex-row gap-3 align-items-center p-4 border border-3 border-primary rounded text-center">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.GsIVAGvu2h0dMYa9gF6SUAHaHp?r=0&pid=ImgDet&w=184&h=189&c=7&dpr=1.3&o=7&rm=3"
                style={{ width: "60px", height: "60px" }}
                alt="Experts"
              />
              Experts and real-time project Faculty
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="d-flex flex-row gap-3 align-items-center p-4 border border-3 border-primary rounded text-center">
              <img
                src="data:image/webp;base64,UklGRlIFAABXRUJQVlA4IEYFAADQJgCdASrDAOoAPp1Mo0wlpCOiJPRJgLATiWlu4W0RHeA4jlTtPlWa034drnePsmcSmkdx8egrnZ+pfYI/XLrI+hh+sY/iWdF6wksUoFwn5J3d3d3d3d3d3RSfnXXmbYu6yYTfaxR8kEhWqCGepFnQ+YFywNyVq+gYcgyyGRsMdawUf1Rej0V2GtI8mmSKd488IZVsjl1bzIY4H3WpxU89soFHylEKpgJJL0D8PaOeliIUbyuCBZS+ALMqtxstoyq0agTZHu6lw9b2AMoBXP0xfANvMcWKABDq84bSBGbuZvEupjo0FECYb1g0Ldu64h0Le0KGylilAtx3Cx8PkikDUofBp+CS7VWnl8knCTzD/xC1WkBxP3CRRi+hTd3d0bQxipl08zwDuWwSawksUoFwn5J3d3d3d3d3d3d3d3MAAP791AAGckrulqB0sdfwhsekyP+gR4HnN1AZHWjdOPfIWWR3d3yDsIGm8E7RO5pgtAsA+s0Fz42/eSF3ajjBMtxYk8vwFgu98N0y73V/j9kQlYh3hBu2xxnsa8RE3E3YAqZ5Saw/OhoiixW4m750JSwfda60Sen8LPzZHt/GHKUqf/bw80ZFV6hrCcfn/2xnAWlHf33O/lV4f8/8eUzj2B0Fng333zGPn+GGk48V8qCEYrMJ4M4Yi0fFb+npSe5vuXQIyH2knZbENx4zNHcuRTrqPttKOtxcOlSFiAUQJc4P319/JzP/qkEP04H55LMwjmoEIAAg4AzKBgyxezHcmggLElV+7ff1X41nAUOEGbI/qNGZm+/sQd+0gfLdcZcwV355FvyZ7gWIwUe3X9KMcfpQ5e5XO7PgweTNs6gbgO+Tv5VdZnEGP82Dz2IOvW4df09vppwhEegaI2VFvouvAzZiwEzM1P3wmIS7tGhiD+cyZytvber+rz1PXIuK8RUiaVPkdbeW/2h5sW6PUXFqIxN7f40uYgMAJ/hP+sFZvcB1ADyhnfn63R6o5ErqJZ9x4XDSLGKTC+QV/3PRi74/5vEMnLVX0K3/AlDE8s1WkSObK94+KZOEYQhfUD5efItK88E1B1GFo/TcTt/FvBxvJ96mZJceblAXcmVu7lWAWW+ZPDjcXUSYSxukses7eikSHPKXC4qr9ZAE01ODMyHVJXyC7Lzef1vkjXpA/4n3nj9G2vxllMad3YYkdJzouJLdQ0izwUjAmuiZ/zF6UXNStxQsPjRl0Y7tBRnruQe/rLTTcDSpdWPEcykziH+8C2ito6bE5t/TV5iNokdjK0RyJu8x8sFXYkgAuoO45IQvKZShPYQPmXVH0b3TvndBHAPdZmYomfrOrZUxjNRfBcwa6WYCs/FnHJhako7GtMIVldfkn7HgpScOO0tPIf89EWnnpIDhtOxlfqMU31g9HG/KdoziQy0ANFL8aV9h36TWTk8lubwOSGlK5gotkzR/Pbx7kb8pRLzhCdP99DpSwOgb8DrKPXAYruJ5M6ZX6WKJvNddLBuJ/+2ld7YjAhhqDW/NYF8BvYhlvnCdXMhxMz3mdpmwvpAaEimvaSuYmM8kL+R4ozseI9LAmFCQNV3U0IlJhKgf1/S4m9KF+kKkIgNgU54yAOmebEsEnxHRoio9Qtx4Yozgnb5b9S/wGfNhJCduoLH5auYgX+aiDAWoyP5rwK7hX4uyMxzU8m1jdbgPr7SzvCP3THHrLjucxpUoFMPi4oNej55JQexIRqMMMUdxYgApw3WRA/fSROsRSo35W2dIzVqG4lTQo7h1oj8LJuUsrCug9oUc7Mcvlv9eMbKGzZJlf7UAAAA="
                style={{ width: "60px", height: "60px" }}alt="Online Classes"
              />
              250+ hours In-depth Online Classes
            </div>
          </div>
        </div>
      </div>

      {/* Training Modes Section */}
      <div className="container-fluid py-4" style={{ backgroundColor: "#e9f0fa" }}>
        <h2 className="text-center mb-4 fw-bold">Training Modes</h2>
        <div className="container">
          <div className="row justify-content-center g-4">
            {modes.map((mode, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={index}>
                <div className="card h-100 text-center border-0 shadow-sm p-3 w-100">
                  <img
                    src={mode.img}
                    className="mx-auto mb-0"
                    alt={mode.title}
                    style={{ width: "70%", height: "70%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{mode.title}</h5>
                    <p className="card-text text-muted">{mode.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Modes;
