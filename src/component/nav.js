import React from "react";
import {Link} from "react-router-dom";
export default function Nav(props) {
  return (
    <div>
     
      <nav
       className={`navbar navbar-expand-lg navbar-${props.ctheme} bg-${props.ctheme} ` }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dlmode">
                 About Us
                </Link>
              </li>
               {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <li className="dropdown-item" href="/">
                      Action
                    </li>
                  </li> 
                  <li> 
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <button type="button" className="btn btn-info mx-2 border border-white" onClick={props.yColor}></button>
<button type="button" className="btn btn-secondary mx-2 border border-white" onClick={props.gColor}></button>
<button type="button" className="btn btn-success mx-2 border border-white" onClick={props.grColor}></button>
<button type="button" className="btn btn-danger mx-2 border border-white" onClick={props.rColor} ></button>

{/* toggle Button */}
            <div className="form-switch text-center mt-2" style={{color:props.ctheme=== 'light'?"black":"white"}}>
              <input
                type="checkbox"
                id="mode"
                className="form-check-input mx-4"
                onClick={props.mode}
              />
              <label htmlFor="" className="form-check-label" data-bs-theme="light">
                {props.btn}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
