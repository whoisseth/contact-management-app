/** @format */

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  heading: string;
};

export default function Layout(props: Props) {
  return (
    <div className=" h-screen max-h-screen  ">
      <Header heading={props.heading} />
      <main className="flex h-[calc(100%-48px)] ">
        <Sidebar />
        <div className="p-4 overflow-auto">{props.children}</div>
      </main>
    </div>
  );
}
