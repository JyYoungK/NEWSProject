import "./globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {}
      <head />
      <body className="bg-gray-200 transition-all duration-700 dark:bg-zinc-900">
        <Header />
        <div className="mx-auto max-w-6xl">{children}</div>
      </body>
    </html>
  );
}
