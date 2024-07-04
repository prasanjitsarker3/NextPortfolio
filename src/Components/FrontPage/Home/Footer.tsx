"use client";
import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" dark:bg-slate-800">
      <div className=" w-[80%] mx-auto  py-8 ">
        <div className=" border-b "></div>
        <div className=" mx-auto md:px-24 pt-5 flex flex-col md:flex-row justify-between items-center">
          <h1>
            {" "}
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Prasanjit Sarker</a>. All
            Rights Reserved.
          </h1>
          <div className=" flex items-center gap-4">
            <Facebook />
            <Linkedin />
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
