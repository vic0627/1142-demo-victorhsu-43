'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton, useUser, } from '@clerk/nextjs'
import Link from "next/link"

import { LuAlignLeft } from "react-icons/lu"
import Userlcon_43 from "./Userlcon_43"

import {links, linksAdmin} from "@/app/store_43/_components/navbar/links"
import StoreSignOut_43 from "./StoreSignOut_43"

// let isAdminUser = true;
interface StoreSignInOut_43Props {
  isAdminUser: boolean;
}

const StoreSignInOut_43 = ({ isAdminUser }: StoreSignInOut_43Props) => {
    const { isSignedIn, user } = useUser();
    //console.log("isSignedIn:", isSignedIn);
    //console.log("isAdminUser:", isAdminUser);
    //console.log("user:", user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
            <LuAlignLeft className="h-6 w-6" />
            {isSignedIn && user?.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="User Avatar"
                className="h-6 w-6 rounded-full"
              />
            ) : (
              <Userlcon_43 />
            )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
            <Show when="signed-out">
            <DropdownMenuItem>
                <SignInButton>
                    <Link href='#' className= 'w-full text-left'>
                    Login
                    </Link>
                </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <SignUpButton>
                    <Link href='#' className= 'w-full text-left'>
                    Register
                    </Link>
              </SignUpButton>
            </DropdownMenuItem>
            </Show>
            <Show when="signed-in">
                <DropdownMenuGroup>
                    {links.map((link) => {
                        return (
                            <DropdownMenuItem key={link.href}>
                                <Link href={link.href} className="w-full capitalize">
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        );
                    })}
                    {isAdminUser && (
                        <>
                            <DropdownMenuSeparator />
                            {linksAdmin.map((link) => {
                                return (
                                    <DropdownMenuItem key={link.href}>
                                        <Link href={link.href} 
                                        className="w-full capitalize">
                                            {link.label}
                                        </Link>
                                    </DropdownMenuItem>
                                );
                            })}
                        </>
                    )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <StoreSignOut_43 />
                </DropdownMenuItem>
            </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StoreSignInOut_43

/*
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
*/