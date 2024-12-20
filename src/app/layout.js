import { Inter } from "next/font/google";
import "./globals.css";
import Animatedpage from "@/components/Animatedpage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shinzo's Portfolio",
  description: "This is my freelancer portfolio to showcase my work.",
};

export default function RootLayout({ children }) {
  const showUnderConstruction = false; // Toggle this to show or hide the "Under Construction" message

  return (
    <html lang="en">
      <body className={inter.className}>
        {showUnderConstruction ? (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              🚧 Under Construction 🚧
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We are working hard to bring you something amazing! Check back
              soon.
            </p>
          </div>
        ) : (
          
          <Animatedpage>{children}</Animatedpage>
        )}
      </body>
    </html>
  );
}
