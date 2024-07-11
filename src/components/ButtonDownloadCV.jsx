import styles from './ButtonDownloadCV.module.css'
import { DownloadSimple} from "@phosphor-icons/react";

export function ButtonDownloadCV(){
    return (
        <button className={styles.buttonDownloadCvWrapper}>
            <DownloadSimple size={18} />
            <div></div>
            <p>Resume</p>
        </button>
    )
}