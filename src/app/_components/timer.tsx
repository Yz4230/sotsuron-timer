"use client";

import { differenceInSeconds, formatDate, toDate } from "date-fns";
import { useEffect, useState } from "react";

const DEADLINE = toDate("2025-01-31T15:59");

export default function Timer() {
  const [text, setText] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const remaining = differenceInSeconds(DEADLINE, now);
      const hours = Math.floor(remaining / 3600);
      const minutes = Math.floor((remaining % 3600) / 60);
      const seconds = remaining % 60;

      setText(`あと${hours}時間${minutes}分${seconds}秒`);
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      <div className="text-2xl sm:text-4xl">
        卒論提出（{formatDate(DEADLINE, "MM/dd HH:mm")}）まで
      </div>
      <div className="text-3xl sm:text-5xl">{text}</div>
    </div>
  );
}
