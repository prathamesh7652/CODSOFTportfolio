import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  
let social = [
        {
            id: 1,
            color: "bg-blue-600",
            child: (
                <>
                    Linkedin <FaLinkedin size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://www.linkedin.com/in/prathamesh-naik-182456228/"
        },
        {
            id: 2,
            color: "bg-gray-600",
            child: (
                <>
                    Github <FaGithub size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://github.com/prathamesh7652"
        },
        {
            id: 3,
            color: "bg-red-600",
            child: (
                <>
                    Mail <AiOutlineMail size={30} className="ml-2 text-white" />
                </>
            ),
            link: "mailto:prathameshnaik.comp.nbnstic@gmail.com"
        },
        {
            id: 4,
            color: "bg-black",
            child: (
                <>
                    X <FaTwitter size={30} className="ml-2 text-white" />
                </>
            ),
            link: "https://x.com/prathamesh098n"
        },
        {
            id: 5,
            color: "bg-green-500",
            child: (
                <>
                    Resume <BsPersonLinesFill size={30} className="ml-2 text-white" />
                </>
            ),
            link: ""
        }
    ]
  return (
    <div
      name="Contact"
      className="w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4 pt-24"
    >
      <div className=" md:hidden flex justify-center items-center bottom-[35%]">
        <ul className="flex justify-center items-center">
          {social.map(({ id, color, child, link }) => {
            return (
              <li
                key={id}
                className={`flex justify-center items-center h-1/1 mt-[-10%] py-3 px-2  hover:rounded-md hover:mt-[-15%] duration-500 ${color} cursor-pointer`}
              >
                <a
                  className="flex text-white font-bold"
                  href={link}
                  download="true"
                  target="_blank"
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col p-4 justify-center max-w-lg mx-auto h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>

          <p className="py-2">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/74887d40-7817-4562-9fff-f7bcebb5b9e0"
            method="POST"
            className="flex flex-col w-full md:w-3/3"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-purple-500 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold">
              Let's talk
            </button>
          </form>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Contact;
