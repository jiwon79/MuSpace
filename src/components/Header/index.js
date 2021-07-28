import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header({menu}) {
  return (
    <div className="header">
      <p className="logo">LOGO</p>
      <ul className="gnb">
        <li>
          <Link 
            to="/journey"
            className={['gnb__link', menu==='journey' && 'active-link'].join(' ')}
          >
            스페이스저니
          </Link>
        </li>
        <li>
          <Link 
            exact to="/MySpace/home"
            className={['gnb__link', menu==='myspace' && 'active-link'].join(' ')}
          >
            마이스페이스
          </Link>
        </li>
        <li>
          <Link
            to="/OurSpace"
            className={['gnb__link', menu==='ourspace' && 'active-link'].join(' ')}
          >
            아워스페이스
          </Link>
        </li>
      </ul>
      <img className="search-icon" src="/img/searchIcon.png" alt="search-icon"/>
    </div>
  )
}
