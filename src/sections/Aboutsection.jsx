import { GiSkateboard } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import jsonwebtoken from "../assets/images/jsonwebtoken.png";
import aboutDoggo from "../assets/images/aboutDoggo.jpg";

const Aboutsection = ({ theme }) => {
  const frontendSkills = [
    { id: "1", icon: <FaHtml5 />, skill: "HTML5", color: "#e34c26" },
    { id: "2", icon: <FaCss3Alt />, skill: "CSS3", color: "#264de4" },
    { id: "3", icon: <SiBootstrap />, skill: "Bootstrap", color: "#563d7c" },
    { id: "4", icon: <SiJavascript />, skill: "JavaScript", color: "#f0db4f" },
    {
      id: "5",
      icon: <SiTailwindcss />,
      skill: "TailwindCSS",
      color: "#38bdf8",
    },
    { id: "6", icon: <FaReact />, skill: "React", color: "#38bdf8" },
    { id: "7", icon: <SiRedux />, skill: "Redux", color: "#764abc" },
  ];

  const backendSkills = [
    { id: "1", icon: <FaNodeJs />, skill: "NodeJS", color: "#3c873a" },
    {
      id: "2",
      icon: <SiExpress />,
      skill: "ExpressJS",
      color: `${theme === "dark" ? "#fff" : "#000"}`,
    },
    { id: "3", icon: <SiMongodb />, skill: "MongoDB", color: "#3FA037" },
    { id: "4", icon: <SiJavascript />, skill: "JavaScript", color: "#f0db4f" },
  ];

  return (
    <section id="about" className="z-10 py-4 md:mt-64 relative scroll-mt-24">
      <h2 className="inline-block text-xl font-bold text-emerald-500 tracking-wider border-b-2 border-b-emerald-500 leading-none mb-16">
        About me
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="md:w-[48%] lg:w-49%">
          <GiSkateboard className="text-4xl text-emerald-500 mx-auto mb-6" />
          <h3 className="font-bold tracking-wide mb-4 text-center">
            Day to day life
          </h3>
          <p className="text-sm italic mb-2">
            <span className="text-3xl text-emerald-500">V</span>ery curious
            individual, always feeling the urge to know everything, no matter if
            it is the lastest juicy gossip or what the President eats for
            breakfast. Love to travel, play video games and eat.
          </p>
          <p className="text-sm italic">
            In my youths, I used to draw/ sketch a lot (I do have an artistic
            bent) and also go out skateboarding (I didn't use to eat that much
            back then). I like to spend my free time with friends or watching
            movies, series and not the least{" "}
            <span className="text-emerald-500">coding</span>.
          </p>
        </div>
        <div className="md:w-[48%] lg:w-49% mt-10 md:mt-0">
          <BsCodeSlash className="text-4xl text-emerald-500 mx-auto mb-6" />
          <h3 className="font-bold tracking-wide mb-4 text-center">
            Web development
          </h3>
          <p className="text-sm italic mb-2">
            <span className="text-3xl text-emerald-500">A</span> couple of years
            ago I started <span className="text-emerald-500">coding</span> using
            HTML and CSS to create/ design web pages. Started to follow Udemy
            courses which grabbed my interest even more after adding JavaScript
            to the stack.
          </p>
          <p className="text-sm italic">
            At the moment I am using ReactJS to develop single page applications
            with different functionalities and features and also a couple of
            MERN Stack applications such as E-Commerce with React-Context or
            React-Redux.
          </p>
        </div>
      </div>
      <h3 className="tracking-wide font-bold text-center my-16 text-lg">
        Skills
      </h3>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-[48%] lg:w-[49%]">
          <h3 className="font-bold tracking-wide mb-4 text-center">Frontend</h3>
          <div className="flex flex-wrap justify-center">
            {frontendSkills.map(({ id, icon, skill, color }) => (
              <div key={id} className="w-1/3 p-0.5 lg:p-2">
                <div className="border border-emerald-500 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                  <span className="text-5xl mb-2" style={{ color: `${color}` }}>
                    {icon}
                  </span>
                  <span className="text-xs">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[48%] lg:w-[49%] mt-10 md:mt-0">
          <h3 className="font-bold tracking-wide mb-4 text-center">Backend</h3>
          <div className="flex flex-wrap justify-center">
            {backendSkills.map(({ id, icon, skill, color }) => (
              <div key={id} className="w-1/3 p-0.5 lg:p-2">
                <div className="border border-emerald-500 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                  <span className="text-5xl mb-2" style={{ color: `${color}` }}>
                    {icon}
                  </span>
                  <span className="text-xs">{skill}</span>
                </div>
              </div>
            ))}
            <div className="w-1/3 p-0.5 lg:p-2">
              <div className="border border-emerald-500 rounded-md p-2 flex flex-col items-center justify-between cursor-pointer hover:shadow-md transition-all duration-200">
                <img src={jsonwebtoken} className="w-14" alt="jsonwebtoken" />
                <span className="text-xs">jsonwebtoken</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={aboutDoggo}
        alt="aboutDoggo"
        className="hidden absolute opacity-50 -z-10 -top-6 w-full left-0"
      />
    </section>
  );
};
export default Aboutsection;
