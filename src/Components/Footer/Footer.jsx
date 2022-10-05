import React from 'react'
import style from './Footer.module.css'
import logos from '../../img/Weiss-Logo.png'
export const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.footers}>
                <div className={style.footers_logo}>
                    <img src={logos} />
                </div>
                <div className={style.footers_nav}>
                    <div className={style.nav_bar}>
                        <ul>
                            <li>Geschäftsführer</li>
                            <li>Beratender Ingenieur</li>
                            <li>Dipl.-Ing. Klaus Weiss</li>
                        </ul>
                    </div>
                    <div className={style.nav_bar}>
                        <ul>
                            <li>Adresse</li>
                            <li>Straßenname 7</li>
                            <li>12345 Stadt</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className={style.hr}></div>
            <div className={style.li}>
                <ul>
                    <li>Impressum</li>
                    <li>|</li>
                    <li>Datenschutz</li>
                </ul>
            </div>
        </div>
    )
}
