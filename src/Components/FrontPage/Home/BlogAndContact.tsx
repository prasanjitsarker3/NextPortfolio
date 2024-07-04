"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Personal from "./Personal";
import { useCreateContactMutation } from "@/Components/Redux/BannerApi/profileApi";
import { toast } from "sonner";

const BlogAndContact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createContact] = useCreateContactMutation();

  const onSubmit = async (data: any) => {
    console.log("Check", data);
    try {
      const response = await createContact(data);
      console.log("Contact form submitted:", response);

      toast.success(response?.data?.message);

      reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <div className="md:px-24 px-8 py-12 bg-white dark:bg-gray-800">
      <div className="w-full flex flex-col md:flex-row justify-center gap-12">
        <div className="md:w-1/3 w-full mx-auto">
          <h1 className="text-2xl font-exotwo font-semibold mb-4">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 p-2 block w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#0C9463] focus:border-[#0C9463]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 p-2 block w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#0C9463] focus:border-[#0C9463]"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
                className="mt-1 p-2 block w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md shadow-sm focus:ring-[#0C9463] focus:border-[#0C9463]"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#0C9463] text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-[#0C9463] focus:ring-opacity-50 hover:bg-[#076D49] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-2/3 w-full mx-auto ">
          <Personal />
        </div>
      </div>
    </div>
  );
};

export default BlogAndContact;
