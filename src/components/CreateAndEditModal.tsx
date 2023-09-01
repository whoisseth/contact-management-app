/** @format */

"use client";
import { contactAtom } from "@/app/contact/store";
import Button from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useAtom } from "jotai";
import { useState } from "react";

interface Props {
  className?: string;
  title: string;
  first_NameValue?: string;
  last_NameValue?: string;
  statusValue?: string;

  // create on change for first_name last name statsu value
  onChangeFirstName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLastName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStatus?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function CreateAndEditModal(props: Props) {
  const [showModal, setShowModal] = useState(false);

  const [contacts, setContacts] = useAtom(contactAtom);
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit && props.onSubmit(e);

    closeModal();
  }

  return (
    <div className={props.className}>
      <Button onClick={openModal}> {props.title || "Contact"} </Button>
      <Modal
        closeModal={closeModal}
        showModal={showModal}
        title={props.title || "Contact"}
        className=""
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={props.onChangeFirstName}
            required
            minLength={3}
            type="text"
            name="firstName"
            id="firstName"
            value={props.first_NameValue}
            placeholder="First Name"
            className="border border-gray-300 p-2 rounded-md"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={props.onChangeLastName}
            //
            required
            type="text"
            name="lastName"
            id="lastName"
            value={props.last_NameValue}
            placeholder="Last Name"
            className="border border-gray-300 p-2 rounded-md"
          />
          <label htmlFor="status">Status</label>
          <div className="flex gap-2">
            <input
              onChange={props.onChangeStatus}
              required
              type="radio"
              name="status"
              id="status"
              checked={props.statusValue === "active"}
              value="active"
              className="border border-gray-300 p-2 rounded-md"
            />
            <label htmlFor="status">Active</label>
            <input
              onChange={props.onChangeStatus}
              required
              checked={props.statusValue === "inactive"}
              type="radio"
              name="status"
              id="status"
              value="inactive"
              className="border border-gray-300 p-2 rounded-md"
            />
            <label htmlFor="status">Inactive</label>
          </div>

          <Button variant="success">Save Contact</Button>
        </form>
      </Modal>
    </div>
  );
}
