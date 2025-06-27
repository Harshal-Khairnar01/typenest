"use client";

import Editor from "@/components/Editor";
import React from "react";

const Draft = () => {
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
    // api call to backend
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
    console.log(res)
    if (!res.ok) {
      throw new Error("Post Saving failed");
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
