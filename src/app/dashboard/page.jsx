import { getAuthSession } from "@/lib/auth"
import { notFound } from "next/navigation";



export default async function Dashboard(){
    const session= await getAuthSession();
    if(!session){
        return(
       <section className="  flex w-full">
           Not Authenticated
        </section>
        )
    }
    return(
        <section className=" h-screen  flex w-full justify-center items-center">
            Welcome back,{session.user.name}
        </section>
    )
}