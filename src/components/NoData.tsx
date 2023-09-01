/** @format */

import { cn } from "@/utility/cn";
import React from "react";
import { BiErrorCircle } from "react-icons/bi";

export function NoData({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        " flex gap-2 text-yellow-500 justify-center  w-fit border rounded p-4  mx-auto",
        className
      )}
    >
      <div>
        <BiErrorCircle className="text-4xl" />
      </div>
      <div>
        <p className="">No contact found please</p>
        <p>Add contact from </p>
        <p>Create contact button</p>
      </div>
    </section>
  );
}
