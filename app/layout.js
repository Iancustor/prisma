import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DesisHub Portal",
  description: "DesisHub Students Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster position="top-center" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
