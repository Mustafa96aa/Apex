import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex — Your intelligent workspace",
  description: "Plan projects, organize knowledge, and focus on what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
