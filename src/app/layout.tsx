import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomMenu from "@/components/BottomMenu/page";
import TopNav from "@/components/TopNav/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payme Round Up",
  description: "Round Up your Payme transactions to save money",
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
        <div className="container mx-auto w-[360px] h-[700px] bg-gradient-to-b bg-[50% 50%] from-[#02D0D3] to-[#00B4B7] rounded-2xl overflow-hidden shadow-lg">
          <div className="relative flex flex-col h-full">
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html >
  );
}
