/** @format */

import { atom } from "jotai";

export interface Contact {
  firstName: string;
  lastName: string;
  status: string;
}

const sampleData: Contact[] = [
  {
    firstName: "utkarsh",
    lastName: "seth",
    status: "active"
  }
];

export const contactAtom = atom<Contact[]>(sampleData);
