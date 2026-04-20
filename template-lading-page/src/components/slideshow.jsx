import { useState, useEffect } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const slides = [
  {
    image: slide1,
    title: "Services",
    description: "Discover our range of services designed to help your business grow.",
    buttonText: "Learn More",
    buttonLink: "#services"
  },
  {
    image: slide2,
    title: "Specialized Team",
    description: "Professionals ready to meet your needs.",
    buttonText: "Meet the Team",
    buttonLink: "#about"
  },
  {
    image: slide3,
    title: "Real Results",
    description: "Projects that deliver impact and growth.",
    buttonText: "View Portfolio",
    buttonLink: "#portfolio"
  }
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, description, buttonText, buttonLink } = slides[current];

  return (
    <div className="slideshow">
      <img src={image} alt={title} />
      <div className="caption">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={buttonLink} className="cta-btn">{buttonText}</a>
      </div>
      
    </div>
  );
}

export default Slideshow;
