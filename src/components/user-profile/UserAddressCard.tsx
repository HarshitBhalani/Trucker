"use client";

import React from "react";

export default function UserAddressCard() {
  return (
    <div
      className="
        rounded-2xl border border-orange-200 p-6
        bg-white
        dark:bg-[#111827] dark:border-orange-500/40
      "
    >
      <h4 className="mb-6 text-lg font-semibold text-orange-600 dark:text-orange-400">
        Address
      </h4>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          ["Country", "United States"],
          ["City / State", "Phoenix, Arizona"],
          ["Postal Code", "ERT 2489"],
          ["TAX ID", "AS4568384"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              {label}
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
