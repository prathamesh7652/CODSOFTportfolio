import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
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
        <div>
            <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul >
                    {
                        social.map(({ id, color, child, link }) => {
                            return <li key={id} className={`flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 ${color} cursor-pointer`}><a className='flex text-white font-bold' href={link} download="true" target="_blank" >{child}</a></li>

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SocialLinks
