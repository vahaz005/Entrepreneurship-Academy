'use client';
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}

    >
        <Menu  setActive={setActive} >
            <Link href={"#"}>
                <MenuItem setActive={setActive} active={active} item="Home">
         
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm bg-black text-white">
            <HoveredLink href="/Courses">All Courses</HoveredLink>
            <HoveredLink href="/ITE">Introduction to Entrepreneurship</HoveredLink>
            <HoveredLink href="/BPS">Business Planning and Strategy</HoveredLink>
            <HoveredLink href="/MnB">Marketing and Branding</HoveredLink>
            <HoveredLink href="/FME">Financial Management for Entrepreneurs</HoveredLink>
            <HoveredLink href="/SNS">Sales and Negotiation Skills</HoveredLink>
          </div>


            </MenuItem>
            <Link href={"/Contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
         
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar