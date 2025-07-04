"use client";

import AuthForm from "@/components/AuthForm";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function SignIn() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      const message = searchParams.get("message");
      if (message) {
        switch (message) {
          case "unauthorized":
            toast.error(
              <div>
                <p className="font-bold text-red-500">
                  Authentication Required
                </p>
                <p>You must be logged in to access that page.</p>
              </div>
            );
            break;
          case "invalid_session_user":
            toast.error(
              <div>
                <p className="font-bold text-red-500">Session Invalid</p>
                <p>Your session is invalid. Please log in again.</p>
              </div>
            );
            break;
          case "sign_out_success":
            toast.success(
              <div>
                <p className="font-bold text-green-500">Success</p>
                <p>You have been successfully signed out.</p>
              </div>
            );
            break;
          default:
            const defaultMessage =
              message.replace(/_/g, " ").charAt(0).toUpperCase() +
              message.replace(/_/g, " ").slice(1);
            toast.info(
              <div>
                <p className="font-bold">Info</p>
                <p>{defaultMessage}</p>
              </div>
            );
            break;
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <section className=" w-full flex h-screen justify-center items-center">
      <AuthForm />
    </section>
  );
}
