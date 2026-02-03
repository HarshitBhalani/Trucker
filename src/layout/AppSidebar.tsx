"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  ComponentType,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";

import {
  HorizontaLDots,
  BoxCubeIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  PageIcon,
  UserCircleIcon,
} from "../icons";

import SidebarWidget from "./SidebarWidget";

import {
  Squares2X2Icon,
  ClipboardDocumentListIcon,
  ListBulletIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";


/* ===================== TYPES ===================== */
type NavItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  path?: string;
  subItems?: {
    name: string;
    path: string;
  }[];
};

/* ===================== MENU DATA ===================== */
const navItems: NavItem[] = [
  { name: "Home", icon: Squares2X2Icon, path: "/" },
  { name: "Load", icon: ClipboardDocumentListIcon, path: "/calendar" },
  { name: "Moves", icon: ListBulletIcon, path: "/form-elements" },
  { name: "Chat", icon: ChatBubbleLeftRightIcon, path: "/app/(admin)/(others-pages)/chat/chat" },
  { name: "Wallet", icon: WalletIcon, path: "/wallet" },
  { name: "User Profile", icon: UserCircleIcon, path: "/profile" },
];


// const othersItems: NavItem[] = [
//   {
//     name: "Charts",
//     icon: PieChartIcon,
//     subItems: [
//       { name: "Line Chart", path: "/line-chart" },
//       { name: "Bar Chart", path: "/bar-chart" },
//     ],
//   },
//   {
//     name: "UI Elements",
//     icon: BoxCubeIcon,
//     subItems: [
//       { name: "Alerts", path: "/alerts" },
//       { name: "Avatar", path: "/avatars" },
//       { name: "Badge", path: "/badge" },
//       { name: "Buttons", path: "/buttons" },
//       { name: "Images", path: "/images" },
//       { name: "Videos", path: "/videos" },
//     ],
//   },
//   {
//     name: "Authentication",
//     icon: PlugInIcon,
//     subItems: [
//       { name: "Sign In", path: "/signin" },
//       { name: "Sign Up", path: "/signup" },
//     ],
//   },
// ];

/* ===================== COMPONENT ===================== */
const AppSidebar: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const isCollapsed = !isExpanded && !isHovered && !isMobileOpen;

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);

  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    if (!openSubmenu) return;
    const key = `${openSubmenu.type}-${openSubmenu.index}`;
    const el = subMenuRefs.current[key];
    if (el) {
      setSubMenuHeight((prev) => ({ ...prev, [key]: el.scrollHeight }));
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, type: "main" | "others") => {
    setOpenSubmenu((prev) =>
      prev && prev.type === type && prev.index === index
        ? null
        : { type, index },
    );
  };

  const renderMenuItems = (items: NavItem[], type: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => {
        const Icon = nav.icon;
        const isOpen =
          openSubmenu?.type === type && openSubmenu?.index === index;

        return (
          <li key={nav.name}>
            {nav.subItems ? (
              <button
                onClick={() => handleSubmenuToggle(index, type)}
                className={`menu-item group ${
                  isOpen ? "menu-item-active" : "menu-item-inactive"
                } ${isCollapsed ? "justify-center px-0" : ""}`}
              >
                <Icon className="h-6 w-6 menu-item-icon" />
                {!isCollapsed && <span>{nav.name}</span>}
              </button>
            ) : (
              nav.path && (
                <Link
                  href={nav.path}
                  className={`menu-item group ${
                    isActive(nav.path)
                      ? "menu-item-active"
                      : "menu-item-inactive"
                  } ${isCollapsed ? "justify-center px-0" : ""}`}
                >
                  <Icon className="h-6 w-6 menu-item-icon" />
                  {!isCollapsed && <span>{nav.name}</span>}
                </Link>
              )
            )}

            {nav.subItems && !isCollapsed && (
              <div
                ref={(el) => {
                  subMenuRefs.current[`${type}-${index}`] = el;
                }}
                className="overflow-hidden transition-all duration-300"
                style={{
                  height: isOpen
                    ? `${subMenuHeight[`${type}-${index}`] || 0}px`
                    : "0px",
                }}
              >
                <ul className="mt-2 ml-9 space-y-1">
                  {nav.subItems.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.path}
                        className={`menu-dropdown-item ${
                          isActive(sub.path)
                            ? "menu-dropdown-item-active"
                            : "menu-dropdown-item-inactive"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen flex flex-col border-r bg-white dark:bg-gray-900 transition-all duration-300
        ${isCollapsed ? "w-[90px]" : "w-[290px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LOGO */}
      <div className="py-6 flex justify-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            width={isCollapsed ? 36 : 52}
            height={isCollapsed ? 36 : 52}
            priority
          />
          {!isCollapsed && (
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Trucker
            </span>
          )}
        </Link>
      </div>

      {/* SCROLL */}
      <div
        className={`flex-1 overflow-y-auto ${
          isCollapsed ? "no-scrollbar" : "custom-scrollbar"
        }`}
      >
        <nav className="flex flex-col gap-6 px-3">
          <div>
            <h2 className="mb-4 text-xs uppercase text-gray-400 text-center">
              {isCollapsed ? <HorizontaLDots /> : "Menu"}
            </h2>
            {renderMenuItems(navItems, "main")}
          </div>

          {/* <div>
            <h2 className="mb-4 text-xs uppercase text-gray-400 text-center">
              {isCollapsed ? <HorizontaLDots /> : "Others"}
            </h2>
            {renderMenuItems(othersItems, "others")}
          </div> */}
        </nav>

        {!isCollapsed && <SidebarWidget />}
      </div>
    </aside>
  );
};

export default AppSidebar;
