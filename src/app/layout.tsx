import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Providers from "@/app/ReactQueryProvider";
import { Toaster } from "react-hot-toast";

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
        <Providers>
          <div className="flex-column w-full">
            <Header />
            <div>{children}</div>
          </div>
        </Providers>
        <Toaster containerStyle={{ fontSize: "1rem", fontWeight: "600" }} />
      </body>
    </html>
  );
}
