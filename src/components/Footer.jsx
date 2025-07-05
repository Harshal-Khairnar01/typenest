"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-zinc-950 text-gray-300 py-15 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h2 className="text-xl font-semibold">Typenest</h2>
          <p className="text-sm text-gray-400">A cozy place for writing.</p>
        </div>

        <div className="flex gap-6 text-sm items-center">
          <Link href="/blogs" className="hover:text-white transition">
            Blogs
          </Link>
          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/search" className="hover:text-white transition">
            Search
          </Link>
          <Link href="/sign-in" className="hover:text-white transition">
            Sign In
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Separator className="my-6 bg-gray-800" />

      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Typenest. Built with ❤️ by{" "}
        <Link
          className=" hover:text-zinc-400 transition-all duration-200"
          target="_blank"
          href="https://harshal-khairnar.vercel.app"
        >
          Harshal Khairnar
        </Link>
      </div>
    </footer>
  );
}
