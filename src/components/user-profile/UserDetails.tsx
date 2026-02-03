"use client";

import React, { useState } from "react";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";

export default function UserDetails() {
  const [tdsNumber, setTdsNumber] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div
      className="
        rounded-2xl border p-6
        border-orange-200 bg-white
        dark:border-orange-500/40 dark:bg-[#0f172a]
      "
    >
      {/* HEADER */}
      <h4 className="mb-6 text-lg font-semibold text-orange-600 dark:text-orange-400">
        TDS Details
      </h4>

      {/* FORM */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* TDS NUMBER */}
        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
            TDS Number
          </label>

          <Input
            placeholder="Enter TDS Number"
            value={tdsNumber}
            onChange={(e) => setTdsNumber(e.target.value)}
            className="
              bg-white text-gray-800
              dark:bg-[#020617] dark:text-white
              dark:placeholder-gray-500
            "
          />
        </div>

        {/* FILE */}
        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
            TDS File
          </label>

          <div
            className="
              flex items-center gap-3 rounded-lg border px-3 py-2
              border-gray-300 bg-white
              dark:border-gray-700 dark:bg-[#020617]
            "
          >
            <label
              className="
                cursor-pointer rounded-full border px-4 py-1 text-sm font-medium
                border-orange-400 text-orange-500
                hover:bg-orange-500/10
              "
            >
              Browse
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) =>
                  e.target.files && setFileName(e.target.files[0].name)
                }
              />
            </label>

            <span className="truncate text-sm text-gray-500 dark:text-gray-400">
              {fileName || "No file selected"}
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Allowed formats: PDF, JPG, PNG (max 5MB)
          </p>
        </div>
      </div>

      {/* ACTION */}
      <div className="mt-8 flex justify-end">
        <Button
          className="
    px-6 py-2.5 rounded-lg font-medium text-white
    bg-orange-500 hover:bg-orange-600
    dark:bg-brand-500 dark:hover:bg-brand-600
    focus:outline-none
    focus:ring-2 focus:ring-orange-500/40
    dark:focus:ring-brand-500/40
    transition-colors
  !required"
        >
          Save Details
        </Button>
      </div>
    </div>
  );
}
