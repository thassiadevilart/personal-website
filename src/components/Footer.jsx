import styles from './Footer.module.css'
import { ArrowSquareOut} from "@phosphor-icons/react";

export function Footer(){
    return(
        <footer className={styles.Footer}>
            <div className={styles.FooterImpressum}>
                <a>
                    Impressum 
                    <ArrowSquareOut/>
                </a>
                <span>© 2023 — GERMANY</span>
            </div>

            <div className={styles.FooterSocialLinks}>
                <span>Social Links</span>

                <div className={styles.HoverableContent}>
                    <span> | </span>

                    <a href="https://github.com/thassiadevilart">
                        Github
                        <ArrowSquareOut/>
                    </a>

                    <a href="https://www.behance.net/thassiadevilart">
                        Behance
                        <ArrowSquareOut/>
                    </a>

                    <a href="https://www.linkedin.com/in/thassia-devilart-92979a305/">
                        Linkedin
                        <ArrowSquareOut/>
                    </a>
                </div>
            </div>
        </footer>
    )
}