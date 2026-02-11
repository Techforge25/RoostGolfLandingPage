import "./globals.css";
import { Sora, Playfair_Display } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata = {
  title: "Roost Golf — Smart Golf Tournaments & Real-Time Scoring",
  description:
    "Roost Golf is a modern golf app for super admins, club admins, and players. Manage clubs, run games, and track real-time scores with ease."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${playfair.variable}`}>
      <body className="font-[var(--font-sora)] antialiased">{children}</body>
    </html>
  );
}
