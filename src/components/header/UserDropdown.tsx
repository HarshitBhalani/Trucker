"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

function changeLanguage(lang: string) {
const select = document.querySelector(
  ".goog-te-combo"
) as HTMLSelectElement;

if (select) {
  select.value = lang;
  select.dispatchEvent(new Event("change"));
}
}
export default function UserDropdown() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  // Auto open dropdown when user is on /profile
 useEffect(() => {
  // Close dropdown on route change
  setIsOpen(false);
}, [pathname]);


  const isProfileActive = pathname === "/profile";


  return (
    <div className="relative">
      {/* TRIGGER */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle"
      >
        <span className="mr-3 h-11 w-11 overflow-hidden rounded-full">
          <Image
            src="/images/user/owner.jpg"
            alt="User"
            width={44}
            height={44}
          />
        </span>

        
        <div><span className="mr-1 block font-medium text-theme-sm">Harshit</span><span className="text-[10px]">APMLXXXX</span></div>

        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* DROPDOWN */}
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        {/* USER INFO */}
        <div>
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            Harshit Bhalani
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
            APMLXXXX
          </span>
        </div>

        {/* MENU */}
        <ul className="flex flex-col gap-1 border-b border-gray-200 pt-4 pb-3 dark:border-gray-800">
          {/* PROFILE */}
          <li>
            <DropdownItem
              tag="a"
              href="/profile"
              onItemClick={closeDropdown}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium
                ${
                  isProfileActive
                    ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                }
              `}
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z"
                  fill=""
                />
              </svg>
              Edit profile
            </DropdownItem>
          </li>

          {/* MEMBERSHIP */}
          <li>
            <DropdownItem
              tag="a"
              href="/profile"
              onItemClick={closeDropdown}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 256 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-500 dark:stroke-gray-400"
              >
                <path
                  d="M183.882 38.248c0 8.995 7.292 16.287 16.287 16.287s16.287-7.292 16.287-16.287-7.292-16.287-16.287-16.287-16.287 7.292-16.287 16.287ZM167.193 92.774v-12.72c0-11.179 9.126-20.349 20.349-20.349h26.642c11.179 0 20.349 9.126 20.349 20.349v12.72H167.193ZM95.721 2.416v23.543c-2.871 0-8.236.615-12.1 1.784-10.322 3.123-19.031 10.11-24.369 21.786L2 175.584h78.75l5.069-16.893c22.193-5.386 38.809-22.446 45.51-43.894l.084.001c.167-.748.389-1.483.627-2.214H254V2.416H95.721ZM246.125 104.709H115.408c-2.957 15.124-14.146 28.884-29.224 35.043a4.08 4.08 0 0 1-1.488.293c-1.552 0-3.023-.924-3.647-2.449-.822-2.013.143-4.311 2.156-5.134 14.768-6.032 25.085-20.66 25.105-35.583v-3.981h40.386c5.966 0 10.803-4.837 10.803-10.803 0-5.962-4.83-10.797-10.793-10.802l-70.91-.053c-2.174 0-3.938-1.763-3.938-3.938s1.763-3.938 3.938-3.938h25.799V10.291h142.529v94.418Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Membership
            </DropdownItem>
          </li>

          {/* Refer & Earn */}
          <li>
            <DropdownItem
              tag="a"
              href="/profile"
              onItemClick={closeDropdown}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-500 dark:stroke-gray-400"
              >
                {/* Coin / Badge */}
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                {/* Star */}
                <path
                  d="M12 7.5l1.4 2.8 3.1.4-2.25 2.2.55 3.1L12 14.6l-2.8 1.5.55-3.1-2.25-2.2 3.1-.4L12 7.5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              Refer & Earn
            </DropdownItem>
          </li>

          {/* Language */}
          <li>
            <DropdownItem
              tag="a"
              href="/profile"
              onItemClick={closeDropdown}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              {/* Language SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <!-- Left: Language / Alphabet --> */}
                <path
                  d="M3 5H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 5V3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M5 9C6.5 11.5 8.5 13.5 11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 9C7.5 11.5 5.5 13.5 3 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* <!-- Right: Translation / Global --> */}
                <path
                  d="M15 21L18 13L21 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 18H19.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              
              Language
            </DropdownItem>
          </li>
          
          {/* HELP &SUPPORT */}
          <li>
            <DropdownItem
              tag="a"
              href="/profile"
              onItemClick={closeDropdown}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.0991 7.52507C11.0991 8.02213 11.5021 8.42507 11.9991 8.42507H12.0001C12.4972 8.42507 12.9001 8.02213 12.9001 7.52507C12.9001 7.02802 12.4972 6.62507 12.0001 6.62507H11.9991C11.5021 6.62507 11.0991 7.02802 11.0991 7.52507ZM12.0001 17.3714C11.5859 17.3714 11.2501 17.0356 11.2501 16.6214V10.9449C11.2501 10.5307 11.5859 10.1949 12.0001 10.1949C12.4143 10.1949 12.7501 10.5307 12.7501 10.9449V16.6214C12.7501 17.0356 12.4143 17.3714 12.0001 17.3714Z"
                  fill=""
                />
              </svg>
              Help & support
            </DropdownItem>
          </li>
        </ul>

        {/* LOGOUT / DELETE */}
        <div className="mt-3 flex gap-2">
          {/* LOGOUT */}
          <Link
            href="/signin"
            className="group flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-theme-sm font-medium
      text-gray-700 hover:bg-orange-100
      dark:text-gray-400 dark:hover:bg-orange-400/20 dark:hover:text-orange-300"
          >
            {/* Logout SVG */}
            <svg
              className="fill-gray-500 group-hover:fill-orange-600 dark:group-hover:fill-orange-400"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.75 3.75H9.75C8.50736 3.75 7.5 4.75736 7.5 6V8.25C7.5 8.66421 7.83579 9 8.25 9C8.66421 9 9 8.66421 9 8.25V6C9 5.58579 9.33579 5.25 9.75 5.25H15.75C16.1642 5.25 16.5 5.58579 16.5 6V18C16.5 18.4142 16.1642 18.75 15.75 18.75H9.75C9.33579 18.75 9 18.4142 9 18V15.75C9 15.3358 8.66421 15 8.25 15C7.83579 15 7.5 15.3358 7.5 15.75V18C7.5 19.2426 8.50736 20.25 9.75 20.25H15.75C16.9926 20.25 18 19.2426 18 18V6C18 4.75736 16.9926 3.75 15.75 3.75ZM10.7197 8.46967C11.0126 8.17678 11.4874 8.17678 11.7803 8.46967L14.7803 11.4697C15.0732 11.7626 15.0732 12.2374 14.7803 12.5303L11.7803 15.5303C11.4874 15.8232 11.0126 15.8232 10.7197 15.5303C10.4268 15.2374 10.4268 14.7626 10.7197 14.4697L12.4393 12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H12.4393L10.7197 9.53033C10.4268 9.23744 10.4268 8.76256 10.7197 8.46967Z"
                fill=""
              />
            </svg>
            Logout
          </Link>

          {/* DELETE (EXISTING – UNCHANGED) */}
          <Link
            href="/signin"
            className="group flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-theme-sm font-medium
      text-gray-700 hover:bg-red-100
      dark:text-gray-400 dark:hover:bg-red-300 dark:hover:text-black"
          >
            {/* Existing Delete SVG */}
            <svg
              className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-black"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z"
                fill=""
              />
            </svg>
            Delete
          </Link>
        </div>
      </Dropdown>
    </div>
  );
}

