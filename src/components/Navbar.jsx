import { Anvil } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const auth = true;
  return (
    <div className=" w-full flex justify-between px-8 h-12">
      <Link href="/" className=" flex gap-2">
        <Anvil />
        <span className=" font-extrabold"> NameWillBe</span>
      </Link>
      {auth ? (
        <Link href="/sign-in">User</Link>
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}
    </div>
  );
}
