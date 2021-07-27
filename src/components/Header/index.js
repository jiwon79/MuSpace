import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <p className="logo">LOGO</p>
      <ul className="gnb">
        <li><Link to="/space">스페이스저니</Link></li>
        <li><Link to="/">마이스페이스</Link></li>
        <li><Link to="/our">아워스페이스</Link></li>
      </ul>
      <img className="search-icon" src="/img/searchIcon.png" alt="search-icon"/>
    </div>
  )
}
