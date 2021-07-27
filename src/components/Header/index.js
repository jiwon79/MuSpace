import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <p className="logo">LOGO</p>
      <ul className="gnb">
        <li>
          <NavLink 
            to="/journey"
            className="gnb__link"
            activeClassName="active-link"
          >
            스페이스저니
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact to="/MySpace/home"
            className="gnb__link"
            activeClassName="active-link"
          >
            마이스페이스
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/OurSpace"
            className="gnb__link"
            activeClassName="active-link"
          >
            아워스페이스
          </NavLink>
        </li>
      </ul>
      <img className="search-icon" src="/img/searchIcon.png" alt="search-icon"/>
    </div>
  )
}
