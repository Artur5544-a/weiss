import React from 'react'
import style from './Main.module.css'
import img1 from '../../img/Image1.png'
import img2 from '../../img/Image2.png'
import img3 from '../../img/Image3.png'
import { FaAngleRight } from 'react-icons/fa';
import { Section } from './MainSection/Section'
import { Section2 } from './MainSection2/Section2'
import { Section3 } from './MainSection3/Section3'
import { Footer } from '../Footer/Footer'
export const Main = () => {
    return (
        <div className={style.Main}>
            <div className={style.main}>
                <div className={style.main_txt}>
                    <h2>Unsere Dienstleistungen</h2>
                    <h3>Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist die Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver- und Ent­sorgung, Lärmschutz oder Spezialgebiete – wir bieten Rundum-Service mit:</h3>
                </div>
                <div className={style.main_block}>
                    <div className={style.block}>
                        <div className={style.block_img}>
                            <img src={img1} />
                        </div>
                        <div className={style.block_txt}>
                            <h2>Studien und Konzepte, Gesamtplanung</h2>
                            <h3>Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.</h3>
                            <a href='#'>Erfahren Sie mehr <FaAngleRight /></a>
                        </div>
                    </div>
                    <div className={style.block}>
                        <div className={style.block_img}>
                            <img src={img2} />
                        </div>
                        <div className={style.block_txt}>
                            <h2>Verkehrsanlagen und Ingenieurbauwerke</h2>
                            <h3>Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.</h3>
                        </div>

                    </div><div className={style.block}>
                        <div className={style.block_img}>
                            <img src={img3} />
                        </div>
                        <div className={style.block_txt}>
                            <h2>Entwurfsvermessung, 3D-Laserscanning</h2>
                            <h3>Bei Ausführung sämtlicher vermessungstechnischer Aufgaben im Leistungsbild „Ent­wurfs­vermessung“ sind wir ein leistungsstarker Partner.</h3>
                            <a href='#'>Erfahren Sie mehr <FaAngleRight /></a>
                        </div>

                    </div>
                </div>
                <Section />
                <Section2 />
                
            </div>
            <Section3/>
            <Footer/>
        </div>
    )
}
