
/*****************************************************************/
/******************NAVBAR  ***************************************/
/*************************************************************/

import React from "react";
import { Link } from "react-router-dom";

/*
 1 .Make  the navbar that paste always  to the top.
 */
export default function Navbar() {
  return (
    <div className="navbar-fixed" >
    <nav className="z-depth-0" >
      <div className="nav-wrapper white" >
        <Link
          to="/"
          style={{
            fontFamily: "monospace",

          }}
          className="col s5 brand-logo center black-text"
        >
          🧑‍💻 WatchX.ai 🧑‍💻
        </Link>
      </div>
    </nav>
  </div>
  );
}

/*****************************************************************/
/******************NAVBAR  ***************************************/
/*************************************************************/