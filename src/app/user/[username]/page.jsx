import getSingleUser from "@/app/actions/getSingleUser";
import dateFormat from "@/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SingleUser({ params }) {
  const { username } = params;
  const user = await getSingleUser(username);

  if (!user) {
    notFound();
  }
  return (
    <>
      <UserProfile user={user} />
      <UserPosts posts={user.Post} />
    </>
  );
}

const UserProfile = ({ user }) => {
  return (
    <div className=" text-center flex flex-col items-center">
      <Image className="  rounded-full border-2 border-[greenyellow]" src={user.image} width={80} height={80} alt={user.username} />
      <h1 className=" text-xl font-bold">{user.name}</h1>
      <p className=" text-gray-300">@{user.username}</p>
      <p className=" text-gray-400 text-sm">Joined On: {dateFormat(user.createdAt)}</p>
    </div>
  );
};

const UserPosts = ({ posts }) => {
  return (
    <div className=" flex flex-col gap-4 p-3  w-10/12  mx-auto pt-10">
      <h3 className=" text-xl font-bold">User posts</h3>
      {posts.length === 0 ? (
        <h3>No Posts Found!</h3>
      ) : (
        posts.map((post, index) => {
          return (
            <Link
            key={post.slug+index}
              className="flex items-center gap-5 bg-zinc-800/40 hover:bg-zinc-800/20 transition-all duration-200 hover:scale-[1.02] rounded px-3 py-3  w-full"
              href={`/blog/${post.slug}`}
            >
              <Image
              className=" w-36 h-20"
                src={post.thumbnail}
                width={1000}
                height={600}
                alt={post.title}
              />
              <div>
                <h3 className=" text-gray-200 font-bold text-lg">{post.title}</h3>
                <p className=" text-gray-400">{post.excerpt.substring(0, 20)}...</p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};
