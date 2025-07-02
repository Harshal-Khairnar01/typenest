import { getAllBlogs } from "@/app/actions/getBlogs";
import EditableBlogCards from "./EditableBlogCard";
import Pagination from "../Pagination";
import { config } from "@/static/config";

export default async function AdminAllPosts({ page, category }) {
  const { posts, count } = await getAllBlogs({ page, category });
  return (
    <>
      <section className=" p-8 flex flex-col gap-4 relative">
        <h2>Manage all the blogs</h2>
        {posts.map((post) => {
          return <EditableBlogCards key={post.id} post={post} />;
        })}
        <Pagination
          currentPage={page}
          totalItems={count}
          perPage={config.perPage}
          className=" fixed bottom-10 left-1/2 -translate-x-1/2"
        />
      </section>
    </>
  );
}
