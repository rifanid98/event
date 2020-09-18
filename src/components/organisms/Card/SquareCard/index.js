import React from 'react'
import styles from './styles.module.css';

const SquareCard = (props) => {
    
    return (
        <div className={styles.container}>
            <p>box!</p>
        </div>
    )
}

export default React.memo(SquareCard);