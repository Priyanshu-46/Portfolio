import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { SiGithub } from "react-icons/si";
import {  FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          ppriyanshu288@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Priyanshu Patel. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Priyanshu-46" target="_blank" className="text-3xl">
             <SiGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/priyanshu-patel-218335229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-3xl">
             <FaLinkedin /> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
