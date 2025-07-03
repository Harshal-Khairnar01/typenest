import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className=" w-full">
      <section className=" w-full h-[50vh] sm:h-[70vh] flex justify-center ">
        <div className="  flex flex-col justify-center items-center gap-5 text-center ">
          <div>
            <h1 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Manage your content with Ease
            </h1>
            <p className="  text-gray-400 max-w-[700px] mx-auto">
              Streamline your content workflow, publixh with confidence.
            </p>
          </div>
          <div className=" flex gap-3">
            <Link href="/sign-in"  variant={"default"} className=" bg-gray-200 hover:bg-gray-300 transition-all   duration-200 delay-100 text-black  px-4 py-1  rounded-sm">
              Try it Out!
            </Link>
            <Button variant={"outline"}>Learn more</Button>
          </div>
        </div>
      </section>

      <section className=" min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full flex justify-center items-center px-4">
        <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
          <span className=" flex flex-col items-center gap-2">
            <Pencil size={50} />
            <h3 className=" text-2xl font-bold text-gray-100">
              Intuitive Editor
            </h3>
            <p className=" w-[70%] text-gray-400  text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className=" flex flex-col items-center gap-2">
            <Layers size={50} />
            <h3 className=" text-2xl font-bold text-gray-100">
              Flexible Tools
            </h3>
            <p className=" w-[70%] text-gray-400  text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className=" flex flex-col items-center gap-2">
            <Zap size={50} />
            <h3 className=" text-2xl font-bold text-gray-100">Blazing Fast</h3>
            <p className=" w-[70%] text-gray-400  text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
        </div>
      </section>

      <section className="  h-[60vh] sm:h-[50vh] w-full flex flex-col justify-center  items-start">
       <div className=" max-w-[50%] mx-auto space-y-3">
         <h4 className=" font-bold text-2xl">Ready to Transform your Content Journey</h4>
        <p className=" text-sm text-gray-400">
          Join thousands of content creators like you who choose Typenest
        </p>
        <div className=" flex gap-2">
          <input className=" bg-zinc-800 focus:outline-none rounded-md px-2 py-[7px] text-sm text-gray-500" type="text" placeholder="Enter your email" />
        <Button variant={"outline"}>Submit</Button>
        </div>
       </div>
      </section>
    </main>
  );
}
