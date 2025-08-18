"use client";
import Link from "next/link";
import HeaderBase from "./ui/headerbase";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";


export default function Header() {
const leftContent = (
    <nav className="flex gap-4 mt-2">
      <Link href="/dashboard" className="font-mono px-2">
       MVPE
      </Link>
      <Link href="/about" className="font-mono px-2">
       About
      </Link>
      <Link href="/contact" className="font-mono px-2">
       Contact
      </Link>
    </nav>
  )
const rightContent = (
    <div className="flex items-center gap-2">
       <UserMenu />
      <ModeToggle />

    </div>
  )
return (
    <div>
      <div className="rounded-2xl mt-2">
        <HeaderBase leftContent={leftContent} rightContent={rightContent} />
      </div>

    </div>
  );
}
