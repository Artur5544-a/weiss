import React from 'react'
import style from './Section.module.css'
import img5 from '../../../img/Image5.png'
import { FaAngleRight } from 'react-icons/fa';
export const Section3 = () => {
    return (
        <div className={style.section3}>
            <div className={style.section3_item}>
                <div className={style.item_txt}>
                    <h3>Mach Karriere bei uns</h3>
                    <h1>Bewirb dich bei uns</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <button className={style.item_txt_btn}> <a href='#'>Karriere<FaAngleRight /></a></button>
                   
                </div>
                <div className={style.item_img}>
                    <img src={img5} />
                </div>
            </div>
        </div>
    )
}
