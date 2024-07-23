import styles from './Articles.module.css';
import{ArrowSquareOut} from "@phosphor-icons/react";

export function Articles(props){
    return (
        <section ref={props.refProp} className={styles.sectionWrapper} >
            <div className={styles.firstColumn} >
                <a href="">
                    Articles
                    <ArrowSquareOut size={16} />
                </a>
                <h1>Lorem ipsum dolor sit</h1>
            </div>

            <div className={styles.secondColumn}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium nunc sed arcu bibendum, ut tempor felis ultrices. Cras ut tempus tellus, eu ultrices ligula. Aenean tincidunt blandit posuere. Vestibulum vehicula dolor magna, eget laoreet erat ornare molestie. Phasellus ultricies eros est, sed lacinia sem pulvinar cursus. Quisque in dolor vitae ipsum dapibus maximus. Nam rutrum sapien vel risus tristique, ut facilisis nisl aliquet. Mauris malesuada orci at lobortis efficitur.</p>

                <a href="">More</a>
            </div>
        </section>
    )
}