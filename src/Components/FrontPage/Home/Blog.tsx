"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useGetBlogQuery } from "@/Components/Redux/BannerApi/profileApi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  heading: string;
  details: string;
  image: string;
  link: string;
  createdAt: string;
}

const Blog = () => {
  const { data, isLoading } = useGetBlogQuery({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const blogData = data?.data;
  console.log(blogData);

  const handleOpenModal = (blog: any) => {
    setSelectedBlog(blog);
    onOpen();
  };

  return (
    <div className="bg-white dark:bg-gray-800 md:px-24 px-8">
      <h1 className="text-2xl font-exotwo font-semibold mb-3 text-gray-800 dark:text-gray-200">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-6">
        {blogData?.slice(0, 3).map((blog: any) => (
          <div
            key={blog.id}
            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-md"
          >
            <div className="relative">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={200}
                className="rounded-lg h-44"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {blog.heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {new Date(blog.createdAt).toLocaleString()}
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              {blog.details.slice(0, 80)}...
            </p>
            <button
              onClick={() => handleOpenModal(blog)}
              className="text-[#0C9463] hover:underline font-semibold"
            >
              Read more
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedBlog?.title}
              </ModalHeader>
              <ModalBody>
                {selectedBlog && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {selectedBlog.heading}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {new Date(selectedBlog.createdAt).toLocaleString()}
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                      {selectedBlog.details}
                    </p>
                    <a
                      href={selectedBlog.link}
                      className=" flex items-center  gap-3 mb-3"
                    >
                      Document-
                      <Link size={20} className=" text-blue-700" />
                    </a>
                  </>
                )}
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Blog;
