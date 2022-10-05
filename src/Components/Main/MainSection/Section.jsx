import React from 'react'
import style from './Section.module.css'
import img4 from '../../../img/Image4.png'
import { FaAngleRight } from 'react-icons/fa';

export const Section = () => {
  return (
    <div className={style.section}>
      <div className={style.section1}>
        {/* <div className={style.sections}> */}
          <div className={style.section1_text}>
            <h4>Unsere Firmenhistorie</h4>
            <h1>Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein Ingenieurbüro.</h1>
            <h2>Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006 ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer</h2>
            <div className={style.hr}></div>
          <div className={style.a}><a href='#'>Lesen Sie weiter <FaAngleRight /></a></div>
          </div>
          <div className={style.section1_imgs}>
            <img src={img4} />
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}
