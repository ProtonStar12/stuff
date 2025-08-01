"use client";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

export default  function Navbar(){

    const {getUser} = useKindeBrowserClient();
    const user =  getUser();
return(
    <nav className="py-5 flex items-center justify-between">

        <div className="flex items-center gap-6">
            <Link href="/">
            <h1 className="text-3xl font-bold">
                Blog<span className="text-blue-500">Tom

                </span>
            </h1>
            </Link>

            <div className="hidden sm:flex items-center gap-6">
                <Link href ='/'
                 className="text-sm font-medium hover:text-blue-500 transition-colors">
                Home</Link>
            </div>

            <div className="hidden sm:flex items-center gap-6">
                <Link href ='/dashboard'
                 className="text-sm font-medium hover:text-blue-500 transition-colors">
                DashBoard</Link>
            </div>


        </div>

        {
            user ? (
                <div className="flex items-center gap-4">
                    <p>{user.given_name}</p>
                    <LogoutLink className={buttonVariants()}>
                        Logout

                    </LogoutLink>
                </div>

            ) : (
                <div className="flex items-center gap-4">
                    <LoginLink className={buttonVariants()}>Login</LoginLink>
                    <RegisterLink className={buttonVariants()}>Sign In</RegisterLink>
                </div>
            )
        }

  
    </nav>
);
}