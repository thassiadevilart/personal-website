import {UserState} from "react";
import styles from "./Pagination.module.css"

export function Pagination() {

    return(
        <div className={styles.positioning} >
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <span>01</span>
                    <span>
                        Articles <br/>
                        Home
                    </span>
                </div>

                <div className={styles.content}>
                    <span>02</span>
                    <span>About me</span>
                </div>

                <div className={styles.content}>
                    <span>03</span>
                    <span>Projects</span>
                </div>

                <div className={styles.content}> 
                    <span>04</span>
                    <span>Get in Touch</span>
                </div>
            </div>
        </div>
    )
}