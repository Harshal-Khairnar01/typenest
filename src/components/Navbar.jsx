import { Anvil, Pencil } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import SignOut from "./SignOut";

export default async function Navbar() {
  const session = await getAuthSession();
  // console.log(session)
  return (
    <div className=" w-full flex justify-between items-center px-8 h-12">
      <Link href="/" className=" flex gap-2">
        <Pencil />
        <span className=" font-extrabold"> Typenest</span>
      </Link>
      {session ? (
        <UserModalComponent user={session?.user} />
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}
    </div>
  );
}

const UserModalComponent = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" outline-none">
        <Image
          className=" rounded-full border-2 border-green-500"
          src={user.image}
          width={30}
          height={30}
          alt={user.name}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>
          <Link href={`/profile/${user.username}`}> Go to Profile</Link>
        </DropdownMenuItem> */}
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
