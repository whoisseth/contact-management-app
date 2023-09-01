/** @format */

"use client";
import Button from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useState } from "react";

interface Props {
  className?: string;
  title: string;
  first_Name?: string;
  last_Name?: string;
  status?: "active" | "inactive";
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function CreateAndEditModal(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit btn cliecked");
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
            required
            minLength={3}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="border border-gray-300 p-2 rounded-md"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="border border-gray-300 p-2 rounded-md"
          />
          <label htmlFor="status">Status</label>
          <div className="flex gap-2">
            <input
              required
              type="radio"
              name="status"
              id="status"
              value="active"
              className="border border-gray-300 p-2 rounded-md"
            />
            <label htmlFor="status">Active</label>
            <input
              required
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
