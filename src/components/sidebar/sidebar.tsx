import { useSelectedLayoutSegments } from "next/navigation";
import { useRef, useEffect } from "react";
import SidebarLink from "./sidebar-link";
import SidebarLinkGroup from "./sidebar-link-group";
import Link from "next/link";
import { useWindowWidth } from "../../utils/use-window-width";
import Logo from "./logo";
import { useAppProvider } from "../../context-providers/AppProvider";

interface SubMenu {
  label: string;
  value: string;
  href?: string;
}

export interface MenuItem {
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
  subMenu?: SubMenu[];
  badge?: string | number;
}

export interface Menu {
  name?: string;
  items: MenuItem[];
}
interface SidebarProps {
  variant?: "default" | "v2";
  menus: Menu[];
  logoUrl?: string;
  logoLabel?: string;
  marketPlaceMenu?: MarketPlaceMenuItem;
}

interface MarketPlaceMenuItem {
  value?: string;
  href?: string;
}

export default function Sidebar({
  variant = "v2",
  menus,
  logoLabel,
  logoUrl,
  marketPlaceMenu = { href: "plugins", value: "plugins" },
}: SidebarProps) {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded } = useAppProvider();
  console.log("sidebarExpanded", sidebarExpanded, sidebarOpen);
  const segments = useSelectedLayoutSegments();
  const breakpoint = useWindowWidth();
  const expandOnly = !sidebarExpanded && breakpoint && breakpoint >= 1024 && breakpoint < 1536;

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <div className={`min-w-fit  ${sidebarExpanded ? "sidebar-expanded" : ""}`}>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out  ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${variant === "v2" ? "border-r border-gray-200 dark:border-gray-700/60" : "rounded-r-2xl shadow-xs"} `}
      >
        {/* Sidebar header */}
        <div className="flex justify-center mb-5 pr-3 sm:px-2">
          {/* Close button */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          <Logo imageUrl={logoUrl} label={logoLabel} />
        </div>

        <div className="space-y-0 flex-1">
          {menus?.map((menu, index) => (
            <div key={index}>
              {menu?.name && (
                <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
                  <span className="hidden lg:block lg:sidebar-expanded:hidden text-center w-6" aria-hidden="true">
                    •••
                  </span>
                  <span className="lg:hidden lg:sidebar-expanded:block">{menu?.name}</span>
                </h3>
              )}
              <ul className="mt-3">
                {menu.items?.map((item) => {
                  const isMenuActive = segments?.includes(item?.value) || item?.subMenu?.some((s) => segments?.includes(s?.value));

                  return (
                    <SidebarLinkGroup key={item?.label} open={isMenuActive}>
                      {(handleClick, open) => {
                        const Wrapper: any = item?.href ? Link : "div";

                        return (
                          <>
                            <Wrapper
                              {...(item?.href ? { href: item?.href } : {})}
                              // href="#0"
                              className={`block cursor-pointer text-gray-800 dark:text-gray-100 truncate transition ${
                                isMenuActive ? "" : "hover:text-gray-900 dark:hover:text-white"
                              }`}
                              onClick={(e) => {
                                // e.preventDefault();
                                expandOnly ? setSidebarExpanded(true) : handleClick();
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex flex-1 items-center">
                                  <span className={`shrink-0 fill-current ${isMenuActive ? "text-indigo-500" : "text-gray-400 dark:text-gray-500"}`}>
                                    {item?.icon}
                                  </span>
                                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200">
                                    {item?.label}
                                  </span>
                                </div>
                                {/* Icon */}
                                {item?.badge && (
                                  <div className="flex shrink-0 ml-2">
                                    <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">
                                      {item?.badge}
                                    </span>
                                  </div>
                                )}
                                {!item?.href && (
                                  <div className="flex shrink-0 ml-2">
                                    <svg
                                      className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${open && "rotate-180"}`}
                                      viewBox="0 0 12 12"
                                    >
                                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </Wrapper>
                            {item?.subMenu && (
                              <div className="lg:hidden lg:sidebar-expanded:block">
                                <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
                                  {item?.subMenu?.map((sub) => {
                                    return (
                                      <li key={sub?.label} className="mb-1 last:mb-0">
                                        <SidebarLink href={sub?.href} active={segments?.includes(sub?.value)}>
                                          <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200">
                                            {sub?.label}
                                          </span>
                                        </SidebarLink>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </>
                        );
                      }}
                    </SidebarLinkGroup>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Expand / collapse button */}
        <div className={"flex justify-between items-center mb-4"}>
          {sidebarExpanded ? (
            <SidebarLink href={marketPlaceMenu?.href} active={segments?.includes(marketPlaceMenu?.value)}>
              <div className="flex items-center">
                <svg
                  className={`shrink-0 fill-current ${
                    segments?.includes(marketPlaceMenu?.value) ? "text-violet-500" : "text-gray-400 dark:text-gray-500"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.92 6.851c.044-.027.09-.05.137-.07.481-.275.758-.68.908-1.256.126-.55.169-.81.357-2.058.075-.498.144-.91.217-1.264-4.122.75-7.087 2.984-9.12 6.284a18.087 18.087 0 0 0-1.985 4.585 17.07 17.07 0 0 0-.354 1.506c-.05.265-.076.448-.086.535a1 1 0 0 1-1.988-.226c.056-.49.209-1.312.502-2.357a20.063 20.063 0 0 1 2.208-5.09C5.31 3.226 9.306.494 14.913.004a1 1 0 0 1 .954 1.494c-.237.414-.375.993-.567 2.267-.197 1.306-.244 1.586-.392 2.235-.285 1.094-.789 1.853-1.552 2.363-.748 3.816-3.976 5.06-8.515 4.326a1 1 0 0 1 .318-1.974c2.954.477 4.918.025 5.808-1.556-.628.085-1.335.121-2.127.121a1 1 0 1 1 0-2c1.458 0 2.434-.116 3.08-.429Z" />
                </svg>
                <span
                  className={`text-md font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200 ${
                    segments?.includes(marketPlaceMenu?.value) ? "text-indigo-500" : ""
                  }`}
                >
                  Market Place
                </span>
              </div>
            </SidebarLink>
          ) : null}
          <div className="pl-4 pr-3 py-2">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => {
                console.log("SETTING", sidebarExpanded, sidebarOpen);
                setSidebarExpanded(!sidebarExpanded);
              }}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
