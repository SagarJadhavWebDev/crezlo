import { ThemeProvider } from "next-themes";
import "../../styles/index.css";
import { AppProvider } from "../../context-providers";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`font-reddit`} lang="en" suppressHydrationWarning>
      <head></head>
      <body className="font-reddit antialiased bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400" cz-shortcut-listen="true">
        <div className="flex flex-col h-[100vh]">
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <AppProvider>
              {children}
              </AppProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
