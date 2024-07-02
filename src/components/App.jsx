import styles from './App.module.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Pagination } from './Pagination'


export function App(){
    return(
    <div>
        <Header />
        <Footer />
        <Pagination />
    </div>
    )
}