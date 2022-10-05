import React from 'react'
import style from './Header.module.css'
import { Nav } from './Nav/Nav'
import image from '../../img/Image.png'
import { FaAngleRight } from 'react-icons/fa';
export const Header = () => {
  return (
    <div className={style.Header}>
        <Nav/>
        <div className={style.header_main}>
            <div className={style.header_txt}>
                <h3>Ingenieur Dieter Weiss</h3>
                <h1>Ingenieurbüro für Bau- und Vermessungswesen</h1>
                <h2>Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro Dieter Weiss ist Garant für den Er­folg Ihrer Projekte.</h2>
                <button className={style.header_txt_btn}>Ihr Projekt mit uns<FaAngleRight/></button>

            </div>
            <div className={style.header_img}>
                <img src={image}/>
                
                </div>
        </div>
    </div>
  )
}
