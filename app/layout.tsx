import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarBackground from "./components/general/StarBackground";
import Dot from "./components/general/Dot";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nouman Ejaz",
  description: "Frontend Engineer | UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-axiforma bg-dark_greyish text-white`}
      >
        <StarBackground>
          <Dot>{children}</Dot>
        </StarBackground>
      </body>
    </html>
  );
}
