
import '../../styles/index.css';

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`font-reddit`} lang="en" suppressHydrationWarning>
      <head>
       
      </head>
      <body className="font-reddit antialiased bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
       {children}
      </body>
    </html>
  );
}
