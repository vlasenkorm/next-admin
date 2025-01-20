"use client";
import React from "react";
import styles from "./ui/login/login.module.css";
import { useToast } from "@/components/ui/toast/use-toast";
import { Button } from "@/components/ui/button";

export default function Login() {
  const { toast } = useToast();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={styles.box}>
        <div>Authentication</div>

        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    </div>
  );
}
