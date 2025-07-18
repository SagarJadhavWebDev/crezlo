import { ReactNode } from "react";

interface PluginCardProps {
  onCardClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title: string;
  topRightIcon?: ReactNode;
  actions: ReactNode[];
  imageIcon?: ReactNode;
}
export const PluginCard: React.FC<PluginCardProps> = ({ onCardClick, title, topRightIcon, actions, imageIcon }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onCardClick(e);
      }}
      className="bg-white w-full border  border-gray-200  dark:border-gray-800 cursor-pointer dark:bg-gray-800 shadow-sm rounded-xl hover:outline hover:outline-indigo-500"
    >
      <div className="flex flex-col h-full">
        {/* Card top */}
        <div className="grow p-5">
          <div className="flex justify-between items-start">
            {/* Image + name */}
            <header>
              <div className="flex mb-2">
                <div className="mt-1 pr-1">
                  {imageIcon}
                  <span className="inline-flex text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white">
                    <h2 className="text-xl leading-snug justify-center font-semibold">{title}</h2>
                  </span>
                </div>
              </div>
            </header>
            {/* Menu button */}
            {topRightIcon}
          </div>
          {/* Bio */}
          {/* <div className="mt-2">
            <div className="text-sm">{item?.content}</div>
          </div> */}
        </div>
        {/* Card footer */}
        <div className="border-t border-gray-100 dark:border-gray-700/60">
          <div className="flex divide-x divide-gray-100 dark:divide-gray-700/60">{actions?.map((a) => a)}</div>
        </div>
      </div>
    </div>
  );
};
