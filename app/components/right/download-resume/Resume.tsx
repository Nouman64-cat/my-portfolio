import React from 'react';
import { IoIosLink } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Resume = () => {
  const handleDownload = () => {
    toast.success("Thank you for downloading my resume!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#2a2a2a", // Background color of the toast
        color: "#ffffff", // Text color
      },
      icon: <IoIosLink style={{ color: '#4b38d3' }} />, // Custom icon color
    });
  };

  return (
    <div>
      <a
        href="/Profile.pdf"
        download
        onClick={handleDownload}
        className="inline-flex items-center px-4 py-2 bg-purplish text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mt-4"
      >
        Download My Resume
        <IoIosLink className="ml-2 mb-1 text-xl" />
      </a>

      <ToastContainer toastClassName="custom-toast" />
    </div>
  );
};

export default Resume;
