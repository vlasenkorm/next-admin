import React from "react";
import Image from "next/image";
import Icon from "@/image/noavatar.svg";
import styles from "./userInfo.module.css"

export default function UserInfo() {
  return (
    <div className="flex gap-4">
      <Image priority src={Icon} height={50} width={50} alt="Avatar" />
      <div>
        <div className="text-base font-medium">name</div>
        <div className={styles.titleText}>title</div>
      </div>
    </div>
  );
}
