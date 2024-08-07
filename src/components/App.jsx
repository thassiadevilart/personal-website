import styles from './App.module.css'
import { useRef } from 'react'

import { Header } from './Header'
import { Footer } from './Footer'
import { Articles } from './Articles'
import {GetInTouch} from './GetInTouch'
import { AboutMe } from './AboutMe'
import {Projects} from './Projects'

export function App(){

    let currentPage = 0

    const articlesRef = useRef()
    const aboutMeRef = useRef()
    const getInTouchRef = useRef()
    const projectsRef = useRef()

    const pagesRefs=[
        articlesRef,
        projectsRef,
        aboutMeRef,
        getInTouchRef
    ]

    function scrollDown(){
        if (currentPage < pagesRefs.length-1 ) {
            currentPage += 1
        } else {
            currentPage = 0
        }
        
        pagesRefs[currentPage].current.scrollIntoView({behavior:'smooth'})
        console.log(currentPage)
    }

    return(
        <main className={styles.pageContentWrapper} >
            <header className={styles.Header}>
                <Header/>
            </header>
            
            <section className={styles.mainContent}>
                <Articles refProp={articlesRef} />
                <Projects refProp={projectsRef} />
                <AboutMe refProp={aboutMeRef}/>
                <GetInTouch refProp={getInTouchRef} />
            </section>

            <footer className={styles.Footer}>
                <Footer scrollDownProp={scrollDown} />
            </footer>
        </main>
    )
}