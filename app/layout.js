import Header from "csc-start/components/Header";
import "./globals.css";
import Footer from "csc-start/components/Footer";

import {Darker_Grotesque} from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const dG = Darker_Grotesque({
  weight: ["800"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dG.className}>
      
      <body>
      <Header />
      {children}
      <Footer />
      </body>

    </html>
  );
}
