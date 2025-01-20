import React, { ReactNode } from "react";
import { MdDashboard } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"
import UserInfo from "./userInfo/userInfo";

export default function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <UserInfo/>
      {MenuConfig.map((item) => (
        <>
          <div key={item.title}>{item.title}</div>
          <div>
            {item.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export interface MenuConfigItem {
  title: string;
  list: Array<MenuListItem>;
}

export interface MenuListItem {
  title: string;
  path: string;
  icon: ReactNode;
}

const MenuConfig: Array<MenuConfigItem> = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdDashboard />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Analytic",
    list: [
      {
        title: "Reports",
        path: "/reports",
        icon: <MdDashboard />,
      },
      {
        title: "Teams",
        path: "/teams",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "Help",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "Logout",
        path: "/",
        icon: <MdDashboard />,
      },
    ],
  },
];
