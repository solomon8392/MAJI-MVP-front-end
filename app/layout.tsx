import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { App } from "./sub-layout";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maji",
  description: "A decentralized subscriptions platform for all your needs",
  icons: [
    {
      url: "/Favicons/browser.png",
      href: "/Favicons/browser.png",
      media: "(prefers-color-scheme:light)",
    },
    {
      url: "/Favicons/browser.png",
      href: "/Favicons/browser.png",
      media: "(prefers-color-scheme:dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
