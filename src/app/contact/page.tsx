/** @format */
"use client";

import Button from "@/components/Button";
import Layout from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { NoData } from "@/components/NoData";
import React, { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { CreateContact_Modal } from "./CreateContact";
import ContactCard from "@/components/ContactCard";
import { useAtom } from "jotai";
import { Contact, contactAtom } from "./store";

export default function ContactPage() {
  const [contacts, setContacts] = useAtom(contactAtom);

  function handleDelete(contact: Contact) {
    const newContacts = contacts.filter((data) => data !== contact);
    setContacts(newContacts);
  }

  return (
    <Layout heading="Contact">
      <CreateContact_Modal className="mb-6" />

      <main className="flex flex-col  justify-start gap-3  ">
        {contacts.length > 0 ? (
          <>
            {contacts.map((contact, index) => (
              <ContactCard
                handleDelete={() => handleDelete(contact)}
                firstName={contact.firstName}
                lastName={contact.lastName}
                status={contact.status}
                key={index}
              />
            ))}
          </>
        ) : (
          <NoData />
        )}
      </main>
    </Layout>
  );
}
