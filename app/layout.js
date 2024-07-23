import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Keinner Porfolio",
  description: "Ingenierio en sistema y expecialista en sistemas de almacenamiento con conocimientos de pasarelas de pago",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter} grid grid-row-2 row-min-content bg-gray-950 h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>{children}</body>
    </html>
  );
}
