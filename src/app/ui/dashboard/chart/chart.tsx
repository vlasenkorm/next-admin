"use client";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import styles from "./chart.module.css";

const data = [
  {
    name: "Monday",
    click: 4000,
    visit: 2400,
  },
  {
    name: "Tuesday",
    click: 3000,
    visit: 1398,
  },
  {
    name: "Wednesday",
    click: 2000,
    visit: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    click: 2780,
    visit: 3908,
  },
  {
    name: "Friday",
    click: 1890,
    visit: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    click: 2390,
    visit: 3800,
  },
  {
    name: "Sunday",
    click: 3490,
    visit: 4300,
  },
];

export default function Chart() {
  return (<div className={styles.wrapper}>
     <span>Weakly Recap</span>
     <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff8000" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#ff8000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" fill="black" fillOpacity={0.2}/>
          <Tooltip contentStyle={{background:"#c9c9c9", border: "none" }}/>
          <Area
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="click"
            stroke="#ff8000"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
    
  );
}
