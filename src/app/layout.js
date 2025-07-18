import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Poppins } from "next/font/google";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/providers/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Typenest : A cozy place for writing.",
  description:
    "Typenest is a modern and customizable content management system built with Next.js. Designed for writers and developers, it offers powerful blogging tools, rich text editing, AI-powered content creation, and seamless authentication — all wrapped in a clean, responsive UI.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" dark">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className=" w-full">
              <SidebarTrigger />
              <Navbar />
              <Suspense
                fallback={<div className=" px-4">authenticating...</div>}
              >
                {children}
              </Suspense>
              <Footer />
            </main>
          </SidebarProvider>
        </AuthProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
