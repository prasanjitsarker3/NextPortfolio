"use client";
import { useGetProfileQuery } from "@/Components/Redux/BannerApi/profileApi";
import { Avatar } from "@nextui-org/react";
import img from "../../../../public/Photo/Frame 7 (1).png";
import React from "react";

const About = () => {
  const { data, isLoading } = useGetProfileQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const profileData = data?.data;
  console.log("Profile", profileData);
  return (
    <div
      id="about"
      className=" md:px-24 md:pt-3 md:pb-12 py-12 bg-white dark:bg-gray-800"
    >
      <div className=" text-center pb-12">
        <h1 className=" text-3xl vigaRegular text-[#0C9463] ">About Us</h1>
        <h2 className=" text-xl font-exotwo ">
          I&apos;am Prasanjit Sarker, a Full Stack Developer who specialises in
          both design and backend programming.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:px-0 px-6">
        {profileData?.slice(0, 1)?.map((item: any) => (
          <div className=" border border-slate-500 p-5" key={item._id}>
            <div className=" flex items-center gap-3 pb-3">
              <Avatar
                src="https://i.ibb.co/H2cxkyT/photo.jpg"
                size="lg"
                className=" h-16 w-16"
              />
              <div className="">
                <h1 className=" text-xl font-semibold font-exotwo text-[#0C9463]">
                  Prasanjit Sarker
                </h1>
                <h1>{item?.email}</h1>
                <h1>Dhaka,Bangladesh</h1>
              </div>
            </div>
            <h1 className=" text-justify">{item?.about}.</h1>
          </div>
        ))}
        <div className=" border border-slate-500 p-5">
          <h1 className=" text-xl font-semibold font-exotwo text-[#0C9463]">
            Work Experience (Internship)
          </h1>
          <h1> Front End Developer (React JS, Redux).</h1>
          <h1>Digicon Technologies Ltd, (Mirpur-12, Dhaka)</h1>
          <p className=" text-justify pt-3">
            During my internship, I worked with my team to create the BREB Web
            CRMS (Customer Relationship Management System), which uses React.js
            and Redux on the client side.
          </p>
        </div>
        <div className=" border border-slate-500 p-5">
          <h1 className=" text-xl text-[#0C9463] font-semibold font-exotwo">
            Education Background
          </h1>
          <h1 className=" text-base font-medium">
            Haldia Institute of Technology, WB-India (2019-2023)
          </h1>
          <li>B.Tech. Information Technology (CGPA: 8.60)</li>
          <li>Final Project: Twitter Sentiment Analysis</li>
          <li>Proficient in: JavaScript, Java, DBMS</li>
        </div>
      </div>
    </div>
  );
};

export default About;
