"use client";
import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`
        w-full rounded-lg
        border border-gray-300
        bg-white px-4 py-3 text-sm
        text-gray-800 placeholder-gray-400

        transition-colors duration-150
        focus:outline-none
        focus:border-green-500

        dark:border-gray-700
        dark:bg-gray-900
        dark:text-white
        dark:placeholder-gray-500
        dark:focus:border-green-500

        ${className}
      `}
    />
  );
};

export default Input;
