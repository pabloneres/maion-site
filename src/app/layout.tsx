import type { Metadata } from "next";
import Head from 'next/head';
import { Poppins, Montserrat, Cardo } from "next/font/google";
import "../scss/_global.scss"
import 'animate.css';


const poppins = Poppins({
  weight: ['400', "600", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const montsserat = Montserrat({
  weight: ['400', "600", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const cardo = Cardo({
  weight: ["700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cardo',
})

export const metadata: Metadata = {
  title: "Maion Tax",
  description: "Recuperação tributária eficiente, com 12 anos de experiência, a MAION TAX já recuperou mais de 500 milhões em tributos para empresas, oferecendo serviços rápidos e seguros. Confie na nossa expertise para maximizar a recuperação tributária do seu negócio.",
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://maiontax.com.br/',
    siteName: 'Maion Tax',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montsserat.variable} ${poppins.variable} ${cardo.variable}`}>
        {children}</body>
    </html>
  );
}
