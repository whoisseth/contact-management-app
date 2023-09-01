/** @format */
"use client";

import { cn } from "@/utility/cn";
import { BiSolidContact } from "react-icons/bi";
import { SiSoundcharts } from "react-icons/si";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAtom } from "jotai";
import { sidebarAtom } from "./store";

export default function Sidebar() {
  const pathName = usePathname();
  const isPageActive = false;
  const [isSidebarOpen] = useAtom(sidebarAtom);

  return (
    <div
      className={cn(
        "min-h-full  flex flex-col gap-2 border-r-2  w-[200px] shadow p-4 transition-all",
        isSidebarOpen ? "sm:w-[200px]" : "w-0",
        "w-auto  "
      )}
    >
      <SidebarItem
        href="/contact"
        itemName="Contact"
        icon={<BiSolidContact />}
        isPageActive={pathName === "/" || pathName === "/contact"}
      />
      <SidebarItem
        href="/charts-maps"
        itemName="Charts and Maps"
        icon={<SiSoundcharts />}
        isPageActive={pathName === "/charts-maps"}
      />
    </div>
  );
}

function SidebarItem({
  isPageActive,
  itemName,
  icon,
  href
}: {
  isPageActive: boolean;
  itemName: string;
  icon: React.ReactNode;
  href: string;
}) {
  const [animationParent] = useAutoAnimate();

  const [isSidebarOpen] = useAtom(sidebarAtom);
  return (
    <Link
      href={href}
      className={cn(
        "flex items-start gap-2 text-lg  font-semibold p-1 rounded-md  transition-all",
        "hover:shadow-md hover:bg-gray-200  ",
        { "bg-gray-200 shadow": isPageActive }
      )}
    >
      <div ref={animationParent} className="w-6 h-6 ">
        {icon}
      </div>

      {isSidebarOpen && <span className="text-lg hidden sm:block">{itemName}</span>}
    </Link>
  );
}
