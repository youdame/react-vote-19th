import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "CEOS Vote",
  description: "CEOS FE/BE 합동스터디",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen justify-center">
        <div className="flex-column w-full">
          <Header />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
