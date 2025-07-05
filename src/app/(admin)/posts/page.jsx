import AdminAllPosts from "@/components/admin/adminAllPosts";
import UserAllPosts from "@/components/admin/UserAllPosts";
import { authOptions } from "@/lib/auth";
import isAdmin from "@/utils/isAdmin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AllPosts({ searchParams }) {
  const page = searchParams.page || 1;
  const category = searchParams.cat || null;
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/sign-in?message=unauthorized");
  }
  const adminCheck = await isAdmin(session);
  if (!adminCheck) {
    if (!session.user) {
      redirect("/sign-in?message=invalid_session_user");
    }
    return (
      <>
        <div className=" min-h-[80vh]">
          <UserAllPosts page={page} category={category} user={session.user} />
        </div>
      </>
    );
  }
  return (
    <>
      <div className=" min-h-[80vh]">
        <AdminAllPosts page={page} category={category} />
      </div>
    </>
  );
}
