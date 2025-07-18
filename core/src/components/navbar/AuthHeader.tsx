"use client";
import { ReactNode } from "react";
import { useAppProvider } from "../../context-providers";
import ThemeToggle from "./theme-toggle";
import DropdownProfile from "./dropdown-profile";

interface AuthHeaderProps {
  variant?: "default" | "v2" | "v3";
  items?: ReactNode[] | ReactNode;
  onSubscriptionClick?: () => void;
}
export function AuthHeader({ variant = "default", items, onSubscriptionClick }: AuthHeaderProps) {
  const { sidebarOpen, setSidebarOpen } = useAppProvider();

  return (
    <header
      className={`sticky top-0   before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 ${
        variant === "v2" || variant === "v3"
          ? "before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10"
          : "max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90"
      } ${variant === "v2" ? "dark:before:bg-gray-800" : ""} ${variant === "v3" ? "dark:before:bg-gray-900" : ""}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-16 ${
            variant === "v2" || variant === "v3" ? "" : "lg:border-b border-gray-200 dark:border-gray-700/60"
          }`}
        >
          {/* Header: Left side */}
          <div className="flex items-center space-x-3">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            
          </div>

          <div className="flex-1 flex flex-row items-center justify-start gap-3">{items}</div>

          <div className="flex items-center space-x-3">
            {onSubscriptionClick && (
              <button
                onClick={onSubscriptionClick}
                className={` cursor-pointer  text-indigo-500 flex items-center text-sm font-medium leading-5 rounded-full px-3 py-1  shadow-sm transition border border-indigo-500 hover:text-gray-800 hover:border-gray-800`}
              >
                Subscription
              </button>
            )}
            <ThemeToggle />

            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" />
            <DropdownProfile align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}
