import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keinner Porfolio",
  description: "Ingenierio en sistema y expecialista en sistemas de almacenamiento con conocimientos de pasarelas de pago",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ${inter.className}`}>{children}</body>
    </html>
  );
}
