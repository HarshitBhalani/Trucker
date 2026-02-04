"use client";
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

      <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
        Book Trucks Online. Move Freight Faster. Connecting Truckers, Shippers &
        Businesses Across India
      </p>

      {/* CONTACT ACTIONS */}
      <div className="flex items-center justify-center gap-3">
        {/* CALL */}
        <a
          href="tel:+911234567890"
          className="
            flex h-10 w-10 items-center justify-center rounded-full
            bg-orange-500 text-white
            hover:bg-orange-600
            dark:bg-brand-500 dark:hover:bg-brand-600
            focus:outline-none focus:ring-2 focus:ring-orange-500/40
            dark:focus:ring-brand-500/40
            transition-colors
          "
          aria-label="Call"
        >
          {/* SVG — NO CHANGE */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2
              19.79 19.79 0 0 1-8.63-3.07
              19.5 19.5 0 0 1-6-6
              19.79 19.79 0 0 1-3.07-8.67
              A2 2 0 0 1 4.11 2h3
              a2 2 0 0 1 2 1.72
              c.12.9.32 1.77.57 2.61
              a2 2 0 0 1-.45 2.11L8.09 9.91
              a16 16 0 0 0 6 6l1.47-1.47
              a2 2 0 0 1 2.11-.45
              c.84.25 1.71.45 2.61.57
              a2 2 0 0 1 1.72 2z"
              fill="currentColor"
            />
          </svg>
        </a>

        {/* EMAIL */}
        <a
          href="mailto:support@apexcelmove.com"
          className="
            flex h-10 w-10 items-center justify-center rounded-full
            bg-orange-500 text-white
            hover:bg-orange-600
            dark:bg-brand-500 dark:hover:bg-brand-600
            focus:outline-none focus:ring-2 focus:ring-orange-500/40
            dark:focus:ring-brand-500/40
            transition-colors
          "
          aria-label="Email"
        >
          {/* SVG — NO CHANGE */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4
              a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7 8-5H4l8 5zm0 2L4 8v10h16V8l-8 5z"
              fill="currentColor"
            />
          </svg>
        </a>

        {/* WHATSAPP (SMS replaced) */}
        <a
          href="https://wa.me/911234567890?text=Hello%20Apexcel%20Move%20Support"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex h-10 w-10 items-center justify-center rounded-full
            bg-orange-500 text-white
            hover:bg-orange-600
            dark:bg-brand-500 dark:hover:bg-brand-600
            focus:outline-none focus:ring-2 focus:ring-orange-500/40
            dark:focus:ring-brand-500/40
            transition-colors
          "
          aria-label="WhatsApp"
        >
          {/* SVG — SAME AS SMS (NO CHANGE) */}
          <svg
  width="18"
  height="18"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path
    d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.819.62 3.498 1.654 4.841L2 18.333l3.642-1.192A8.29 8.29 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667Zm0 15c-1.36 0-2.62-.38-3.69-1.038l-.265-.162-2.16.707.705-2.105-.173-.273A6.65 6.65 0 0 1 3.333 10c0-3.68 2.987-6.667 6.667-6.667 3.68 0 6.667 2.987 6.667 6.667 0 3.68-2.987 6.667-6.667 6.667Zm3.658-4.908c-.2-.1-1.18-.582-1.363-.648-.183-.067-.317-.1-.45.1-.133.2-.517.648-.633.78-.117.133-.233.15-.433.05-.2-.1-.85-.313-1.617-.998-.597-.533-.998-1.19-1.115-1.39-.117-.2-.012-.308.088-.408.09-.09.2-.233.3-.35.1-.117.133-.2.2-.333.067-.133.033-.25-.017-.35-.05-.1-.45-1.083-.617-1.483-.162-.39-.327-.337-.45-.343h-.383c-.133 0-.35.05-.533.25-.183.2-.7.683-.7 1.667 0 .983.717 1.933.817 2.067.1.133 1.41 2.158 3.417 3.025.478.207.85.33 1.14.423.5.16.95.138 1.31.083.4-.05 1.217-.5 1.383-.983.167-.483.167-.9.117-.983-.05-.083-.183-.133-.383-.233Z"
  />
</svg>

        </a>
      </div>
    </div>
  );
}
