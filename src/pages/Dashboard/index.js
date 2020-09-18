import React, { useEffect, useState } from 'react';
import { Input } from 'components';
import styles from './styles.module.css';
import { getEvents } from 'services';
import moment from 'moment';

const searchInput = {
    backgroundColor: '#c4c4c4',
    color: '#4D4D4D',
    margin: 0,
    marginBottom: '20px',
    fontSize: '15px'
}

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [pages, setPages] = useState([]);
    const [keyword, setKeyword] = useState("");
    
    /** Life Cycles */
    useEffect(() => {
        getData();
    }, [])

    /** APIs */
    const getData = async () => {
        try {
            const search = "";
            const data = await getEvents(search, page, limit);
            if (data.data) {
                setEvents(data.data);
                const pages = new Array(data.totalPage).fill(0);
                setPages(pages);
            } else {
                setEvents([]);
            }
        } catch (error) {
            console.log(error);
        }
    }    
    const searchData = async (search) => {
        setKeyword(search);
        try {
            const data = await getEvents(search, page, limit);
            if (data.data) {
                setEvents(data.data);
                const pages = new Array(data.totalPage).fill(0);
                setPages(pages);
            } else {
                setEvents([]);
                setPages([]);
                setPage(1);
            }
        } catch (error) {
            console.log(error);
        }
    }   
    const paginateData = async (p) => {
        setPage(p);
        try {
            const data = await getEvents(keyword, p, limit);
            if (data.data) {
                setEvents(data.data);
                const pages = new Array(data.totalPage).fill(0);
                setPages(pages);
            } else {
                setEvents([]);
            }
        } catch (error) {
            console.log(error);
        }
    }     

    /** Logics */
    const searchEvent = (search) => {
        searchData(search);
    }
    const getDate = (date) => {
        return new moment(date).format('DD/MM/YYYY');
    }
    const previousPage = () => {
        paginateData(page-1);
    }
    const nextPage = () => {
        paginateData(page+1);
    }
    const goToPage = (p) => {
        paginateData(p);
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.search}>
                        <Input type="text" placeholder="Search" style={searchInput} onChange={(e) => searchEvent(e.target.value)}/>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table} >
                            <thead className={styles.thead}>
                                <tr>
                                    <td className={styles.heading}>No.</td>
                                    <td className={styles.heading}>Title</td>
                                    <td className={styles.heading}>Location</td>
                                    <td className={styles.heading}>Date</td>
                                    <td className={styles.heading}>Participant</td>
                                    <td className={styles.heading}>Note</td>
                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                {events.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={styles.body} style={{width: '20px'}}>{index+1}</td>
                                            <td className={styles.body}>{item.title}</td>
                                            <td className={styles.body}>{item.location}</td>
                                            <td className={styles.body} style={{width: '100px'}}>{getDate(item.date)}</td>
                                            <td className={styles.body}>{item.participant}</td>
                                            <td className={styles.body}>{item.note.substring(0, 50)}...</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.pagination}>
                        {page > 1  && <div className={styles.arrowBack} onClick={() => previousPage()}></div>}
                        {pages.map((item, index) => {
                            return (
                                <p key={index} className={styles.p} style={{backgroundColor: index+1===page && '#c4c4c4'}} onClick={() => goToPage(index+1)}>{index+1}</p>
                            )
                        })}
                        {(page !== pages.length && pages.length > 0) && <div className={styles.arrowNext} onClick={() => nextPage()}></div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Dashboard);