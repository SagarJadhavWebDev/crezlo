import React, { ReactNode, useState } from "react";

type Tab = {
  label: string;
  key: string;
};

type DynamicTabsProps = {
  tabs: Tab[];

  children: ReactNode[];
};

const DynamicTabs: React.FC<DynamicTabsProps> = ({ tabs, children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabClick = (key: string, index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="w-full   ">
      <ul className="relative text-sm font-medium flex flex-nowrap  overflow-x-scroll no-scrollbar">
        <div
          className="absolute bottom-0 w-full h-px bg-gray-200 dark:bg-gray-700/60"
          aria-hidden="true"
        ></div>{" "}
        {tabs.map((tab, index) => (
          <li
            key={tab.key}
            className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
          >
            <button
              onClick={() => handleTabClick(tab.key, index)}
              className={`block pb-2 whitespace-nowrap border-b-2 ${
                activeTabIndex === index
                  ? "text-violet-500 border-violet-500"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="my-4">{children[activeTabIndex]}</div>
    </div>
  );
};

export default DynamicTabs;
