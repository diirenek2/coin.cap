import React from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 shadow mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item text-slate-200 hover:text-white">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item text-slate-200 hover:text-white">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item text-slate-200 hover:text-white">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg "></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}