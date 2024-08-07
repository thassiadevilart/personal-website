import styles from './Projects.module.css'
import{ArrowUpRight} from "@phosphor-icons/react"

export function Projects(props){
    return(
        <section className={styles.projectsSectionWrapper} ref={props.refProp} >
            <div className={styles.projectCard}>
                <span>01.</span>
                <div className={styles.projectTitle}>
                    <h2>Project Name</h2>
                    <ArrowUpRight size={16} />
                </div>
                
                <div className={styles.techTagsWrapper}>
                    <p>React</p>
                    <p>Next</p>
                    <p>TS</p>
                </div>
            </div>

            <div className={styles.projectCard}>
                <span>02.</span>
                <div className={styles.projectTitle}>
                    <h2>Project Name</h2>
                    <ArrowUpRight size={16} />
                </div>
                
                <div className={styles.techTagsWrapper}>
                    <p>React</p>
                    <p>Next</p>
                    <p>TS</p>
                </div>
            </div>

            <div className={styles.projectCard}>
                <span>03.</span>
                <div className={styles.projectTitle}>
                    <h2>Project Name</h2>
                    <ArrowUpRight size={16} />
                </div>
                
                <div className={styles.techTagsWrapper}>
                    <p>React</p>
                    <p>Next</p>
                    <p>TS</p>
                </div>
            </div>

            <div className={styles.projectCard}>
                <span>04.</span>
                <div className={styles.projectTitle}>
                    <h2>Project Name</h2>
                    <ArrowUpRight size={16} />
                </div>
                
                <div className={styles.techTagsWrapper}>
                    <p>React</p>
                    <p>Next</p>
                    <p>TS</p>
                </div>
            </div>
        </section>
    )
    
}