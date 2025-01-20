import React from "react";
import styles from "./search.module.css";
import { MdOutlineSearch } from "react-icons/md";


export default function Search({placeholder}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <MdOutlineSearch />
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}
