import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn, UserButton, UserProfile } from "@clerk/nextjs";
import Sidebar from "@/components/shared/Sidebar";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata: Metadata = {
  title: "Img-Dash",
  description: "Generate AI-Img for Your Business!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#00ff00'}
    }}>
      <html lang="en">
        <body className={inter.className}>
          <div className="px-6 py-2 bg-blue-200 justify-space">
            <h1 className="font-bold py-2">
              Img-Dash
            </h1>
            <UserButton />
          </div>
          <br></br>

          {children}</body>
      </html>
    </ClerkProvider>

  );
}
