"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

import CountdownTimer from "./CountdownTimer/CountdownTimer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const WEDDING_DATE = new Date("7 september 2024");
  const NOW_IN_MS = new Date().getTime();

  return (
    <>
      <nav className="navbar">
        <div className={click ? "navbar-container active" : "navbar-container"}>
          <Link href="/" className="navbar-text">
            C&M
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={click ? faTimes : faBars}
              className={click ? "fa-times" : "fa-bars"}
            />
          </div>
          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item">
              <Link
                href="/#our-story"
                className="navbar-item-text"
                onClick={closeMobileMenu}
              >
                Our Story
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/#details"
                className="navbar-item-text"
                onClick={closeMobileMenu}
              >
                Details
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/#wedding-party"
                className="navbar-item-text"
                onClick={closeMobileMenu}
              >
                Wedding Party
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/#accomodations"
                className="navbar-item-text"
                onClick={closeMobileMenu}
              >
                Accomodations
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/#faq"
                className="navbar-item-text"
                onClick={closeMobileMenu}
              >
                F A Q
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/#registry"
                className="navbar-item-text"
                onClick={closeMobileMenu}
              >
                Registry
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                href="/#rsvp"
                className="navbar-item-text"
                onClick={closeMobileMenu}
              >
                Rsvp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
