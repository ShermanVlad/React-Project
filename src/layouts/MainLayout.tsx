import {Outlet} from "react-router";
import Header from "../components/Header/Header";
import React from "react";
import styles from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div  className={styles.mainLayDiv}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;