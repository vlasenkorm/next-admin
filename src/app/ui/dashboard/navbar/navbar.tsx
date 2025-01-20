"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
} from "react-icons/md";
import Search from "../search/search";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={styles.wrapper}>
      <div>{pathname}</div>
      <div className="flex justify-between py-1">
      <Search placeholder='Search...'/>
      <div className="flex">
        <MdOutlineChat />
        <MdNotifications />
        <MdPublic />
      </div>
      </div>
    </div>
  );
}
