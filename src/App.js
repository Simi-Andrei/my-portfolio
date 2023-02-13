import Header from "./components/Header";
import Footer from "./components/Footer";
import Homesection from "./sections/Homesection";
import Aboutsection from "./sections/Aboutsection";
import Projectssection from "./sections/Projectssection";
import Contactsection from "./sections/Contactsection";
import { BsChevronDoubleUp, BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark") &&
        document.querySelector("body").classList.add("bg-dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <Header />
      <main className="relative flex-1 w-full lg:px-[20%] mx-auto p-4 dark:bg-dark dark:text-white">
        <Homesection theme={theme} />
        <Aboutsection theme={theme} />
        <Projectssection />
        <Contactsection />
        <button
          onClick={themeHandler}
          className="fixed top-24 right-[6.5%] md:right-[10%] lg:right-[17.5%] p-1 cursor-pointer rounded-full border-2 border-emerald-500 hover:border-emerald-500 transition-all duration-200 bg-white text-emerald-500 dark:bg-transparent z-50 outline-none"
        >
          {theme === "dark" ? (
            <BsSun className="text-lg" />
          ) : (
            <BsMoon className="text-lg" />
          )}
        </button>
      </main>
      <button
        onClick={scrollToTop}
        className={`z-20 fixed top-[85%] right-[8%] bg-emerald-500 p-4 rounded-full border border-emerald-600 text-white transition-all duration-200 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none outline-none"
        }`}
      >
        <BsChevronDoubleUp className="text-xl" />
      </button>
      <Footer />
    </div>
  );
}

export default App;
