import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2 className="footer-data">MyGharana | Hotel Room Booking App</h2>
      <p className="footer-data">
        &copy; <span>{year}</span> MyGharana.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href=""
        >
          Aviraj Singh
        </a>
      </p>
    </footer>
  );
}