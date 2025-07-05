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
              <span className=" text-yellow-400">Typenest</span>
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
              className="bg-slate-800 hover:bg-slate-900 transition-all duration-300 text-white font-semibold p-2 lg:px-8 lg:py-3 rounded-lg shadow-lg transform hover:scale-105"
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

      <section className="min-h-screen sm:min-h-[60vh] w-full flex justify-center items-center px-4 py-12">
        <div className="grid gap-10 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
         
          <div className="flex flex-col items-center gap-4 bg-gray-800/40 rounded-2xl p-6 transition hover:scale-105 hover:bg-gray-800/60 duration-300 ease-in-out shadow-md hover:shadow-lg">
            <Pencil size={50} className="text-sky-300" />
            <h3 className="text-2xl font-bold text-white">Intuitive Editor</h3>
            <p className="text-gray-300 text-center leading-relaxed max-w-xs">
              Craft your content effortlessly with a clean, distraction-free
              editor designed for creators.
            </p>
          </div>

          
          <div className="flex flex-col items-center gap-4 bg-gray-800/40 rounded-2xl p-6 transition hover:scale-105 hover:bg-gray-800/60 duration-300 ease-in-out shadow-md hover:shadow-lg">
            <Layers size={50} className="text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Flexible Tools</h3>
            <p className="text-gray-300 text-center leading-relaxed max-w-xs">
              Access a suite of dynamic tools to design, edit, and manage
              content—just the way you want.
            </p>
          </div>

         
          <div className="flex flex-col items-center gap-4 bg-gray-800/40 rounded-2xl p-6 transition hover:scale-105 hover:bg-gray-800/60 duration-300 ease-in-out shadow-md hover:shadow-lg">
            <Zap size={50} className="text-green-400" />
            <h3 className="text-2xl font-bold text-white">Blazing Fast</h3>
            <p className="text-gray-300 text-center leading-relaxed max-w-xs">
              Experience lightning-fast performance with optimized load times
              and smooth transitions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
