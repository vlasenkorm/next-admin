"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Icon from "@/image/noavatar.svg";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Modal from "@/app/ui/modal/modal";
import { addRandomUsers, allUsers, deleteUser } from "@/lib/database/Users";
import { IUser } from "@/lib/database/models/user";

export default function UsersPage() {
  const [open, setOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(0);
  const [userList, setUserList] = useState<Array<IUser>>([]);

  useEffect(() => {
    async function fetchPosts() {
      const users = await allUsers();
      setUserList(users);
      console.log("data", users);
    }
    fetchPosts();
  }, [dataUpdate]);

  return (
    <div className={styles.wrapper}>
      <div className="flex justify-between">
        <Search placeholder="Search for a user..." />
        <div>
          <button onClick={() => setOpen(true)} className={styles.addButton}>
            add User
          </button>
          <button
            onClick={() => {
              addRandomUsers();
              setDataUpdate((a) => a + 1);
            }}
            className={styles.addButton}
          >
            addRandomUser
          </button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <button
            className="border-2"
            onClick={() => {
              addRandomUsers();
              setDataUpdate((a) => a + 1);
            }}
          >
            addRandomUsers
          </button>

          <div>Create user</div>
          <div className="flex">
            <div className="flex flex-col">
              Name
              <input className="border-2" />
              Email
              <input className="border-2" />
              Password
              <input className="border-2" />
              Avatar
              <input className="border-2" />
            </div>
            <div className="flex flex-col">
              Phone
              <input className="border-2" />
              Address
              <input className="border-2" />
              Position
              <input className="border-2" />
              Status
              <input className="border-2" />
            </div>
          </div>
        </Modal>
      </div>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {userList ? (
              userList.map((item) => (
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
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>
                    <span>{item.email}</span>
                  </td>
                  <td>
                    <span>{item.createdAt.toDateString()}</span>
                  </td>
                  <td>
                    <span>{item.isAdmin ? "Admin" : "User"}</span>
                  </td>
                  <td>
                    <span>{item.isActive ? "Active" : "Deactivate"}</span>
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
                        onClick={() => {
                          deleteUser(item.id);
                          setDataUpdate((a) => a + 1);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div>Loading</div>
            )}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}
