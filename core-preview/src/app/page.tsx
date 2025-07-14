"use client";
import { Sidebar } from "core/components";
import { useAppProvider } from "core/context-providers";

export default function Home() {
  const { sidebarExpanded, setSidebarExpanded, sidebarOpen } = useAppProvider();
  console.log("sidebarExpanded", sidebarExpanded, sidebarOpen);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Sidebar
        menus={[
          {
            name: "Products",
            items: [
              {
                label: "Plugins",
                value: "plugin",
                href: "routes.plugin()",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                    <path
                      d="M68 12C59.1562 12 52 19.1563 52 28H28V48C19.1563 48 12 55.1562 12 64C12 72.8438 19.1563 80 28 80V100H52C52 108.844 59.1562 116 68 116C76.8438 116 84 108.844 84 100H108V72H100C95.2344 72 92 68.7656 92 64C92 59.2344 95.2344 56 100 56H108V28H84C84 19.1563 76.8438 12 68 12ZM68 20C72.7656 20 76 23.2344 76 28V36H100V48C91.1562 48 84 55.1562 84 64C84 72.8438 91.1562 80 100 80V92H76V100C76 104.766 72.7656 108 68 108C63.2344 108 60 104.766 60 100V92H36V72H28C23.2344 72 20 68.7656 20 64C20 59.2344 23.2344 56 28 56H36V36H60V28C60 23.2344 63.2344 20 68 20Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
              },
              {
                label: "Channel Builder",
                value: "channel-builder",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    ></path>
                  </svg>
                ),
                subMenu: [
                  {
                    label: "Channels",
                    href: "routes.channelBuilder()",
                    value: "channel-builder",
                  },
                  {
                    label: "Collections",
                    href: "routes.collections()",
                    value: "collections",
                  },
                  {
                    label: "Packages",
                    href: "routes.packages()",
                    value: "packages",
                  },
                ],
              },
            ],
          },
          {
            items: [
              {
                label: "Plugins",
                value: "plugin",
                href: "routes.plugin()",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                    <path
                      d="M68 12C59.1562 12 52 19.1563 52 28H28V48C19.1563 48 12 55.1562 12 64C12 72.8438 19.1563 80 28 80V100H52C52 108.844 59.1562 116 68 116C76.8438 116 84 108.844 84 100H108V72H100C95.2344 72 92 68.7656 92 64C92 59.2344 95.2344 56 100 56H108V28H84C84 19.1563 76.8438 12 68 12ZM68 20C72.7656 20 76 23.2344 76 28V36H100V48C91.1562 48 84 55.1562 84 64C84 72.8438 91.1562 80 100 80V92H76V100C76 104.766 72.7656 108 68 108C63.2344 108 60 104.766 60 100V92H36V72H28C23.2344 72 20 68.7656 20 64C20 59.2344 23.2344 56 28 56H36V36H60V28C60 23.2344 63.2344 20 68 20Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
              },
              {
                label: "Channel Builder",
                value: "channel-builder",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    ></path>
                  </svg>
                ),
                subMenu: [
                  {
                    label: "Channels",
                    href: "routes.channelBuilder()",
                    value: "channel-builder",
                  },
                  {
                    label: "Collections",
                    href: "routes.collections()",
                    value: "collections",
                  },
                  {
                    label: "Packages",
                    href: "routes.packages()",
                    value: "packages",
                  },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  );
}
