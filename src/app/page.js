import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <main className=" w-full">
      <section className=" w-full h-[50vh] sm:h-[70vh] flex justify-center ">
        <div className="  flex flex-col justify-center items-center gap-5 text-center p-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              Unleash Your Content with{" "}
              <span className="text-blue-400">Typenest</span>
            </h1>
            <p className="  text-gray-400 max-w-[700px] mx-auto">
              Streamline your content workflow, publish with confidence, and
              elevate your online presence with ease.
            </p>
          </div>
          <div className="flex gap-4">
            {" "}
            {/* Increased gap for better separation */}
            {/* Primary CTA: Start Creating Now! */}
            <Link
              href="/sign-in"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold p-2 lg:px-8 lg:py-3 rounded-lg shadow-lg transform hover:scale-105"
            >
              Start Creating Now!
            </Link>
            {/* Secondary CTA: Learn more */}
            <Link
              href="/features"
              className="border border-white text-white p-2 lg:px-8 lg:py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className=" min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full flex justify-center items-center px-4">
        <div className=" grid gap-10 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
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
        <div className=" max-w-[80%] lg:max-w-[50%] mx-auto space-y-3">
          <h4 className=" font-bold text-2xl">
            Ready to Transform your Content Journey
          </h4>
          <p className=" text-sm text-gray-400">
            Join thousands of content creators like you who choose Typenest
          </p>
          <div className=" flex gap-2">
            <input
              className=" bg-zinc-800 focus:outline-none rounded-md px-2 py-[7px] text-sm text-gray-500"
              type="text"
              placeholder="Enter your email"
            />
            <Button variant={"outline"}>Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
