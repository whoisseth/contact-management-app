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
  },
  {
    firstName: "utkarsh",
    lastName: "seth",
    status: "inactive"
  },
  {
    firstName: "utkarsh",
    lastName: "seth",
    status: "active"
  },
  {
    firstName: "utkarsh",
    lastName: "seth",
    status: "inactive"
  }
];

export const contactAtom = atom<Contact[]>(sampleData);
