import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MenuBottom from "@/components/MenuBottom";

const poppins = Poppins({
  weight: ['400','500','600', '700'],
  style:'normal',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Wallef Amorim",
  description: "Criado por wvll3f",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' lang="pt-BR">
      <body className={` bg-whiteBG ${poppins.className}`}>

        {children}
      </body>
    </html>
  );
}
