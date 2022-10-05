import React from 'react'
import style from './Section2.module.css'
import { FaAngleRight } from 'react-icons/fa';

export const Section2 = () => {
    return (
        <div className={style.Section2}>
            <div className={style.section2_text}>
                <div className={style.txt}>
                    <div className={style.text1}>
                        <h1>Wissenswertes</h1>
                        <p>Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condimentum nisl non gravida in. </p>
                    </div>
                    <div className={style.text1_btn}>
                        <button className={style.txt1_btn}>Unser Blog<FaAngleRight /></button>
                    </div>
                </div>
            </div>
            <div className={style.section2_text2}>
                <h3>Unsere Letzten Beiträge</h3>
                <div className={style.txt_block}>
                    <div className={style.block_text}>
                        <h1>Sed eget morbi cursus elit ipsum pellentesque</h1>
                        <p>Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...</p>
                        <a href="#">Lesen Sie weiter <FaAngleRight /> </a>

                    </div>
                    <div className={style.block_text}>
                        <h1>Urna velit semper faucibus ac suspendisse et</h1>
                        <p>In nibh sodales tincidunt vitae tortor. Turpis aliquam mattis eget cursus bibendum interdum vestibulum, aliquam. Fringilla malesuada...</p>
                        <a href="#">Lesen Sie weiter <FaAngleRight /></a>

                    </div>
                    <div className={style.block_text}>
                        <h1>Bibendum augue imperdiet sapien quis enim elementum</h1>
                        <p>Facilisi id mus at pulvinar vitae, ornare vitae scelerisque. Lacus egestas augue cursus aliquam nulla. Sed erat a scelerisque neque...</p>
                        <a href="#">Lesen Sie weiter <FaAngleRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
