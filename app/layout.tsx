import type { Metadata } from "next";
import "./globals.css";
import { robotoFont } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Ignite - Call",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${robotoFont.className} bg-gray-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
