import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "CS Advertising | Signboards, LED Boards & Shop Branding in Sri Lanka",
  description:
    "Leading signage agency in Sri Lanka specializing in LED sign boards, neon signs, 3D embossed letters, UV printed boards, and full turnkey shop branding. Workshop in Boralesgamuwa.",
  keywords: [
    "CS Advertising",
    "Signboards Sri Lanka",
    "LED boards Colombo",
    "Neon signs Sri Lanka",
    "3D letters Boralesgamuwa",
    "Shop branding Sri Lanka",
    "UV printed boards",
    "Exhibition stalls",
  ],
  authors: [{ name: "CS Advertising" }],
  openGraph: {
    title: "CS Advertising | Premium Signboards & Shop Branding Sri Lanka",
    description: "Your visibility is your success – Let us make your brand shine. LED boards, neon signs, 3D letters, and interior works.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
