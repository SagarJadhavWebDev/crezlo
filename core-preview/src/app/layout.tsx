"use client";
import { AppProvider, RootLayout } from "@core";
// import "@core/src/styles/index.css"
export default function RootPreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      <AppProvider >{children}</AppProvider>
    </RootLayout>
  );
}
