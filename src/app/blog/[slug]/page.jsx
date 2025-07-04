import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";
import "@/styles/blog.css";
import { notFound } from "next/navigation";
import Link from "next/link";

const fetchSingleBlog = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get/${slug}`,
    {
      next: { tags: [slug] },
    }
  );
  if (res.status == 404) {
    notFound();
  }
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const res = await fetchSingleBlog(params.slug);
  return {
    title: res.title,
    description: res.excerpt,
    openGraph: {
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${res.title}`],
    },
  };
}

export default async function SigleBlog({ params }) {
  const { slug } = await Promise.resolve(params);
  const post = await fetchSingleBlog(slug);

  return (
    <section>
      <div className=" flex flex-col gap-4 items-center">
        {post.thumbnail && (
          <Image
            className=" rounded border-2 w-[90%] md:w-[700px]"
            src={post.thumbnail}
            width={500}
            height={150}
            alt={post.title}
          />
        )}
        <h1 className=" text-2xl md:text-4xl font-bold">{post.title}</h1>
        <div className=" meta-of-a-blog space-y-2">
          <div className="  flex flex-col sm:flex-row gap-5">
            <div className=" flex gap-2  items-center">
              <Calendar className=" text-gray-400 size-4" />
              <p className=" text-gray-400 text-xs">
                Created on: {dateFormat(post.createdAt)}
              </p>
            </div>
            <Link
              className=" flex gap-2 items-center justify-center"
              href={`/user/${post.author.username}`}
            >
              <Image
                className=" rounded-full"
                src={post.author.image}
                width={20}
                height={20}
                alt={post.author.name}
              />
              <p className=" text-xs text-gray-400">{post.author.name}</p>
            </Link>
          </div>
          <div className=" text-xs flex items-center gap-2">
            <p>Categories:</p>
            <p className="  badge bg-gray-600/40 border  border-gray-700 w-fit px-2 py-1 rounded">
              {post.catSlug}
            </p>
          </div>
          {post?.keywords && (
            <div className=" text-xs flex items-center gap-2">
              <p>Tags:</p>
              {post?.keywords.split(",").map((tag, index) => (
                <p
                  key={tag + index}
                  className="  badge bg-gray-600/40 border  border-gray-700 w-fit px-2 py-1 rounded"
                >
                  {tag}
                </p>
              ))}
            </div>
          )}
        </div>
        <div
          className=" blogContent text-sm w-[90%] md:w-2/3 text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.Content || "" }}
        ></div>
      </div>
    </section>
  );
}
