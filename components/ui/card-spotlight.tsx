"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { cn } from "@/lib/utils";
// 262626
import { useTheme } from "next-themes";

export const CardSpotlight = ({
  children,
  radius = 150,
  color,
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const {theme} = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }


  return (
    <div
      className={cn(
        "p-4 rounded-md relative shadow-xl bg-white dark:bg-black ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
