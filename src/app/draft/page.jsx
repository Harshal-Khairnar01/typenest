"use client";

import Editor from "@/components/Editor";
import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Draft = () => {
  const router = useRouter();
  const savePost = async ({
    title,
    slug,
    ogImage,
    content,
    excerpt,
    metaDescription,
    category,
    keywords,
    status,
  }) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            slug,
            ogImage,
            content,
            excerpt,
            metaDescription,
            category,
            keywords,
            status,
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();

        if (res.status === 401) {
          throw new Error("Authentication required to save post.");
        } else if (res.status === 400) {
          throw new Error(
            `Missing fields: ${
              errorData.message || "Please fill all required fields."
            }`
          );
        } else {
          throw new Error(
            `Failed to save post: ${
              errorData.message || "An unexpected error occurred."
            }`
          );
        }
      }

      const responseData = await res.json();
      return responseData;
    } catch (error) {
      console.error("API Call Error:", error.message);
      throw error;
    }
  };
  return (
    <div className=" p-8">
      <h1 className=" font-bold text-2xl pb-3">Create a new Post</h1>
      <Editor onSave={savePost} />
    </div>
  );
};

export default Draft;
