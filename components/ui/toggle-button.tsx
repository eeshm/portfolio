"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme,setTheme } = useTheme()

  return (
        <Button  size="icon" onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")} className="group rounded-full bg-white border dark:bg-black">
          <Sun className="h-[1rem] w-[1rem] scale-100 rotate-0 transition-all group-hover:rotate-90 dark:scale-0 dark:-rotate-90 dark:group-hover:rotate-0 stroke-black dark:stroke-white" />
          <Moon className="absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all group-hover:-rotate-90 dark:scale-100 dark:rotate-0 dark:group-hover:rotate-10 stroke-black dark:stroke-white" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
