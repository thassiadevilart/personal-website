import styles from './AboutMe.module.css'
import img from '../assets/img/aboutMeImg.png'

export function AboutMe(props){
    return(
        <section ref={props.refProp} className={styles.aboutMe}>

            <img src={img} alt="" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla officiis eos nihil voluptates, obcaecati modi magni in aliquid sit ea est illo officia, eveniet aspernatur dolore non magnam, sapiente alias!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium nunc sed arcu bibendum, ut tempor felis ultrices. Cras ut tempus tellus, eu ultrices ligula. 
                <br /> <br />
                Aenean tincidunt blandit posuere. Vestibulum vehicula dolor magna, eget laoreet erat ornare molestie. Phasellus ultricies eros est, sed lacinia sem pulvinar cursus. Quisque in dolor vitae ipsum dapibus maximus. Nam rutrum sapien vel risus tristique, ut facilisis nisl aliquet. Mauris malesuada orci at lobortis efficitur.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla officiis eos nihil voluptates, obcaecati modi magni in aliquid sit ea est illo officia, eveniet aspernatur dolore non magnam, sapiente alias!
                <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium nunc sed arcu bibendum, ut tempor felis ultrices. Cras ut tempus tellus, eu ultrices ligula.
            </p>
        </section>
    )
}