import React from "react";
import Link from "next/link";
import Image from "next/image";
import { shadow } from "@/app/utils";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/auth/supabase/server";
const Header = async() => {
    const user = await getUser();
  return (
    <header className="relative flex w-full items-end justify-between bg-popover px-3 sm:px-8 py-3 sm:py-4"
    style={{
        boxShadow : shadow
    }}>
      <Link className="flex items-end gap-2 " href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
            GOAT <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-2 mb-2">
        {user ?
        (<LogoutButton/>) 
        : 
        (
            // asChild is used to substitute 
            // default html button component with 
            // shadcn Button component 
            <>
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
            </>
        )}

        <DarkModeToggle/>
        
      </div>
    </header>
  );
};

export default Header;
