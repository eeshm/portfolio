'use client'
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./ui/toggle-button";
import { MdiGithub } from "./ui/github";
import { MdiLinkedin } from "./ui/linkedin";
import { MaterialSymbolsMail } from "./ui/mail";
import { QlementineIconsResume16 } from "./ui/resume";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed bottom-0 left-1/2 -translate-x-1/2 z-50  px-4 py-2 pointer-events-none")} >
            <Menu setActive={setActive}>
                <div className="pointer-events-auto flex gap-4 items-center">
                    <Link href={"https://github.com/eeshm"} className="opacity-100 hover:opacity-70 duration-300 transition">
                        <MdiGithub />
                    </Link>
                    <Link href={"https://linkedin.com/in/eesh-midha"}  className="opacity-100 hover:opacity-70 duration-300 transition">
                        <MdiLinkedin />
                    </Link>

                    <Link href={"mailto:@gmail.com"}  className="opacity-100 hover:opacity-70 duration-300 transition">
                        <MaterialSymbolsMail />
                    </Link>
                    <Link href={"https://drive.google.com/file/d/1LYji7Ueg8uuDERr6dNRF7EulkmGYwUfi/view"}  className="opacity-100 hover:opacity-70 duration-300 transition">
                        <QlementineIconsResume16 />
                    </Link>
                    <div className="text-3xl -mt-2 text-stone-700 font-light ">
                        |
                    </div>
                    <div className="">
                        <ModeToggle />
                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default Navbar;
