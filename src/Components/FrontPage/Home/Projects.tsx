"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useGetProjectQuery } from "@/Components/Redux/BannerApi/projectApi";
import Link from "next/link";

const Projects = () => {
  const { data, isLoading } = useGetProjectQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const projectData = data?.data;
  console.log("project", projectData);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Full Stack Bike Management Dashboard Application (MERN)",
      image: "https://i.ibb.co/gD7cmt3/Screenshot-2024-03-02-185142.png",
      live: "https://bikemanagement.netlify.app/login",
      details:
        "I developed a Bike Management application using MERN technologies. Users can create accounts, order bikes, request services, and manage orders from the dashboard. Role-based functionality and UI were implemented.",
    },
    {
      id: 2,
      name: "Full Stack Art Craft Course Application (MERN)",
      image: "https://i.ibb.co/crVXGzr/Screenshot-2023-07-01-161625.png",
      live: "https://cartandcarft.web.app",
      details:
        "I developed an Art Craft Course application using MERN technologies. Role-based functionality and UI were implemented.",
    },
    {
      id: 3,
      name: "Full Stack Doctor Online Appointment Application (MERN)",
      image: "https://i.ibb.co/DRWH7k3/Screenshot-2024-03-03-223043.png",
      live: "https://doctor-management-9b2bf.web.app",
      details:
        "Developed an online doctor appointment application using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. Role-based functionality and UI were implemented.",
    },
    {
      id: 4,
      name: "Online Quiz Application (JavaScript, React JS)",
      image: "https://i.ibb.co/pJ9d8t6/Screenshot-2024-03-04-203248.png",
      live: "https://superlative-starship-92d73e.netlify.app",
      details:
        "Developed an online quiz website using the JavaScript and React JS technology stack.",
    },
    {
      id: 5,
      name: "New Project 1",
      image: "https://via.placeholder.com/500x500",
      live: "#",
      details: "Description of New Project 1",
    },
    {
      id: 6,
      name: "New Project 2",
      image: "https://via.placeholder.com/500x500",
      live: "#",
      details: "Description of New Project 2",
    },
  ]);

  // Function to shuffle projects array to randomize image positions
  const shuffleProjects = () => {
    setProjects((prevProjects) => {
      // Shuffle array using Fisher-Yates algorithm

      for (let i = prevProjects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [prevProjects[i], prevProjects[j]] = [prevProjects[j], prevProjects[i]];
      }
      return [...prevProjects];
    });
  };

  return (
    <div className="md:px-24 px-12 py-12 bg-white dark:bg-gray-800">
      <div className=" text-center pb-12">
        <h1 className=" text-3xl vigaRegular text-[#0C9463] ">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:px-14">
        {projectData?.slice(0, 5).map((project: any, index: any) => (
          <motion.div
            key={project.id}
            className={`rounded-lg shadow-lg h-full relative `}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-64 rounded-lg"
              />
              <motion.div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300">
                <h1 className=" text-white font-exotwo text-lg px-3">
                  {project.name}
                </h1>
                <div className=" flex items-center gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3   font-semibold py-2 px-4 rounded-md text-sm border-2 border-[#0C9463] text-white hover:bg-[#0C9463]  mt-2"
                  >
                    Live <Eye size={15} />
                  </a>
                  <Link href={`/project/${project._id}`}>
                    <button className="flex items-center gap-3 text-white font-semibold py-2 px-4 rounded-md text-sm border-2 border-[#0C9463] hover:bg-[#0C9463] focus:outline-none focus:ring-2  mt-2">
                      See <Eye size={15} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
