/** @format */

"use client";
import Button from "@/components/Button";
import { CreateAndEditModal } from "@/components/CreateAndEditModal";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export function CreateContact_Modal({ className }: { className?: string }) {
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

  return <CreateAndEditModal className={className} title="Create Contact" />;
}
