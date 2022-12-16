import "./globals.css";
import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://fonts.cdnfonts.com/css/old-english-five"
          rel="stylesheet"
        /> */}
      </head>

      <body className="bg-[#C8BFB8] font-oldEnglish dark:bg-[#8a6f5a]">
        <Providers>
          <Header />
          <div className="mx-auto max-w-6xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
