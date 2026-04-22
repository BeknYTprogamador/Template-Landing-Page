import { useState, useEffect } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

const translations = { en, pt };

function Slideshow({ lang }) {
  const [current, setCurrent] = useState(0);
  const slides = translations[lang].slides; // pega os textos do JSON
  const images = [slide1, slide2, slide3];  // imagens locais

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const { title, description, buttonText, buttonLink } = slides[current];

  return (
    <div className="slideshow">
      <img src={images[current]} alt={title} />
      <div className="caption">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={buttonLink} className="cta-btn">{buttonText}</a>
      </div>
    </div>
  );
}

export default Slideshow;
