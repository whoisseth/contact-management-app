/** @format */

"use client";

import { CreateAndEditModal } from "@/components/CreateAndEditModal";
import { useAtom } from "jotai";
import { useState } from "react";
import { contactAtom } from "./store";

export function CreateContact_Modal({ className }: { className?: string }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<string>("");

  const [contacts, setContacts] = useAtom(contactAtom);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setStatus("");

    if (
      contacts.some(
        (contact) =>
          contact.firstName === firstName && contact.lastName === lastName
      )
    ) {
      return alert("Contact already exists");
    } else {
      setContacts([...contacts, { firstName, lastName, status }]);
    }
  }

  return (
    <CreateAndEditModal
      onChangeFirstName={(e) => setFirstName(e.target.value)}
      onChangeLastName={(e) => setLastName(e.target.value)}
      onChangeStatus={(e) => setStatus(e.target.value)}
      first_NameValue={firstName}
      last_NameValue={lastName}
      statusValue={status}
      onSubmit={handleSubmit}
      className={className}
      title="Create Contact"
    />
  );
}
