

import { Inter } from "next/font/google";
import "./globals.css";
import Animatedpage from "@/components/Animatedpage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Portfolio",
  description: "DAMN BOI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        
         <Animatedpage>{children}</Animatedpage>
          </body>
    </html>
  );
}
