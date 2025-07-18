"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/v1/search?query=${encodeURIComponent(query)}`
      );
      if (!res.ok) {
        setResults([]);
        if (res.status === 404) {
          setError("No Post Found");
        } else {
          setError("Something went wrong");
        }
        return;
      }
      const foundPost = await res.json();

      if (Array.isArray(foundPost)) {
        setResults(foundPost);
        setError("");
      } else {
        setResults([]);
        setError("Unexpected response format");
      }
    } catch (error) {
      setError("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      const timer = setTimeout(() => fetchPosts(), 500);
      return () => clearTimeout(timer);
    }
  }, [query]);

  return (
    <section className=" w-full min-h-[60vh] flex flex-col p-10 gap-3">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a post"
      />
      {loading && "Searching..."}
      {
        <ul className=" flex flex-col gap-2">
          {error ? (
            <div>{error}</div>
          ) : (
            results.map((post) => {
              return (
                <li
                  className=" bg-gray-500/10  p-3  rounded hover:scale-[1.01] transition-all  duration-200"
                  key={post.id}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className=" text-gray-100 text-lg"> {post.title}</h3>
                    <p className=" text-gray-300 text-sm">
                      {post.excerpt.substring(0, 30)}...
                    </p>
                    <div className=" flex items-center gap-2 text-xs mt-3">
                      Written by:
                      <Image
                        alt={post.author.name}
                        src={post.author.image}
                        width={10}
                        height={10}
                        className=" rounded-full"
                      />
                      <p className=" text-xs text-gray-200">
                        {post.author.name}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      }
    </section>
  );
}
