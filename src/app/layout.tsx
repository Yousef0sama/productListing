// imports

// styles

import "../styles/global.css"

// interfaces

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "product list",
  description: "product list",
};

export const viewport : Viewport = {
  width : "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
