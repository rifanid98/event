import React from 'react';
import {avatar, bannerImg} from 'assets'
import {ImLocation2} from 'react-icons/im';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { API_ASSETS } from 'configs';

const RectangleCard = (props) => {
    const history = useHistory();
    const {image, location, title, date, participant, note} = props;
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aut optio provident magnam. Error officia eius excepturi accusamus non, recusandae voluptatum nostrum corporis quas atque vel totam quaerat provident iusto?".repeat(2);
    
    /** Logics */
    const getParticipant = () => {
        return participant.split(',');
    }
    const getDate = () => {
        return new moment(date).format('DD MMMM YYYY');
    }
    const getImage = () => {
        return API_ASSETS + '/' + image;
    }
    return (
        <>
            <div className={styles.container} onClick={() => history.push('')}>
                <div className={styles.card}>
                    <div className={styles.image} style={{backgroundImage: `url(${getImage()})`}}></div>
                    <p className={styles.location}><ImLocation2 color="#b63c42"/> {location}</p>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.date}>{getDate()}</p>
                    <div className={styles.participant}>
                        {getParticipant().map((item, index) => {
                            return (<p key={index} className={styles.name}> <img src={avatar} alt="" height="15" width="15"/>&nbsp; {item}</p>)    
                        })}
                    </div>
                    <div className={styles.note}>
                        <p className={styles.label}>Note</p>
                        <p className={styles.text}>{note}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(RectangleCard);