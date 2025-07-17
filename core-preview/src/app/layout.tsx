"use client";
import { RootLayout } from "crezlo-core/components";
import "@core/dist/index.css";
export default function RootPreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      {/* <AppProvider> */}
        <AuthProvider>
          {children}
          </AuthProvider>
      {/* </AppProvider> */}
    </RootLayout>
  );
}
