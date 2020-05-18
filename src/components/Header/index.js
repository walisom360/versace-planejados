import React, { useState } from "react"
import "./styles.css"

import { Link } from "gatsby"



const Nav = () => {
  return (
    <nav id="navbar">
      <Link style={{ textDecoration: "none" }} to="/home/">
        <h1 class="logo">
          Verssace Planejados
          <i style={{ color: "#fff" }} className="fas fa-tree" />
        </h1>
      </Link>

      <ul>
        <li>
          <Link
            style={{ textDecoration: "none",paddingBottom:4 }}
            to={`/home/`}
            activeClassName="active"
          >
            ÍNICIO
          </Link>
        </li>
        <li>
          <Link
            to={`/values/`}
            style={{ textDecoration: "none",paddingBottom:4 }}
            activeClassName="active"
          >
            VALORES
          </Link>
        </li>

        {/* <li>
          <Link
            to={`/change/`}
            style={{ textDecoration: "none",paddingBottom:4 }}
            activeClassName="active"
          >
            MUDANÇA
          </Link>
        </li> */}
        <li>
          <a
            exact
            to="/contato"
            activeClassName="current"
            style={{ textDecoration: "none",paddingBottom:4 }}
          >
            CONTATO
          </a>
        </li>

   
        
     
      </ul>
    </nav>
  )
}

export default Nav
