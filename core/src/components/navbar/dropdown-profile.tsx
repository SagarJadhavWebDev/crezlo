"use client";
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { useAuth } from "../../context-providers";
import { FallBackAvatar } from "../common";

export default function DropdownProfile({ align }: { align?: "left" | "right" }) {
  const auth = useAuth();
  const user = auth?.user;
  console.log("AUTH:", user);
  return (
    <Menu as="div" className="relative inline-flex">
      <MenuButton className="inline-flex justify-center items-center group">
        {/* @ts-ignore */}
        <FallBackAvatar email={user?.email ?? "User"} profilePicture={user?.avatar?.url ?? "/"} size={40} />
      </MenuButton>
      <Transition
        as="div"
        className={`origin-top-right z-10 absolute top-full min-w-[11rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200 dark:border-gray-700/60">
          <div className="font-medium text-gray-800 dark:text-gray-100">{"Acme Inc."}</div>
        </div>
        <MenuItems as="ul" className="focus:outline-none">
          <MenuItem onClick={() => {}} as="li">
            {({ active }) => (
              <span
                className={`font-medium cursor-pointer text-sm flex items-center py-1 px-3 ${
                  active ? "text-violet-600 dark:text-violet-400" : "text-violet-500"
                }`}
              >
                Sign Out
              </span>
            )}
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
