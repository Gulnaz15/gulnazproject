import React from 'react';
import styles from './style.module.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.webp'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'

const Major = () =>{
    return(
        <div>
            <h1 className={styles.title}>Avada kedavra</h1>
            <p className={styles.title2}>Believe in our magical stuff</p>
            <div className={styles.main}>
                <img className={styles.img} src={img1}/>
                <img className={styles.img} src={img2}/>
                <img className={styles.img} src={img3}/>
                <img className={styles.img} src={img4}/>
                <img className={styles.img} src={img5}/>
                <img className={styles.img} src={img6}/>
            </div>

        </div>
    )
}

export default Major