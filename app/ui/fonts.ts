import { Roboto, Coda } from "next/font/google";

export const robotoFont = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const codaFont = Coda({
  subsets: ["latin"],
  weight: ["400", "800"],
  style: "normal",
});
