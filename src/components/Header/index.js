import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <p className="logo">LOGO</p>
      <li className="gnb">
        <ul>스페이스 저니</ul>
        <ul>마이스페이스</ul>
        <ul>아워스페이스</ul>
      </li>
      <img className="search-icon" src="/img/searchIcon.png" alt="search-icon"/>
    </div>
  )
}
