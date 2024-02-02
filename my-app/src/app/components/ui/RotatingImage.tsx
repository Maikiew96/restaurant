import React from "react";
import styles from '../../styles/RotatingImage.module.css';
import PizzaIcon from '../../assets/images/logo.png'
import Image from "next/image";

const RotatingImage = () => {
    return (
        <div className={styles.container}>
           
            <Image src={PizzaIcon} alt="Rotating image" className={styles.image} />
        </div>
    )
}

export default RotatingImage