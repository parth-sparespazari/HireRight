import { DM_Serif_Text, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"], // adjust as needed
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "600"], // adjust weights as needed
});

export const metadata = {
  title: "HireRight",
  description: "Your one-stop solution for hiring the right talent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${hanken.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
