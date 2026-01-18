import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "1rem",
        marginBottom: "2rem",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          gap: "2rem",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "white" : "#ccc",
              textDecoration: "none",
              fontWeight: location.pathname === "/" ? "bold" : "normal",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: location.pathname === "/about" ? "white" : "#ccc",
              textDecoration: "none",
              fontWeight: location.pathname === "/about" ? "bold" : "normal",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{
              color: location.pathname === "/services" ? "white" : "#ccc",
              textDecoration: "none",
              fontWeight: location.pathname === "/services" ? "bold" : "normal",
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              color: location.pathname === "/contact" ? "white" : "#ccc",
              textDecoration: "none",
              fontWeight: location.pathname === "/contact" ? "bold" : "normal",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
