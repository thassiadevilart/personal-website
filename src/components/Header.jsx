import styles from './Header.module.css'
import { ArrowUpRight, List, Translate} from "@phosphor-icons/react";

export function Header(){
    return(
        <header className={styles.Header} >
            <div className={styles.headerLeft}>
                <button>
                    <span><Translate color="#343434" weight="light" className={styles.IconTranslate} /></span>
                    <span>EN</span>
                </button>
                <h1> <b>Thassia Devilart</b> Software Engineer</h1>
            </div>

            <div className={styles.headerRight}>
                <a href="" className={styles.GetInTouchButton}>
                    Get in Touch
                    <ArrowUpRight siz={2e0} color="#A8A8A8" weight="regular" />
                </a>
                <a href="" className={styles.NavMenuButton}>
                    <List size={28} color="#343434" weight="light" />
                </a>
            </div>
        </header>
    )
}