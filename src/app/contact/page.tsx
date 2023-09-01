/** @format */
"use client";

import Layout from "@/components/Layout";
import { NoData } from "@/components/NoData";
import React from "react";
import { CreateContact_Modal } from "./CreateContact";
import ContactCard from "@/components/ContactCard";
import { useAtom } from "jotai";
import { Contact, contactAtom } from "./store";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function ContactPage() {
  const [contacts, setContacts] = useAtom(contactAtom);
  const [animationParent] = useAutoAnimate();

  function handleDelete(contact: Contact) {
    const newContacts = contacts.filter((data) => data !== contact);
    setContacts(newContacts);
  }

  return (
    <Layout heading="Contact">
      <CreateContact_Modal className="mb-6" />

      <main
        ref={animationParent}
        className="flex flex-col  justify-start gap-3  "
      >
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <ContactCard
              contactData={contact}
              handleDelete={() => handleDelete(contact)}
              firstName={contact.firstName}
              lastName={contact.lastName}
              status={contact.status}
              key={index}
            />
          ))
        ) : (
          <NoData />
        )}
      </main>
    </Layout>
  );
}
