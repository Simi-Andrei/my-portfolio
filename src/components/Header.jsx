import { useEffect, useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = navOpen ? "hidden" : "auto";
    }
  }, [navOpen]);

  return (
    <div className="w-full z-30 fixed bg-white dark:bg-dark dark:text-white">
      <nav className="relative w-full md:w-10/12 lg:w-8/12 mx-auto flex items-center justify-between p-4">
        <a
          href="#home"
          className="border border-black dark:border-white dark:hover:border-emerald-500 rounded-full w-12 h-12 flex items-center justify-center hover:border-emerald-500 duration-200"
        >
          A<span className="text-emerald-500">|</span>S
        </a>
        <ul className="hidden md:flex text-right text-sm">
          <li className="pl-10">
            <a
              href="#home"
              id="homeLink"
              className="hover:text-emerald-500 transition-all duration-200 relative"
            >
              Home
              <span id="homeSpan"></span>
            </a>
          </li>
          <li className="pl-10">
            <a
              href="#about"
              id="aboutLink"
              className="hover:text-emerald-500 transition-all duration-200 relative"
            >
              About
              <span id="aboutSpan"></span>
            </a>
          </li>
          <li className="pl-10">
            <a
              href="#projects"
              id="projectsLink"
              className="hover:text-emerald-500 transition-all duration-200
              relative"
            >
              Projects
              <span id="projectsSpan"></span>
            </a>
          </li>
          <li className="pl-10">
            <a
              href="#contact"
              id="contactLink"
              className="hover:text-emerald-500 transition-all duration-200
              relative"
            >
              Contact
              <span id="contactSpan"></span>
            </a>
          </li>
        </ul>
        <div
          className={`bg-white dark:bg-dark fixed top-20 right-0 w-1/2 h-[calc(100vh-80px)] ease text-sm transition-all duration-400 dark:border-l dark:border-l-gray-900 ${
            !navOpen
              ? "-translate-x-100 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <ul className="flex flex-col text-right pt-10 h-1/2">
            <li
              className={`py-4 px-12 transition-all duration-300 ${
                navOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <a className="navLink" href="#home">
                Home
              </a>
            </li>
            <li
              className={`py-4 px-12 transition-all duration-300 delay-100 ${
                navOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <a className="navLink" href="#about">
                About
              </a>
            </li>
            <li
              className={`py-4 px-12 transition-all duration-300 delay-200 ${
                navOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <a className="navLink" href="#projects">
                Projects
              </a>
            </li>
            <li
              className={`py-4 px-12 transition-all duration-300 delay-300 ${
                navOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <a className="navLink" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleNavHandler}
          className="border border-black w-12 h-12 rounded-full flex flex-col items-center justify-center hover:border-emerald-500 duration-200 md:hidden
          dark:border-white dark:hover:border-emerald-500"
        >
          <span
            className={`bg-black w-5 h-0.5 my-0.5 dark:bg-white ${
              navOpen
                ? "translate-y-1.5 rotate-45 transition-all duration-500"
                : "translate-y-0 rotate-0 transition-all duration-500"
            }`}
          ></span>
          <span
            className={`bg-emerald-500 w-5 h-0.5 my-0.5 ${
              navOpen
                ? "opacity-0 transition-all duration-500"
                : "opacity-100 transition-all duration-500"
            }`}
          ></span>
          <span
            className={`bg-black w-5 h-0.5 my-0.5 dark:bg-white ${
              navOpen
                ? "-translate-y-1.5 -rotate-45 transition-all duration-500"
                : "translate-y-0 rotate-0 transition-all duration-500"
            }`}
          ></span>
        </button>
        <p className="text-emerald-500 hidden md:block font-name md:text-lg lg:text-xl cursor-default">
          Andrei Simigiu
        </p>
      </nav>
    </div>
  );
};
export default Header;
