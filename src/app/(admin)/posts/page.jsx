import AdminAllPosts from "@/components/admin/adminAllPosts";
import UserAllPosts from "@/components/admin/UserAllPosts";
import { authOptions } from "@/lib/auth"
import isAdmin from "@/utils/isAdmin";
import { getServerSession } from "next-auth"

export default async function AllPosts({searchParams}){
    const page=searchParams.page||1;
    const category=searchParams.cat||null;
    const session= await getServerSession(authOptions);
    const adminCheck=await isAdmin(session);
    if(!adminCheck){
        return <>
        <UserAllPosts page={page} category={category} user={session.user} />
        </>
    }
    return(
        <>
        <div>
           <AdminAllPosts page={page} category={category}/>
        </div>
        </>
    )
}