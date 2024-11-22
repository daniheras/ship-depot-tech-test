import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import clsx from 'clsx/lite';

import { getTheme } from '../lib/getTheme';

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
        className={clsx(inter.variable, "bg-main")}
      >
        {children}
      </body>
    </html>
  );
}
