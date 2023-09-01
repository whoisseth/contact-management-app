/** @format */

"use client";

import { EditContact_Modal } from "@/app/contact/EditContact";
import Button from "./Button";
import { Contact } from "@/app/contact/store";
import { cn } from "@/utility/cn";

interface Props extends Contact {
  handleDelete: () => void;
}

export default function ContactCard(props: Props) {
  return (
    <div
      title={props.status}
      className="sm:flex-row gap-4 w-fit sm:w-auto  justify-between items-center border  rounded shadow flex flex-col max-w-[600px]  min-w-[250px] p-4 relative"
    >
      {/* status */}
      <div
        // title={props.status}
        className={cn(
          " h-4 w-4 rounded-full absolute left-2 top-2 ",
          props.status === "active" ? "bg-green-500" : "bg-red-500"
        )}
      />
      <h1 className="text-2xl font-semibold capitalize">
        {props.firstName + " " + props.lastName}
      </h1>
      <div className="flex gap-2">
        <EditContact_Modal />
        <Button onClick={props.handleDelete} variant="danger">
          Delete
        </Button>
      </div>
    </div>
  );
}
