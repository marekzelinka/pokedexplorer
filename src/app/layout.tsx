import { geistMono, geistSans } from "@/fonts";
import "@/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pokedex app',
  description: 'This app allows you to search for your favorite Pokémon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
