import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Icons/Back";
export const Navbar = ({ toggle, setToggle, setPage }) => {

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} onClick={()=>setPage("Home")}>
        SST
      </Link>
      <div className={styles.menu} onClick={() => { setToggle(!toggle) }}>
        <img
          className={styles.menuBtn}
          src={
            toggle
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => { setToggle(!toggle) }}
          style={
            {'height': '4vh',
            'width': '2vw'}}
        />
        {/* <Logo/> */}
      </div>
    </nav>
  );
};
