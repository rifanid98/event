import React from 'react';
import styles from './styles.module.css';
import moment from 'moment';

const Input = (props) => {
    const {type, title} = props;
    const today = moment().format("YYYY-MM-DD");
    return (
        <>
            {type === "text" && <input {...props}  className={styles.input} />}
            {type === "number" && <input {...props}  className={styles.input} />}
            {type === "textarea" && <textarea {...props}  className={styles.textarea} cols="30" rows="8" ></textarea>}
            {type === "date" && <input {...props}  className={styles.input} defaultValue={today}/>}
            {type === "file" && <input {...props}  className={styles.input} />}
            {type === "button" && <button {...props}  className={styles.button} >{title}</button>}
            {type === "reset" && <button {...props}  className={styles.reset} >{title}</button>}
        </>
    )
}

export default Input;