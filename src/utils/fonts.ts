import { Oooh_Baby } from "@next/font/google";
import { Noto_Sans_JP } from "@next/font/google";

export const ooohBaby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const notoSansJp = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const notoSansJpMd = Noto_Sans_JP({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const notoSansJpBold = Noto_Sans_JP({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
