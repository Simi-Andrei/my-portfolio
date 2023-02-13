import firstPortfolio from "../assets/images/firstPortfolio.png";
import artiSimi from "../assets/images/artiSimi.png";
import hungryMe from "../assets/images/hungryMe.png";
import vremeaITSchool from "../assets/images/vremeaITSchool.png";
import groceryApp from "../assets/images/groceryApp.png";
import weatherApp from "../assets/images/weatherApp.png";
import shopnetApp from "../assets/images/shopnetApp.png";

const Projectssection = () => {
  return (
    <section id="projects" className="z-10 mt-10 relative scroll-mt-24">
      <h2 className="inline-block text-xl font-bold text-emerald-500 tracking-wider border-b-2 border-b-emerald-500 leading-none">
        Projects
      </h2>
      <div className="py-5 border-b border-emerald-500">
        <div className="flex flex-wrap justify-between items-center">
          <div className="xl:w-5/12">
            <img src={firstPortfolio} alt="project" className="h-60 border" />
          </div>
          <div className="xl:w-5/12 text-sm flex flex-col items-start justify-center mt-4">
            <p className="mb-2">
              Description: This is one of the first portfolios I made.
              Presentation website with information similar to the one you are
              viewing right now.
            </p>
            <p className="mb-2">
              Technologies used:{" "}
              <span className="text-emerald-500">HTML, CSS, JS</span>
            </p>
            <p>Responsiveness: fully responsive</p>
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-emerald-500">
        <div className="flex flex-wrap justify-between items-center">
          <div className="xl:w-5/12 text-sm flex flex-col items-start justify-center order-2 mt-4">
            <p className="mb-2">
              Description: Combined different styles, fonts and beautiful images
              to create an artistic website where you can learn about unique
              events near your location
            </p>
            <p className="mb-2">
              Technologies used:{" "}
              <span className="text-emerald-500">HTML, CSS, JS</span>
            </p>
            <p>Responsiveness: not responsive</p>
          </div>
          <div className="xl:w-5/12 xl:order-2">
            <img src={artiSimi} alt="project" className="h-60 border" />
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-emerald-500">
        <div className="flex flex-wrap justify-between items-center">
          <div className="xl:w-5/12">
            <img src={hungryMe} alt="project" className="h-60 border" />
          </div>
          <div className="xl:w-5/12 text-sm flex flex-col items-start justify-center mt-4">
            <p className="mb-2">
              Description: Online restaurant with many items on the menu. You
              can add to cart pizza, burgers, good old wines and many others.
            </p>
            <p className="mb-2">
              Technologies used:{" "}
              <span className="text-emerald-500">ReactJS</span>
            </p>
            <p>Responsiveness: not responsive</p>
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-emerald-500">
        <div className="flex flex-wrap justify-between items-center">
          <div className="xl:w-5/12 text-sm flex flex-col items-start justify-center order-2 mt-4">
            <p className="mb-2">
              Description: App created using weather API which returns the
              current weather in a selected location and a 5 days forecast for
              the city chosen. App created while enrolled in a Frontend
              Development course and assisted by the trainer.
            </p>
            <p className="mb-2">
              Technologies used:{" "}
              <span className="text-emerald-500">HTML, CSS, JS</span>
            </p>
            <p>Responsiveness: fully responsive</p>
          </div>
          <div className="xl:w-5/12 xl:order-2">
            <img src={vremeaITSchool} alt="project" className="h-60 border" />
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-emerald-500">
        <div className="flex flex-wrap justify-between items-center">
          <div className="xl:w-5/12">
            <img src={groceryApp} alt="project" className="h-60 border" />
          </div>
          <div className="xl:w-5/12 text-sm flex flex-col items-start justify-center mt-4">
            <p className="mb-2">
              Description: MERN stack application using React-Context where you
              can make your own grocery list. You can view your shopping list,
              add, delete and update items. Contains a validated form used to
              add different products to your list.
            </p>
            <p className="mb-2">
              Technologies used:{" "}
              <span className="text-emerald-500">
                MongoDB, ExpressJS, ReactJS, NodeJS, Formik, Yup
              </span>
            </p>
            <p className="mb-2">Responsiveness: fully responsive</p>
            <p>
              URL:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mern-context-crud-app.onrender.com/"
                className="text-xs text-emerald-500 underline"
              >
                Check app
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-emerald-500">
        <div className="flex flex-wrap justify-between items-center">
          <div className="xl:w-5/12 text-sm flex flex-col items-start justify-center order-2 mt-4">
            <p className="mb-4">
              Description: MERN weather application using a different weather
              API where you can check the current weather and statistics for a
              selected location and also includes a 7 days forecast.
            </p>
            <p className="mb-4">
              Technologies used:{" "}
              <span className="text-emerald-500">
                MongoDB, ExpressJS, ReactJS, NodeJS, Formik, Yup
              </span>
            </p>
            <p className="mb-4">Responsiveness: fully responsive</p>
            <p>
              URL:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://react-weather-app-8yy2.onrender.com/"
                className="text-xs text-emerald-500 underline"
              >
                Check app
              </a>
            </p>
          </div>
          <div className="xl:w-5/12 xl:order-2">
            <img src={weatherApp} alt="project" className="h-60 border" />
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="xl:w-5/12">
            <img src={shopnetApp} alt="project" className="h-60 border" />
          </div>
          <div className="xl:w-5/12 text-sm flex flex-col items-start justify-center mt-4">
            <p className="mb-4">
              Description: E-Commerce application where you can buy products
              online. You can add them to cart, update cart, include a payment
              method and place the order. The app has also admin screen where
              you can create, update and delete products. This is the biggest
              project I am currently working on.
            </p>
            <p className="mb-4">
              Technologies used:
              <span className="text-emerald-500">
                {" "}
                MongoDB, ExpressJS, ReactJS, NodeJS, Formik, Yup, Redux,
                jsonwebtoken and many others
              </span>
            </p>
            <p>Responsiveness: fully responsive</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projectssection;
