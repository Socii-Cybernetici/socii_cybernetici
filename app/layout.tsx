import type { Metadata } from "next";
import { Share_Tech_Mono, UnifrakturMaguntia } from "next/font/google";
import "./globals.scss";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Socii Cybernetici",
  description: "Ordo Sanctus Codicis - The Holy Order of Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shareTechMono.variable} ${unifraktur.variable}`}>
        {children}
      </body>
    </html>
  );
}
