import { ThemeProvider } from "next-themes";
import "../../styles/index.css";
import { AppProvider } from "../../context-providers";
import { Toaster } from "sonner";
import { SWRConfig } from "swr";
export default function RootLayout({ children, headers }: { children: React.ReactNode; headers?: React.ReactNode | React.ReactNode[] }) {
  return (
    <html className={`font-reddit`} lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="msvalidate.01" content="8210EC310B3CAD83AD7DE55EF6BEF474" />
        <script defer async src="https://docs.crezlo.com/widgets_sdk"></script>
        {headers ?? <></>}
      </head>
      <body className="font-reddit antialiased bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400" cz-shortcut-listen="true">
        <div className="flex flex-col h-[100vh]">
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <SWRConfig
              value={{
                revalidateIfStale: false,
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
              }}
            >
              <AppProvider>{children}</AppProvider>
            </SWRConfig>
            <Toaster richColors={true} expand={true} />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
