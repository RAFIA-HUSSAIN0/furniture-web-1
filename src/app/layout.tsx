import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

// Google Fonts configuration
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Local Fonts configuration
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

// Metadata for the application
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Navbar Component */}
        <CartProvider>
          <div> {children}</div>
        </CartProvider>

        {/* Main content */}
       
        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
