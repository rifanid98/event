import React from 'react'
import styles from './styles.module.css';

const Alert = (props) => {
    const {message, type} = props;
    console.log(message);
    return (
        <>
            {type === 'success' && <div className={styles.success}>
                {message.map((item, index) => {
                    return <p key={index} className={styles.p}>{item}</p>
                })}
            </div>}
            {type === 'error' && <div className={styles.error}>
                {message.map((item, index) => {
                    return <p key={index} className={styles.p}>{item}</p>
                })}
            </div>}
        </>
    )
}

export default React.memo(Alert)