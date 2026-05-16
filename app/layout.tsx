import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suryapura Gram Vikas Portal",
  description: "Digital rural development portal for village services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}