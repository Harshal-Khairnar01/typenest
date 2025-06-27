"use client";

import { Anvil } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google");
    } catch (error) {
      // console.log(error.message)
      toast(
        <div>
          <p className="font-bold text-red-500">Uh oh!</p>
          <p>Failed to Sign In</p>
        </div>
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className=" w-full flex h-screen justify-center items-center">
      <div className=" w-full  sm:1/2 md:w-1/5  mx-4 p-4 rounded-lg bg-zinc-800 flex flex-col items-center gap-4">
        <Anvil className=" size-12 text-gray-300" />
        <p className=" text-center  text-sm text-gray-200">
          Welcome, by continuing with CMS sign in, you'll be a Member
        </p>
        <button
          onClick={onSignIn}
          className=" flex items-center gap-2 bg-gray-500/50 hover:bg-gray-500/40 transition-colors duration-200 px-5 py-1 rounded font-bold text-lg"
        >
          {" "}
          <FcGoogle /> {loading ? "Loading..." : "Sign In"}
        </button>
      </div>
    </section>
  );
}
