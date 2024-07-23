import styles from './App.module.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Articles } from './Articles'
import { ButtonDownloadCV } from './ButtonDownloadCV'

export function App(){
    return(
        <main className={styles.pageContentWrapper} >
            <ButtonDownloadCV />

            <header>
                <Header />
            </header>
            
            <section className={styles.mainContent}>
                <Articles/>
            </section>

            <footer className={styles.Footer}>
                <Footer />
            </footer>
        </main>
    )
}