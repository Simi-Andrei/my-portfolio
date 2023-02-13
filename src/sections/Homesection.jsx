import { BsGithub, BsFacebook, BsLinkedin, BsArrowDown } from "react-icons/bs";
import me from "../assets/images/me.jpg";
import meDark from "../assets/images/meDark.jpg";
import CV from "../assets/CV/simigiuAndreiCV.pdf";

const Homesection = ({ theme }) => {
  return (
    <section
      id="home"
      className="z-10 mb-[10rem] mt-20 scroll-mt-24 relative flex flex-col py-48 items-start"
    >
      <p className="inline drop-shadow-lg text-emerald-500 dark:text-white text-lg md:text-2xl mt-20 lg:mt-10 font-bold tracking-wide">
        ”If you do what you love,
      </p>
      <p className="inline relative drop-shadow-lg text-emerald-500 dark:text-white text-lg md:text-2xl font-bold tracking-wide">
        you'll never work a day in your life”
        <span className="absolute -bottom-4 -right-60 drop-shadow-sm text-black dark:text-white text-xs text-right mr-60">
          ~Marc Anthony
        </span>
      </p>
      <div className="mt-20 mx-auto sm:flex">
        <a
          href="#projects"
          className="drop-shadow-md border border-emerald-500 rounded-md py-1 px-6 bg-emerald-500 text-white hover:text-emerald-500 hover:bg-transparent transition-all duration-200"
        >
          Explore
        </a>
        <a
          href={CV}
          download
          className="drop-shadow-md border border-emerald-500 rounded-md py-1 px-6
        bg-transparent text-emerald-500 hover:text-white hover:bg-emerald-500 transition-all duration-200 ml-4"
        >
          Download CV
        </a>
      </div>
      <div className="absolute bottom-20 right-0 text-black dark:text-white">
        <a
          href="https://github.com/Simi-Andrei?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="text-lg drop-shadow-sm my-2 hover:text-emerald-500" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006964906360"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="text-lg drop-shadow-sm my-2 hover:text-emerald-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrei-simigiu-a5b83a225/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="rounded-full text-lg drop-shadow-sm my-2 hover:text-emerald-500" />
        </a>
      </div>
      <img
        id="myPhoto"
        src={theme === "dark" ? meDark : me}
        alt="me"
        className="absolute top-8 right-0 -z-10 w-96 lg:w-6/12 opacity-70"
      />
      <div className="absolute w-full bottom-0 xl:-bottom-20 flex flex-col items-center text-emerald-500">
        <BsArrowDown className="block" />
        <span className="text-xs tracking-tighter mt-2">scroll down</span>
        <span id="scrollText" className="tracking-tighter">
          ( if you can scroll up something went wrong )
        </span>
      </div>
    </section>
  );
};
export default Homesection;
