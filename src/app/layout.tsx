import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";

import { getTheme } from '../lib/getTheme';
import { cn } from './_shared/utils';

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
    /* suppressHydrationWarning only works one level deep */
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body
        className={cn(inter.variable, "bg-main flex justify-center")}
      >
        {children}
      </body>
    </html>
  );
}
