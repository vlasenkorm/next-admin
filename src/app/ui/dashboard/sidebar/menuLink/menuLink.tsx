"use client";
import Link from "next/link";
import React from "react";
import { MenuListItem } from "../sidebar";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }: { item: MenuListItem }) {
  const pathname = usePathname();
  return (
    <Link
      className={`${styles.wrapper} ${pathname === item.path && styles.active}`}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
