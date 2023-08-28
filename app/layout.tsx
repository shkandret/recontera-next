import "@/css/none-style.scss";
import "@/css/globals.scss";
import "swiper/css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recontera",
  description: "Recontera App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
