import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = ({ toggle, setToggle }) => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} href="/">
        SST
      </Link>
      <div className={styles.menu} onClick={() => { setToggle(!toggle) }}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => { setMenuOpen(!menuOpen); setToggle(!toggle) }}
          style={
            {'height': '4vh',
            'width': '2vw'}}
        />
      </div>
    </nav>
  );
};
