import Image from "next/image";
import Link from "next/link";

// const blogConfig = [
//   {
//     title: "react vs next.js",
//     excerpt: "Next.js is the ultimate development framework!",
//     image: "/thumbnails/1.png",
//     url: "/demo-slug",
//   },
//   {
//     title: "Dreams to a Remote Developer",
//     excerpt: "Get a Job as a remote developer, forntend , backend, full stack!",
//     image: "/thumbnails/2.png",
//     url: "/demo-slug",
//   },
//   {
//     title: "Became backend dev in no time",
//     excerpt: "Next.js is the ultimate development framework!",
//     image: "/thumbnails/1.png",
//     url: "/demo-slug",
//   },
// ];

const fetchAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get`);
  const data = await res.json();
  console.log(data)
  return data;
};

export default async function Blogs() {
  const blogData=await fetchAllBlogs();
  return (
    <section className=" grid gap-4 grid-cols-2 md:grid-cols-3 p-8">
      {blogData.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            image={blog.thumbnail}
            url={blog.slug}
          />
        );
      })}
    </section>
  );
}

const BlogCard = ({ title, excerpt, image, url }) => {
  return (
    <div className=" bg-gray-600/20 rounded-lg border flex flex-col p-2 gap-1 hover:scale-[1.03] transition-all delay-100 duration-300">
      <Image
        className=" w-full rounded-md "
        src={image}
        width={300}
        height={170}
        alt={title}
      />
      <h2 className=" text-xl font-bold text-gray-200">{title}</h2>
      <p className=" text-sm text-gray-400">{excerpt}</p>
      <Link
        className="  bg-zinc-600/70 py-2 px-4 rounded w-fit text-xs"
        href={`/blog/${url}`}
      >
        Read More
      </Link>
    </div>
  );
};
