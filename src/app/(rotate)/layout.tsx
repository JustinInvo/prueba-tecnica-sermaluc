import { DefaultFont } from "@/config/Fonts";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html
      lang="en"
    >
      <body className={`${DefaultFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
