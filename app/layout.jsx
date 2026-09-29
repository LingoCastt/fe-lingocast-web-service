import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LangProvider } from "@/components/lang";
import { OWNER, APP } from "@/content/site";

export const metadata = {
  title: `${OWNER.name} — ${APP.name}`,
  description: OWNER.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-secondary selection:text-on-secondary">
        <LangProvider>
          <Header />
          <main className="w-full pt-16 bg-surface min-h-[calc(100vh-16rem)]">
            <div className="flex flex-col w-full">{children}</div>
          </main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
