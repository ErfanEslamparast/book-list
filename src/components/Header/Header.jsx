import React from "react";
import "./Header.css";
import { FaBookOpen } from "react-icons/fa6";
export default function Header() {
  return (
    <header>
      <FaBookOpen className="FaBookOpen" />
      <p>Book Adder Form</p>
    </header>
  );
}
