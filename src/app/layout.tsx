import { ReactNode } from "react";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
