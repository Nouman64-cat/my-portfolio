"use client";
import React from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "@/public/images/my.png";

interface WelcomeBackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeBackModal: React.FC<WelcomeBackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-dark_greyish rounded-lg shadow-lg p-6 max-w-xl w-full relative border-2 border-purplish mx-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <div className="mb-4">
            <Image
              src={image}
              alt="Nouman Ejaz"
              width={180}
              height={180}
              className="rounded-full"
            />
          </div>

          {/* Text Content */}
          <h1 className="text-2xl font-medium text-gray-400">
            Welcome Back
          </h1>
          <p className="text-gray-300 mt-2 font-light">
            It's great to see you again! Explore my <span className="text-purplish font-normal">portfolio</span> further.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeBackModal;
