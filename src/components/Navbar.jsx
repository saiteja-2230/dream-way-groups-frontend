import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-navbar">

      <div className="container">

        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img
              src="/logo.png"
              alt="Dream Way Groups"
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="navbar-navigation">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-menu-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/packages"
              className={({ isActive }) =>
                `nav-menu-link ${isActive ? "active" : ""}`
              }
            >
              Packages
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-menu-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-menu-link ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>

            <Link
              to="/packages"
              className="navbar-cta"
            >
              <span>Explore Tours</span>
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>


          {/* Mobile Button */}
          <button
            className="navbar-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNavbar"
            aria-controls="mobileNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>


        {/* Mobile Navigation */}
        <div
          className="collapse mobile-navbar"
          id="mobileNavbar"
        >

          <div className="mobile-navbar-menu">

            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/packages">
              Packages
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

            <Link
              to="/packages"
              className="mobile-navbar-cta"
            >
              Explore Tours
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;