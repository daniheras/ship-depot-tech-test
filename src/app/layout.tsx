import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import clsx from 'clsx/lite';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ship Depot",
  description: "Tech Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=''>
      <body
        className={clsx(inter.variable, "bg-main")}
      >
        {children}
      </body>
    </html>
  );
}
