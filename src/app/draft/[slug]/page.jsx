"use client";

import Editor from "@/components/Editor";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const EditPreviousDraft = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/update/${slug}`
      );
      if (!res.ok) {
        if (res.status === 403) {
          toast(
            <div>
              <p className="font-bold text-red-500">Uh oh!</p>
              <p>You are not allowed to edit the post!</p>
            </div>
          );
        } else {
          toast(
            <div>
              <p className="font-bold text-red-500">Uh oh!</p>
              <p>Unable to load post!</p>
            </div>
          );
        }
        return;
      }
      const postData = await res.json();
      // console.log(postData, "directa cccc");
      setPost(postData);
    };
    fetchPost();
  }, [slug]);

  const savePost = async ({
    title,
    ogImage,
    content,
    excerpt,
    metaDescription,
    keywords,
    status,
  }) => {
    // api call to backend
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/update/${slug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          ogImage,
          content,
          excerpt,
          metaDescription,
          keywords,
          status,
        }),
      }
    );
    if (!res.ok) {
      throw new Error("Post Updation failed");
    }
  };
  if (!post) {
    return <></>;
  }
  return (
    <div className=" p-8">
      <h1 className=" font-bold text-2xl pb-3">Create a new Post</h1>
      <Editor onSave={savePost} initialData={post} />
    </div>
  );
};

export default EditPreviousDraft;
