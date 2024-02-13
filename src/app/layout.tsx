import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DocContextProvider } from "@/context/docContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareCtxt",
  description: "Share Cool Text For Free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <DocContextProvider>
          {children}
        </DocContextProvider>
      </body>
    </html>
  );
}
