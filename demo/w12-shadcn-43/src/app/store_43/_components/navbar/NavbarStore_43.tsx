
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoStore_43 from "./LogoStore_43";
import { ModeToggle } from "@/components/ModeToggle"
import  StorSignInoutAuth_43  from "./StorSignInoutAuth_43";

const NavbarStore_43 = () => {
  return (
    <div className="flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700">
      <LogoStore_43 />
      <div className="flex items-center gap-4">
        <Link href="/">
        <Button variant="secondary">TKUdemo</Button>
        </Link>
        <ModeToggle />
        <StorSignInoutAuth_43 />
    </div>
    </div>
  )
}

export default NavbarStore_43
