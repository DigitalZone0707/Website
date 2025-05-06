import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Tech Thrives - Where Innovation Meets Technology",
  description:
    "A collaborative GitHub organization for developing, sharing, and improving projects that make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
