import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.A.C.E Organisation",
  description:
    "Action. Awareness. Community. Empowerment. A youth-driven NGO dedicated to creating positive social impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}