// import "";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }