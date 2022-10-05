import React from 'react'
import style from './Nav.module.css'
import logo from '../../../img/Group.png'
import { FiMail } from 'react-icons/fi';
import { GoTriangleDown } from 'react-icons/go';

export const Nav = () => {
  return (
    <div className={style.Nav}>
        <div className={style.nav_logo}>
            <img src={logo} />
        </div>
        <div className={style.nav}>
            <ul>
                <li className={style.active}>Startseite</li>
                <li>Leistungen<GoTriangleDown/></li>
                <li>Referenzen<GoTriangleDown/></li>
                <li>Über uns</li>
            </ul>
        </div>
        <div className={style.nav_btn}>
            <button className={style.navBtn}>Kontakt<FiMail/></button>
        </div>
    </div>
  )
}
