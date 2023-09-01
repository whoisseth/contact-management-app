/** @format */

import { cn } from "@/utility/cn";
import React, { ButtonHTMLAttributes } from "react";

type Props = {
  variant?: "danger" | "success" | "default";
  children: React.ReactNode;
};

export default function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      {...props}
      className={cn(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        className,
        props.variant === "danger" && "bg-red-500 hover:bg-red-700",
        props.variant === "success" && "bg-green-500 hover:bg-green-700",
        props.variant === "default" && "bg-blue-500 hover:bg-blue-700"
      )}
    >
      {props.children}
    </button>
  );
}
