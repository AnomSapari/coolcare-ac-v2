import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service AC Cepat & Terpercaya",
  description: "Teknisi AC datang ke lokasi Anda, booking online mudah",
  keywords: "service ac, teknisi ac, perbaikan ac, ac tidak dingin, jasa service ac, service ac panggilan",
  authors: [{ name: "Anom Sapari", url: "https://anomsapari.com" }],
  openGraph: {
    title: "Service AC Cepat & Terpercaya",
    description: "Teknisi AC datang ke lokasi Anda, booking online mudah",
    url: "https://coolcare-ac.vercel.app",
    siteName: "CoolCare AC",
    images: ["/ac.jpg"],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-slate-300">
        {children}
      </body>
    </html>
  );
}