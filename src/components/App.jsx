import styles from './App.module.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Pagination } from './Pagination'
import { GetInTouch } from './GetInTouch'

export function App(){
    return(
    <main>
        <Header />
        <GetInTouch/>

        <footer className={styles.Footer}>
            <Footer />
            <Pagination />
        </footer>
    </main>
    )
}