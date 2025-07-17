'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./ui/toggle-button";
import { MdiGithub } from "./ui/github";
import { MdiLinkedin } from "./ui/linkedin";
import { MaterialSymbolsMail } from "./ui/mail";
import {QlementineIconsResume16} from "./ui/resume";


function Navbar({ className }: { className?: string }){
    const[active,setActive]=useState<string | null>(null);
    return(
        <div
        className={cn("fixed bottom-4 inset-x-0 max-w-2xl mx-auto z-50 ", className)} >
            <Menu setActive={setActive}>

            <Link href={"https://github.com/eeshm"} target="_blank">
            <MdiGithub/>
            </Link>


            <Link href={"https://linkedin.com/in/eesh-midha"} target="_blank">
            <MdiLinkedin/>
            </Link>

            <Link href={"mailto:eeshmidha08@gmail.com"} target="_blank">
            <MaterialSymbolsMail/>
            </Link>
            <Link href={"./EeshResume.pdf"} target="_blank">
            <QlementineIconsResume16/>
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