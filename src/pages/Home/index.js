import React, { useEffect, useState } from 'react';
import { RectangleCard } from 'components';
import styles from './styles.module.css';
import { getEvents } from 'services';

const Home = () => {
    const [events, setEvents] = useState([])
    
    /** Life Cycles */
    useEffect(() => {
        getData();
    }, [])

    /** APIs */
    const getData = async () => {
        try {
            const search = "";
            const page = 1;
            const limit = 0;
            const data = await getEvents(search, page, limit);
            setEvents(data);
        } catch (error) {
            console.log(error);
        }
    }    
    
    return (
        <>
            <div className={styles.container}>
                {events.map((item, index) => {
                    return (
                        <RectangleCard key={index}
                            image={item.image}
                            location={item.location}
                            title={item.title}
                            date={item.date}
                            participant={item.participant}
                            note={item.note} />
                    )
                })}
            </div>
        </>
    )
}

export default React.memo(Home);