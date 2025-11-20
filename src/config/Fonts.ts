import { Geist, Geist_Mono, Montserrat_Alternates, Rubik } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const titleFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
})

export const DefaultFont = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})