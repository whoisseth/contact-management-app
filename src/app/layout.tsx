/** @format */
"use client";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
  header: string;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={
            process.env.NODE_ENV === "development" ? "debug-screens" : ""
          }
        >
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
