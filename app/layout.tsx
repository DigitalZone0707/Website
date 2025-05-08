import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sour_Gummy } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Thrives - Where Innovation Meets Technology",
  description:
    "A collaborative GitHub organization for developing, sharing, and improving projects that make a difference.",
};

const font = Sour_Gummy({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
