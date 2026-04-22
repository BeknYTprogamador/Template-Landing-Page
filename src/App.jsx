import { useState } from "react";
import Slideshow from "./components/Slideshow";
import en from "./locales/en.json";
import pt from "./locales/pt-br.json";

function App() {
  const [lang, setLang] = useState("en");
  const translations = { en, pt };
  const t = translations[lang];

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white mb-4 shadow-none">
        <div className="container-fluid">
          <a className="navbar-brand text-dark fw-bold" href="#">
            {t.navbar.logo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#services">
                  {t.navbar.services}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#about">
                  {t.navbar.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#portfolio">
                  {t.navbar.portfolio}
                </a>
              </li>
            </ul>
            {/* Language Selector */}
            <select
              className="form-select ms-3"
              style={{ width: "auto" }}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">{t.hero.title}</h1>
        <p className="lead">{t.hero.subtitle}</p>
      </header>

      {/* Slideshow */}
      <Slideshow lang={lang} />

      {/* Services */}
      <section id="services" className="py-5">
        <h2 className="text-center mb-4">{t.services.title}</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-code-slash fs-1 text-primary"></i>
            <h5 className="mt-3">{t.services.web}</h5>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-phone fs-1 text-success"></i>
            <h5 className="mt-3">{t.services.mobile}</h5>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-palette fs-1 text-warning"></i>
            <h5 className="mt-3">{t.services.design}</h5>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-light py-5">
        <div className="container text-center">
          <h2>{t.about.title}</h2>
          <p className="lead">{t.about.text}</p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-5">
        <h2 className="text-center mb-4">{t.portfolio.title}</h2>
        <div className="row">
          {Object.values(t.portfolio.projects).map((proj, i) => (
            <div className="col-md-4" key={i}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-4 bg-light mt-5">
        <p className="mb-0">{t.footer.text}</p>
      </footer>
    </div>
  );
}

export default App;
