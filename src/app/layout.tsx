import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIC GDES 255 Final",
  description: "My goals for next years WevDev class is to solidify my skills in React and Vanilla Javascript. Over the summer, I'm going to try to go back to vanilla Javascript and really try to get a deeper grasp onto some of the concepts, as well as try to do some projects. I want to feel confident enough to maybe get an entry level job in web dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
