import React, { useState } from "react";
import { FaShareAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Homepage.css";

const socialLinks = [
  { icon: <FaFacebookF />, link: "https://www.facebook.com/people/Techlynx-Innovations/61579158831359/" },
  { icon: <FaTwitter />, link: "https://x.com/TechlynxLimited" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/techlynxinnovations/" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/nagul-meera-shaik-0b8650379/" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@techlynxinnovationsprivatelimi" },
];

const Homesocialmedia = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-socials">
      <div
        className="main-btn"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <FaShareAlt />
        <div className={`social-icons ${open ? "show" : ""}`}>
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homesocialmedia;
