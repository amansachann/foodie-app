"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={path.startsWith(href) ? classes.active : undefined}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
