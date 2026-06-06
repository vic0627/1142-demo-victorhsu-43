
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import LogoStore_43 from "./LogoStore_43";
import { ModeToggle } from "@/components/ModeToggle"
import  StorSignInoutAuth_43  from "./StorSignInoutAuth_43";
import NavSearch_43 from "./NavSearch_43";
import CartButton_43 from "./CartButton_43";

const NavbarStore_43 = () => {
  return (
    <div className="flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700">
      <LogoStore_43 />
      <Suspense fallback={<div className="w-48" />}>
        <NavSearch_43 />
      </Suspense>
      <div className="flex items-center gap-4">
        <Link href="/">
        <Button variant="secondary">TKUdemo</Button>
        </Link>
        <CartButton_43 />
        <ModeToggle />
        <StorSignInoutAuth_43 />
    </div>
    </div>
  )
}

export default NavbarStore_43
