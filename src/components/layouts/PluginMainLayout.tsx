import { ReactNode } from "react";
import { Loader } from "../common";

interface PluginMainLayoutProps {
  title: string;
  buttonLabel: string;
  buttonClick: () => void;
  loading: boolean;
  children: ReactNode;
  secondaryButtoon?:ReactNode;
}
export function PluginMainLayout({
  title,
  buttonClick,
  buttonLabel,
  loading,
  children,
  secondaryButtoon,
}: PluginMainLayoutProps) {
  return (
    <div className="flex h-[100dvh] overflow-hidden">
      <div className="relative flex flex-col flex-1  overflow-y-auto overflow-x-hidden">
        <div className="grow [&>*:first-child]:scroll-mt-16">
          <div className="flex h-[100dvh] overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto">
              <main className="grow [&>*:first-child]:scroll-mt-16">
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
                  <div className="mt-4">
                    <div className="sm:flex sm:justify-between sm:items-center mb-8">
                      <div className="mb-4 sm:mb-0">
                        <h1 className="text-2xl capitalize md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                          {title}
                        </h1>
                      </div>

                      <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                      {secondaryButtoon}  <div
                          className="btn btn-black"
                          onClick={buttonClick}
                        >
                          <span className="max-xs:sr-only capitalize">
                            {buttonLabel}
                          </span>
                        </div>
                        
                      </div>
                    </div>
                    {/* <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-6"> */}
                      {loading ? (
                        <div className="flex w-full justify-center items-center">
                          <Loader size={30} />
                        </div>
                      ) : (
                        children
                      )}
                    {/* </div> */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

