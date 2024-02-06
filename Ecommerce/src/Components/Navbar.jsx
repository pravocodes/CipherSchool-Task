import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { Badge } from "antd";

const Navbar = () => {
    const [cart] = useCart();
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-dark bg-dark mb-4`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-brand">
            {/* <FaShoppingCart />  */}
            <Link className="nav-link" to="/">
              <img
                src="https://i.postimg.cc/rsjxY7z1/navbar-logo.png"
                width={90}
                height={40}
                alt="Logo"
              ></img>
            </Link>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
            </li>

            
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/"
                      >
                        logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
            
            <li className="nav-item">
              <Badge count={cart?.length} showZero>
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </Badge>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
