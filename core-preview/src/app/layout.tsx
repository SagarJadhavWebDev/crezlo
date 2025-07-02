"use client";
import { AppProvider, RootLayout } from "@core";
import "@core/dist/index.css"
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
