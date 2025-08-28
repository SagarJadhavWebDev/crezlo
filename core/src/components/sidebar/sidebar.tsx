"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import SidebarLink from "./sidebar-link";
import SidebarLinkGroup from "./sidebar-link-group";
import Link from "next/link";
import { useWindowWidth } from "../../utils/use-window-width";
import Logo from "./logo";
import { useAppProvider } from "../../context-providers/AppProvider";
import { ApiInstance, getFullImageUrl } from "../../utils";
import { ModalBlank } from "../modals";
import useSWR from "swr";
import { Loader } from "../common";
import { isEmpty } from "lodash";
import { appConstants, envConstants } from "../../constants";
import { BookOpen, Grip, HelpCircleIcon, Megaphone, MessageCircle } from "lucide-react";

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
  className?: string;
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
  logoUrl = getFullImageUrl("24-jul-2025/v1.png"),
  marketPlaceMenu = { href: "plugins", value: "plugins" },
}: SidebarProps) {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded } = useAppProvider();
  const segments = useSelectedLayoutSegments();
  const breakpoint = useWindowWidth();
  const [marketPlaceModalOpen, setMarketPlaceModalOpen] = useState(false);
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
        className={`flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${variant === "v2" ? "border-r border-gray-200 dark:border-gray-700/60" : "rounded-r-2xl shadow-xs"}`}
      >
        {/* Sidebar header */}
        <div className="flex justify-center mb-5 sm:px-2">
          {/* Close button */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-400 mr-5"
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

        <div className="space-y-6 flex-1">
          {[
            ...(menus ?? []),
            {
              name: "",
              items: [
                {
                  label: "Ideas",
                  value: "orders",
                  icon: <MessageCircle size={20} />,
                  href: "#",
                },
                {
                  label: "Announcement",
                  value: "orders",
                  icon: <Megaphone size={20} />,
                  href: "#",
                },
                {
                  label: "Documentation",
                  value: "orders",
                  icon: <BookOpen size={20} />,
                  href: "#",
                },
                {
                  label: "Help",
                  value: "orders",
                  icon: <HelpCircleIcon size={20} />,
                  href: appConstants.CORE.SIDEBAR.help_link,
                },
              ],
            },
          ]?.map((menu, index) => (
            <div key={index}>
              {menu?.name && (
                <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
                  <span className="lg:block lg:sidebar-expanded:hidden text-center w-6" aria-hidden="true">
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
                              className={`block cursor-pointer text-gray-800 dark:text-gray-100 truncate transition ${item.className} ${
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
        <div
          className={" justify-between items-center mb-4 py-2 pl-4 pr-3 hidden lg:flex lg:sidebar-expanded:hidden cursor-pointer"}
          onClick={() => setMarketPlaceModalOpen(true)}
        >
          <Grip size={20} />
        </div>
        {/* Expand / collapse button */}
        <div className={"flex justify-between items-center mb-4 py-2 pl-4 pr-3"}>
          <div
            className={"justify-between items-center flex lg:hidden lg:sidebar-expanded:flex cursor-pointer"}
            onClick={() => setMarketPlaceModalOpen(true)}
          >
            <Grip size={20} />

            <span className={`flex-1 text-md font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200 ${"text-indigo-500"}`}>
              Market Place
            </span>
          </div>
          <button
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 hidden lg:block"
            onClick={() => {
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
      <MarketPlaceModal isOpen={marketPlaceModalOpen} setIsOpen={setMarketPlaceModalOpen} />
    </div>
  );
}

const MarketPlaceModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  const { data, isLoading, error } = useSWR("plugins/list?tag=market_place", (url: string) => ApiInstance.CORE.get(url), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  function getPluginImagePath(plugin) {
    const fallbackMap = {
      blog: "c-blog.png",
      campaigns: "c-campaigns.png",
      spaces: "c-channels.png",
      chat: "c-chat.png",
      chatbot: "c-chatbot.png",
      coupons: "c-coupons.png",
      course: "c-courses-v.png", // or use logic for `c-courses-a.png`
      document: "c-docs.png",
      ecommerce: "c-ecomm.png",
      event: "c-events.png",
      feed: "c-feed.png",
      forms: "c-forms.png",
      forum: "c-forum.png",
      funnel: "c-funnel.png",
      leads: "c-leads.png",
      pages: "c-pages.png",
      "docu-sign": "c-sign.png",
      tours: "c-vtour.png",
      sites: "c-website.png",
      "genagent-video": "c-gen-ai.png",
      podcast: "c-courses-a.png",
    };

    const slug = plugin.slug;

    if (fallbackMap[slug]) {
      return getFullImageUrl(`assets/${fallbackMap[slug] ?? "plugins.png"}`);
    }

    return null;
  }

  const getNavigationUrl = (slug: string) => {
    const urlMapping = {
      blog: envConstants.APP_URL.COMMUNITY,
      campaigns: "c-campaigns.png",
      spaces: envConstants.APP_URL.COMMUNITY,
      chat: envConstants.APP_URL.COMMUNITY,
      chatbot: envConstants.APP_URL.COMMUNITY,
      coupons: "c-coupons.png",
      course: envConstants.APP_URL.COMMUNITY, // or use logic for `c-courses-a.png`
      document: envConstants.APP_URL.COMMUNITY,
      ecommerce: "c-ecomm.png",
      event: envConstants.APP_URL.COMMUNITY,
      feed: envConstants.APP_URL.COMMUNITY,
      forms: "c-forms.png",
      forum: envConstants.APP_URL.COMMUNITY,
      funnel: "c-funnel.png",
      leads: "c-leads.png",
      pages: "c-pages.png",
      "docu-sign": "c-sign.png",
      tours: envConstants.APP_URL.VR,
      sites: envConstants.APP_URL.WEBSITE,
      "genagent-video": envConstants.APP_URL.GENAGENT,
      podcast: envConstants.APP_URL.COMMUNITY,
    };
    return urlMapping[slug];
  };

  // @ts-ignore
  const plugins = data?.data?.plugin_list?.plugins || [];
  return (
    <ModalBlank isOpen={isOpen} setIsOpen={setIsOpen} className="w-full m-2 h-auto max-w-full lg:max-w-4xl bg-gray-100 dark:bg-[#151D2C]">
      {error && <div className="w-full h-auto flex items-center justify-center">{error?.message}</div>}
      {data && (
        <section className="p-6 pb-6 lg:pb-8 border-gray-200 dark:border-gray-700/60">
          <div className="flex justify-between items-start mb-6">
            <h1 className="font-semibold text-xl lg:text-3xl text-gray-800 dark:text-gray-100">Market Place</h1>
            <button
              className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 cusror-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <div className="sr-only">Close</div>
              <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16">
                <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
              </svg>
            </button>
          </div>
          {isLoading ? (
            <div className="flex w-full justify-center items-center">
              <Loader size={200} />
            </div>
          ) : (
            // @ts-ignore
            <div className={`grid  ${isEmpty(plugins) ? "w-full" : "md:grid-cols-3"} gap-6 text-center`}>
              {/* Card 1 */}
              {/* @ts-ignore */}
              {isEmpty(plugins) ? (
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
                  <div className="max-w-2xl m-auto mt-16">
                    <div className="text-center px-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 mb-4">
                        <svg className="w-5 h-6 fill-current" viewBox="0 0 20 24">
                          <path className="text-gray-500 dark:text-gray-600" d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z" />
                          <path className="text-gray-300 dark:text-gray-400" d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z" />
                          <path className="text-gray-400 dark:text-gray-500" d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-2">No Data Found</h2>
                    </div>
                  </div>
                </div>
              ) : (
                plugins?.map((app, key) => {
                  return (
                    <a
                      key={key}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      target="_blank"
                      href={getNavigationUrl(app?.slug)}
                      className="bg-white cursor-pointer dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm rounded-lg hover:outline hover:outline-indigo-500"
                    >
                      {/*  Card content */}
                      <div className="flex flex-col h-full p-5 relative">
                        <div className="grow">
                          <header className="flex items-center mb-2">
                            <div className={"w-10 h-10 rounded-full shrink-0 mr-3 " + (app?.image || "bg-gray-400")}>
                              <img className="w-10 h-10 object-cover rounded-full" src={getPluginImagePath(app)} alt="Application 13" />
                            </div>
                            <h3 className="text-lg text-gray-800 dark:text-gray-100 font-semibold capitalize">
                              {app?.title ?? "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor."}
                            </h3>
                          </header>
                          <div className="text-sm text-start">{app?.description ?? "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor."}</div>
                        </div>

                        {/* {viewPlans?.includes(app?.slug) && (
                              <div className="flex justify-end">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(routes.plans(app?.slug));
                                  }}
                                  className={` cursor-pointer hover:text-indigo-500 flex items-center text-sm font-medium leading-5 rounded-full px-3 py-1  shadow-sm transition`}
                                >
                                  View Plans <ChevronRight size={16} />
                                </button>
                              </div>
                            )} */}
                      </div>
                    </a>
                  );
                })
              )}
            </div>
          )}
        </section>
      )}
    </ModalBlank>
  );
};
