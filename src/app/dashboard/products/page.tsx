"use client";
import React, { useState } from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Icon from "@/image/no-product.png";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Modal from "@/app/ui/modal/modal";

const mockDataTable = [
  {
    id: "234",
    title: "Iphone 14",
    description: "ebhdhvg7obqhaaeyqa",
    price: "1.25$",
    created: "12.04.24",
    stock: "22",
    status: "active",
  },
  {
    id: "123",
    title: "Cap",
    description: "tayyibgood",
    price: "1.25$",
    created: "11.05.24",
    stock: "44",
    status: "active",
  },
  {
    id: "333",
    title: "Door",
    description: "leydonhall",
    price: "1.25$",
    created: "02.03.24",
    stock: "32",
    status: "active",
  },
  {
    id: "143",
    title: "Car toy",
    description: "1dbc3p9yjzsgyeoc",
    price: "1.25$",
    created: "14.04.24",
    stock: "65",
    status: "active",
  },
];

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className="flex justify-between">
        <Search placeholder="Search for a products..." />
        <button onClick={() => setOpen(true)} className={styles.addButton}>
          add Product
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div>Modal text</div>
        </Modal>
      </div>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created at</td>
              <td>Stock</td>
              <td>Action</td>
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
                      height={40}
                      width={40}
                      alt="Avatar"
                      className="mr-1"
                    />
                    <span>{item.title}</span>
                  </div>
                </td>
                <td>
                  <span>{item.description}</span>
                </td>
                <td>
                  <span>{item.price}</span>
                </td>
                <td>
                  <span>{item.created}</span>
                </td>
                <td>
                  <span>{item.stock}</span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => console.log(item.id)}
                    >
                      edit
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => console.log(item.id)}
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}
