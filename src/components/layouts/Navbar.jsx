import React from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item text-slate-300 hover:text-white">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                  href="https://github.com/diirenek2/coin.cap"
                  target="_blank"
                >
                  <i className="fab fa-github text-lg leading-lg"></i><span className="ml-2">Github</span>
                </a>
              </li>
              <li className="nav-item text-slate-300 hover:text-white">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                  href="https://www.linkedin.com/in/daniel-monte-b86614198/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin text-lg leading-lg"></i><span className="ml-2">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}