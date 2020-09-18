import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {RiDashboardLine} from 'react-icons/ri';
import {GoDiffAdded} from 'react-icons/go';
import styles from './styles.module.css';

const Navbar = (props) => {
    const [menu, setMenu] = useState("home")
    const history = useHistory();

    /** Life cycles */
    useEffect(() => {
        getPath(menu);
    }, [])

    /** Logics */
    const getPath = (menu) => {
        const pathname = history.location.pathname.split('/')[1];
        setMenu(pathname);
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.left}>
                    <Link
                        to="/home"
                        className={menu === "home" ? styles.menu_active : styles.menu}
                        onClick={() => setMenu("home")}>
                        Event App
                    </Link>
                </div>
                <div className={styles.right}>
                    <div className={styles.icon}>
                        <Link
                            to="/add"
                            className={menu === "add" ? styles.menu_active : styles.menu}
                            onClick={() => setMenu("add")}>
                            <GoDiffAdded />
                        </Link>
                        <Link
                            to="/dashboard"
                            className={menu === "dashboard" ? styles.menu_active : styles.menu}
                            onClick={() => setMenu("dashboard")}>
                            <RiDashboardLine />
                        </Link>
                    </div>
                    <div className={styles.text}>
                        <Link
                            to="/add"
                            className={menu === "add"? styles.menu_active: styles.menu}
                            onClick={() => setMenu("add")}>
                            + Add Event
                        </Link>
                        <Link
                            to="/dashboard"
                            className={menu === "dashboard" ? styles.menu_active : styles.menu}
                            onClick={() => setMenu("dashboard")}>
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(Navbar);