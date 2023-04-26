"use client";
import "./globals.css";
import React, { use } from "react";
import { TranslationContextProvider } from "contexts";
const metadata = {
  title: "Tigre Hacks",
  description: "Generated by create next app",
  icon: "./tiger.png",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TranslationContextProvider>{children}</TranslationContextProvider>
      </body>
    </html>
  );
}
