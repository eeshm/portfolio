'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./ui/toggle-button";
import { MdiGithub } from "./ui/github";
import { Linkedin } from "lucide-react";
import { MdiLinkedin } from "./ui/linkedin";
import { MaterialSymbolsMail } from "./ui/mail";


function Navbar({ className }: { className?: string }){
    const[active,setActive]=useState<string | null>(null);
    return(
        <div
        className={cn("fixed bottom-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
            <Link href={"https://github.com/eeshm"}>
            <MdiGithub/>
            </Link>

            <Link href={"https://linkedin.com/in/eesh-midha"}>
            <MdiLinkedin/>
            </Link>

            <Link href={"mailto:eeshmidha08@gmail.com"}>
            <MaterialSymbolsMail/>``
            </Link>
            <div className="text-3xl -mt-2 text-stone-700 font-light">
                |
            </div>
            <div className="">
                <ModeToggle />
            </div>
            </Menu>
        </div>
    )
}

export default Navbar;