/** @format */

"use client";
import Button from "@/components/Button";
import { CreateAndEditModal } from "@/components/CreateAndEditModal";
import { Modal } from "@/components/Modal";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Contact, contactAtom } from "./store";

export function EditContact_Modal({
  className,
  firstNameP,
  lastNameP,
  statusP,
  contactData
}: {
  className?: string;
  firstNameP: string;
  lastNameP: string;
  statusP: string;
  contactData: Contact;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("statusP");

  useEffect(() => {
    setFirstName(firstNameP);
    setLastName(lastNameP);
    setStatus(statusP);
  }, []);

  const [contacts, setContacts] = useAtom(contactAtom);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      contacts.some(
        (contact) =>
          contact.firstName === firstName && contact.lastName === lastName
      )
    ) {
      return alert("Contact already exists");
    } else {
      const editedContacts = contacts.map((contact) => {
        if (
          contact.firstName === firstNameP &&
          contact.lastName === lastNameP &&
          contact.status === statusP
        ) {
          return {
            firstName,
            lastName,
            status
          };
        } else {
          return contact;
        }
      });

      setContacts(editedContacts);
    }
  }

  return (
    <>
      <CreateAndEditModal
        onChangeFirstName={(e) => setFirstName(e.target.value)}
        onChangeLastName={(e) => setLastName(e.target.value)}
        onChangeStatus={(e) => setStatus(e.target.value)}
        first_NameValue={firstName}
        last_NameValue={lastName}
        statusValue={status}
        onSubmit={handleSubmit}
        className={className}
        title="Edit Contact"
      />
    </>
  );
}
