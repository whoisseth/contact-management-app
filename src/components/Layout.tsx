/** @format */
"use client";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { cn } from "@/utility/cn";

type Props = {
  children: React.ReactNode;
  heading: string;
  className?: string;
};

export default function Layout(props: Props) {
  return (
    <div className=" h-screen max-h-screen  ">
      <Header heading={props.heading} />
      <main className="flex h-[calc(100%-48px)] ">
        <Sidebar />
        <div className={cn("p-4 overflow-auto w-full", props.className)}>
          {props.children}
        </div>
      </main>
    </div>
  );
}
