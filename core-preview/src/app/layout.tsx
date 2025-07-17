"use client";
import { RootLayout } from "crezlo-core/components";
import { AuthProvider } from "crezlo-core/context-providers";
import "crezlo-core/styles.css";
export default function RootPreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      {/* <AppProvider> */}
      <AuthProvider>{children}</AuthProvider>
      {/* </AppProvider> */}
    </RootLayout>
  );
}
