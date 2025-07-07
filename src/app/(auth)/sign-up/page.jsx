"use client";

import AuthForm from "@/components/AuthForm";

export default function SignUp() {
  return (
    <section className=" w-full flex h-[70vh] justify-center items-center">
      <AuthForm origin="signup" />
    </section>
  );
}
