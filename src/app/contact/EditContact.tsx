/** @format */

"use client";
import Button from "@/components/Button";
import { CreateAndEditModal } from "@/components/CreateAndEditModal";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export function EditContact_Modal({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <CreateAndEditModal title="Edit Contact" />
  );
}
