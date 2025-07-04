import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER_IMAGE_URL = "/notImage.png";

const fetchAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get`);
    if (!res.ok) {
      console.error(`Error fetching blogs: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};

export default async function Blogs() {
  const blogData = await fetchAllBlogs();
  return (
    <section className=" grid gap-4 grid-cols-1 md:grid-cols-3 p-8">
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
  const imageSrc =
    image && typeof image === "string" && image.trim() !== ""
      ? image
      : PLACEHOLDER_IMAGE_URL;
  const imageAlt = title || "Blog Post Image";

  return (
    <div className=" bg-gray-600/20 rounded-lg border flex flex-col p-2 gap-1 hover:scale-[1.03] transition-all delay-100 duration-300">
      <Image
        className=" w-full rounded-md "
        src={imageSrc}
        width={300}
        height={170}
        alt={imageAlt}
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
