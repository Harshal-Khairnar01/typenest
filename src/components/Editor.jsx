"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

import "react-quill-new/dist/quill.snow.css";
import { slugify } from "slugmaster";
import ImageUpload from "./ImageUpload";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  title: z
    .string()
    .min(10, { message: "Title must contain 10 or more characters" })
    .min(1, { message: "Title must not be empty!" }),
  excerpt: z
    .string()
    .min(10, { message: "Please add some details in the excerpt" }),
  category: z.string().min(1, { message: "Please add a category" }),
  metaDescription: z.string().optional(),
  keywords: z
    .string()
    .min(1, { message: "Keywords should be there for SEO benefits" }),
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const Editor = ({ onSave, initialData }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [content, setContent] = useState("");
  const [ogImage, setOgImage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title);
      setContent(initialData.Content);
      setOgImage(initialData.thumbnail);
      setValue("keywords", initialData.keywords || "");
      setValue("category", initialData.catSlug || "");
      setValue("excerpt", initialData.excerpt || "");
      setValue("excerpt", initialData.excerpt || "");
      setValue("metaDescription", initialData.desc || "");
      setValue("status", initialData.status);
    }
  }, [initialData]);

  const handleForm = (data) => {
    try {
      const generatedSlug = initialData
        ? initialData.slug
        : slugify(data.title);
      onSave({ ...data, slug: generatedSlug, ogImage, content });
      toast(
        <div>
          <p className="font-semibold">✅ Success</p>
          <p>
            {initialData
              ? "Your blog was updated."
              : "Your blog page was published."}
          </p>
        </div>
      );
      if (data.status === "PUBLISHED") {
        router.push(`/blog/${generatedSlug}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <section>
      <form
        className=" space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await schema.parseAsync(data);
            await handleForm(data);
          } catch (error) {
            console.error(error.message);

            if (error instanceof z.ZodError) {
              error.errors.forEach((error) => {
                toast(
                  <div>
                    <p className="font-bold text-red-500">Error</p>
                    <p>{error.message}</p>
                  </div>
                );
              });
            }
          }
        })}
      >
        <input
          {...register("title")}
          placeholder="Enter the post title"
          className=" font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { header: "3" }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],

              ["link", "image", "code-block"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",

            "link",
            "image",
            "code-block",
          ]}
        />
        <input
          {...register("excerpt")}
          placeholder="Enter an excerpt"
          className=" font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
        <input
          {...register("category")}
          placeholder="Enter a category"
          className=" font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
        <h2 className=" text-xl font-bold">SEO Data</h2>
        <ImageUpload returnImage={setOgImage} preloadedImage={ogImage} />
        <input
          {...register("keywords")}
          placeholder="Enter Keywords"
          className=" font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
        <input
          {...register("metaDescription")}
          placeholder="Enter Meta Description"
          className=" font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
          type="text"
        />
        <div className=" flex gap-2">
          <select
            {...register("status")}
            className=" font-bold text-lg bg-zinc-600 px-3 py-1 rounded-sm outline-none"
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Publish</option>
          </select>
          <button
            type="submit"
            className=" bg-zinc-800 px-3 py-2 rounded cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default Editor;
