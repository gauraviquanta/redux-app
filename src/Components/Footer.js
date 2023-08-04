import React from 'react'

function Footer() {
  return (
    <div className="container-fluid" style={{ background: "var(--secondaryColor)" }}>
      <footer className="py-3 my-4 text-light ">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-primary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-light">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer