"use client";
import { RootLayout } from "core/components";
import { AppProvider, AuthProvider } from "core/context-providers";
import "@core/dist/index.css";
export default function RootPreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      <AppProvider>
        <AuthProvider>{children}</AuthProvider>
      </AppProvider>
    </RootLayout>
  );
}
