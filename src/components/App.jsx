import styles from './App.module.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Pagination } from './Pagination'
import { GetInTouch } from './GetInTouch'
import { ButtonDownloadCV } from './ButtonDownloadCV'

export function App(){
    return(
        <main className={styles.pageContentWrapper} >
            <ButtonDownloadCV />

            <header>
                <Header />
            </header>
            
            <section className={styles.mainContent}>
                <GetInTouch/>
            </section>

            <footer className={styles.Footer}>
                <Footer />
                <Pagination />
            </footer>
        </main>
    )
}