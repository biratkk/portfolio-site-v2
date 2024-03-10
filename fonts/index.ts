import { Inter, Open_Sans } from "@next/font/google";

export const opensans = Open_Sans({ weight: "400", subsets: ["latin"] });

export const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    preload: true,
    subsets: ['latin'],
  });