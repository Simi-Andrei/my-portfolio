import { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import contact from "../assets/images/contact.jpg";

const Contactsection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="z-10 mt-10 mb-20 relative">
      <h2 className="inline-block text-xl font-bold text-emerald-500 tracking-wider border-b-2 border-b-emerald-500 leading-none mb-10">
        Contact me
      </h2>
      <div className="border border-emerald-500 flex flex-wrap justify-between items-center p-8 rounded-md">
        <div className="md:w-5/12 text-sm mb-6">
          <p>
            Let's get in touch and maybe we can create something fabulous
            together!
          </p>
          <p className="my-4">Also available at:</p>
          <p className="text-xs mb-1">
            <AiOutlineMail className="inline-block" /> Email:{" "}
            <a
              className="text-xs hover:underline"
              href="mailto:simigiuandrei95@gmail.com"
            >
              simigiuandrei95@gmail.com
            </a>
          </p>
          <p className="text-xs">
            <AiOutlinePhone className="inline-block" /> Phone: +40 757 849 820
          </p>
        </div>
        <div className="md:w-5/12">
          <form onSubmit={submitHandler}>
            <label className="block text-xs mb-1" htmlFor="name">
              Your name
            </label>
            <input
              className="border border-emerald-500 mb-2 rounded-md py-1 px-2 w-full outline-emerald-500 font-sans text-black text-sm"
              type="text"
              id="name"
              name="name"
            />
            <label className="block text-xs mb-1" htmlFor="email">
              Your email
            </label>
            <input
              className="border border-emerald-500 mb-2 rounded-md py-1 px-2 w-full outline-emerald-500 font-sans text-black text-sm"
              type="email"
              id="email"
              name="email"
            />
            <label className="block text-xs mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              className="border border-emerald-500 mb-2 rounded-md py-1 px-2 w-full outline-emerald-500 font-sans text-black text-sm"
              type="text"
              id="subject"
              name="subject"
            />
            <label className="block text-xs mb-1" htmlFor="message">
              Your message
            </label>
            <textarea
              className="border border-emerald-500 mb-2 rounded-md py-1 px-2 w-full outline-emerald-500 font-sans text-black text-sm resize-none"
              name="message"
              id="message"
              cols="30"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="border border-emerald-500 rounded-md py-1 px-6 text-sm hover:bg-emerald-500 hover:text-white font-bold transition-all duration-200"
            >
              Submit
            </button>
          </form>
          {formSubmitted && (
            <div className="bg-emerald-500 absolute h-[388px] w-full top-12 left-0 rounded-md flex items-center justify-center">
              <p className="text-white text-2xl">Your message has been sent!</p>
            </div>
          )}
        </div>
      </div>
      <img
        src={contact}
        alt="contact"
        className="hidden absolute top-24 -z-10 opacity-50 left-1/3 w-1/3"
      />
    </section>
  );
};
export default Contactsection;
