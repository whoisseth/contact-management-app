/** @format */
"use client";

import { useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { RiCloseCircleLine } from "react-icons/ri";

import { cn } from "@/utility/cn";

type Props = {
  showModal: boolean;
  className?: string;
  closeModal: () => void;
  title: string;
  children: React.ReactNode;
  titleRight?: string;
};

export function Modal({
  showModal,
  closeModal,
  className,
  title = "Modal Title",
  children,
  titleRight
}: Props) {
  // modal close on press escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  //

  return showModal ? (
    <>
      <Dialog
        open={showModal}
        onClose={closeModal}
        className="fixed inset-0 z-50 overflow-auto"
      >
        <section className="flex items-center justify-center min-h-screen overflow-auto">
          <div className="fixed inset-0 left-0 right-0 w-screen bg-black opacity-30" />
          <main
            className={cn(
              " min-h-[100px]  text-left   bg-white rounded-lg  px-9 py-[18px] shadow font-normal  transition-all  m-8  z-50 ",
              className
            )}
          >
            <div className="flex justify-between mb-3 ">
              <p className="text-xl font-bold">{title}</p>
              <div className="flex items-center gap-2">
                {titleRight && (
                  <p className="text-xl font-bold">{titleRight}</p>
                )}

                <RiCloseCircleLine
                  onClick={() => {
                    closeModal();
                  }}
                  className="text-3xl cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#c4c4c4c4] mb-4 !text-base " />
            {children}
          </main>
        </section>
      </Dialog>
    </>
  ) : null;
}
