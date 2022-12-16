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

      <body className="bg-gray-200 font-oldEnglish transition-all duration-700 dark:bg-zinc-900">
        <Providers>
          <Header />
          <div className="mx-auto max-w-6xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
