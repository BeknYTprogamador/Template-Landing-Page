import Slideshow from './components/slideshow'
import heroImg from './assets/hero.png'

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white mb-4 shadow-none">
  <div className="container-fluid">
    <a className="navbar-brand text-dark fw-bold" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link text-dark" href="#services">Services</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#portfolio">Portfolio</a></li>
      </ul>
    </div>
  </div>
</nav>


      {/* Hero */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Welcome to this Website</h1>
        <p className="lead">A modern React + Bootstrap landing page</p>
      </header>

      {/* Slideshow */}
      <Slideshow />

      {/* Services */}
      <section id="services" className="py-5">
        <h2 className="text-center mb-4">Services</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-code-slash fs-1 text-primary"></i>
            <h5 className="mt-3">Web Development</h5>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-phone fs-1 text-success"></i>
            <h5 className="mt-3">Mobile App Development</h5>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-palette fs-1 text-warning"></i>
            <h5 className="mt-3">UI/UX Design</h5>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-light py-5">
        <div className="container text-center">
          <h2>About Us</h2>
          <p className="lead">
            We are a team of passionate developers and designers dedicated to creating amazing digital experiences.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-5">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Project A</h5>
                <p className="card-text">E-commerce Website</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Project B</h5>
                <p className="card-text">Mobile App for Fitness Tracking</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Project C</h5>
                <p className="card-text">Corporate Website Redesign</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-4 bg-light mt-5">
        <p className="mb-0">&copy; 2026 My Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
