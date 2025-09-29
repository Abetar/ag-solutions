// app/layout.tsx
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merri = Merriweather({ subsets: ["latin"], weight: ["400","700"], variable: "--font-merri" });

export const metadata = {
  title: "AG Solutions",
  description: "Automatización y desarrollo web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${merri.variable}`}>
      <body className="font-sans">{children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
