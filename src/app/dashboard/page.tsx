import React from "react";
import Card from "../ui/dashboard/card/card";
import { MdAssignmentInd } from "react-icons/md";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cardWrapper}>
          <Card
            icon={<MdAssignmentInd />}
            title="Users"
            score={2.4556}
            info="display info"
          />
          <Card
            icon={<MdAssignmentInd />}
            title="Users"
            score={2.4556}
            info="display info"
          />
          <Card
            icon={<MdAssignmentInd />}
            title="Users"
            score={2.4556}
            info="display info"
          />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}>side</div>
    </div>
  );
}
