import { Anvil, Pencil } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
export default function AuthForm({ origin }) {
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
    <>
      <div className=" w-full  sm:1/2 md:w-1/5  mx-4 p-4 rounded-lg bg-zinc-800 flex flex-col items-center gap-4">
        <Pencil className=" size-8 text-gray-300" />
        <p className=" text-center  text-sm text-gray-200">
          {origin === "signup"
            ? "Welcome, by continuing with Typenest sign in, you'll be a Member"
            : "Welcome back! Glad to have you back"}
        </p>
        <button
          onClick={onSignIn}
          className=" flex items-center gap-2 bg-gray-500/50 hover:bg-gray-500/40 transition-colors duration-200 px-5 py-1 rounded font-bold text-lg"
        >
          {" "}
          <FcGoogle />{" "}
          {loading ? "Loading..." : origin === "signup" ? "Sign Up" : "Sign In"}
        </button>
        {origin === "signup" ? (
          <p className=" text-sm text-gray-400">
            Already Having an account?{" "}
            <Link className=" underline" href="/sign-in">
              Sign In
            </Link>
          </p>
        ) : (
          <p className=" text-sm text-gray-400">
            New to Typenest?{" "}
            <Link className=" underline" href="/sign-up">
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
