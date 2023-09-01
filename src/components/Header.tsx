/** @format */
"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useAtom } from "jotai";
import { sidebarAtom } from "./store";

type Props = {
  heading: string;
};

export default function Header(props: Props) {
  const [isSidebarOpen, setSidebar] = useAtom(sidebarAtom);
  return (
    <section className="h-12   items-center w-full border-b-2 shadow flex">
      <AiOutlineMenu
        onClick={() => setSidebar(!isSidebarOpen)}
        className=" text-2xl ml-4 cursor-pointer hidden sm:flex"
      />
      <div className=" flex h-full w-full   pl-8 items-center text-xl font-semibold ">
        {props.heading}
      </div>
    </section>
  );
}
