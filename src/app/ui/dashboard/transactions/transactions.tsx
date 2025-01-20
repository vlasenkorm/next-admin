import React from "react";
import Icon from "@/image/noavatar.svg";
import Image from "next/image";
import styles from "./transactions.module.css";

const mockDataTable = [
  {
    id: "234",
    name: "Joni Gipsy",
    status: "pending",
    data: "12.04.24",
    amount: "3.20",
  },
  {
    id: "123",
    name: "Lara Senora",
    status: "done",
    data: "11.05.24",
    amount: "4.20",
  },
  {
    id: "333",
    name: "Clark Frost",
    status: "pending",
    data: "02.03.24",
    amount: "5.10",
  },
  {
    id: "143",
    name: "Amity Honk",
    status: "cancelled",
    data: "14.04.24",
    amount: "7.40",
  },
];

export default function Transactions() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Transactions</span>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {mockDataTable.map((item) => (
            <tr key={item.id} className={styles.tableRow}>
              <td>
                <div className="flex items-center">
                  <Image
                    priority
                    src={Icon}
                    height={30}
                    width={30}
                    alt="Avatar"
                    className="mr-1"
                  />
                  <span>{item.name}</span>
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    item.status === "pending"
                      ? styles.pending
                      : item.status === "cancelled"
                      ? styles.cancelled
                      : styles.done
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <span>{item.data}</span>
              </td>
              <td>
                <span>{item.amount}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
