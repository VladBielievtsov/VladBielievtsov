import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";
import { Toaster } from "sonner";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fav.png" />
        <meta name="theme-color" content="#EEEEF5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#191923" media="(prefers-color-scheme: dark)" />
        {/* <script defer src="https://umami.bvlad.com/script.js" data-website-id="1ace9434-5e42-418b-9d25-9303dc5db565"></script> */}
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Toaster position="top-center" expand={true} closeButton />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Vlad Bielievtsov',
    default: 'Vlad Bielievtsov',
  },
  description: "Vlad Bielievtsov",
  creator: "Vlad Bielievtsov",
  publisher: "Vlad Bielievtsov",
  authors: [{ name: "Vlad Bielievtsov", url: "https://bvlad.com" }],
  alternates: {
    canonical: "https://bvlad.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
