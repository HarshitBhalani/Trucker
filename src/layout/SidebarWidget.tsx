import React from "react";

export default function SidebarWidget() {
  return (
    <div
      className="
        mx-auto mt-2.5 mb-10
        w-full max-w-60
        rounded-2xl
        bg-gray-50 px-4 py-5
        text-center
        dark:bg-white/[0.03]
      "
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        Apexcel Move PVT LTD.
      </h3>

      <p className="mb-4 text-theme-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, quas.
      </p>

      <a
  href="tel:+911234567890"
  className="
    px-6 py-2.5 rounded-lg font-medium text-white
    bg-orange-500 hover:bg-orange-600
    dark:bg-brand-500 dark:hover:bg-brand-600
    focus:outline-none
    focus:ring-2 focus:ring-orange-500/40
    dark:focus:ring-brand-500/40
    transition-colors
  "
>
  +91 1234567890
</a>

    </div>
  );
}
