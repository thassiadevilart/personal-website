import styles from './App.module.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Pagination } from './Pagination'


export function App(){
    return(
    <main>
        <Header />

        <footer className={styles.Footer}>
            <Footer />
            <Pagination />
        </footer>
    </main>
    )
}