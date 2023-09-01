/** @format */

import React from "react";

import mapImg from "./mapImg.png";
import Image from "next/image";
import Link from "next/link";

export default function Map() {
  return (
    <div>
      <Image className="mb-2" src={mapImg} alt="mat-img" />
      <div>
        <li>Map is working in local </li>
        <li>But getting a build issue </li>
        <li>I tried to solve build for 2 hours </li>
        <li>But not get any solution</li>
        <li>Thats why uploaded scrrenshot of my map</li>
        <li>
          Other wise you can test map in <code>graph-and-map-page</code> branch
        </li>

        <li>
          repo -
          <Link
            target="_blank"
            className="text-blue-500 hover:underline"
            href="https://github.com/whoisseth/contact-management-app"
          >
            https://github.com/whoisseth/contact-management-app
          </Link>
        </li>
        <li>
          local working branch -
          <Link
            target="_blank"
            className="text-blue-500 hover:underline"
            href="https://github.com/whoisseth/contact-management-app/tree/graph-and-map-page"
          >
            https://github.com/whoisseth/contact-management-app/tree/graph-and-map-page
          </Link>
        </li>
      </div>
    </div>
  );
}
