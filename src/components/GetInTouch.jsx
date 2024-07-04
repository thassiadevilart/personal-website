import styles from "./GetInTouch.module.css"
import { PaperPlaneRight, MapPin, Phone} from "@phosphor-icons/react";


export function GetInTouch(){
    return(
        <div className={styles.GetInTouchWrapper}>     
            <form className={styles.firstColumn} action="">
                <fieldset>
                    <legend>Send a Mensage</legend>
                    <div>
                        <label htmlFor="" className={styles.labelInput}>
                            Your Name
                            <input type="name" placeholder="Full Name" />
                        </label>

                        <label htmlFor="" className={styles.labelInput}>
                            E-mail
                            <input type="email" placeholder="yourmail@mail.com" />
                        </label>
                    </div>
                    
                    <label htmlFor="" className={styles.labelTextarea}>
                        Message
                        <textarea name="" id="" placeholder="Type"></textarea>
                    </label>
                </fieldset>
                <button type="submit" className={styles.buttonSubmit}>Send</button>
            </form>

            <div className={styles.secondColumn} >
                <div>
                    <PaperPlaneRight size={16} weight="fill" />
                    <p>thassiadev@gmail.com</p>
                </div>

                <div>
                    <MapPin size={16} weight="fill" />
                    <p>München - DE</p>
                </div>

                <div>
                    <Phone size={16} weight="fill" />
                    <p>49 176 92253420</p>
                </div>
            </div>

        </div>
    )
}