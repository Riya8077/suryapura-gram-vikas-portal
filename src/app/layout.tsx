import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "सूर्यपुरा ग्राम विकास पोर्टल",
  description: "Clean rural development portal demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}