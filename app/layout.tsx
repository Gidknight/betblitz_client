import UserProvider from "@/context/user";
import AllOverlays from "@/components/AllOverlays";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BetBlitz",
  description: "Best betting platform with best odds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="bg-neutral">{children}</body>
      </UserProvider>
    </html>
  );
}
