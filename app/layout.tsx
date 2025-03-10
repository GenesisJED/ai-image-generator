import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";

const font = Roboto({
  weight:['100', '300', '400', '500', '700', '900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "AI Image Generation",
  description: "AI Image Generation using next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gray-900 antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
