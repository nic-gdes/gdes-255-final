import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIC GDES 255 Final",
  description: "In Year 2, I'll advance to intermediate proficiency in HTML/CSS/JS. I'll master HTML5, CSS Flexbox/Grid, and JavaScript DOM manipulation for real-world projects. Git for version control and staying updated with industry trends will also be priorities."
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
