"use client";

import React from "react";

export default function UserInfoCard() {
  return (
    <div
      className="
        rounded-2xl border border-orange-200 p-6
        bg-white
        dark:bg-[#111827] dark:border-orange-500/40
      "
    >
      <h4 className="mb-6 text-lg font-semibold text-orange-600 dark:text-orange-400">
        Personal & Company Details
      </h4>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Full Name */}
        <div>
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
            Full Name
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
            xyz pqr asd
          </p>
        </div>

        {/* Company Name */}
        <div>
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
            Company Name
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
            xyz
          </p>
        </div>

        {/* Designation */}
        <div>
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
            Designation
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
            Manager
          </p>
        </div>

        {/* Mobile Number */}
        <div>
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
            Mobile Number
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
            +91 123456789
          </p>
        </div>

        {/* Email ID */}
        <div>
          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
            Email ID
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
            harshitbhalani@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
