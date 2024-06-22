import React from 'react';
import styles from "./UserInfo.module.css";

const UserInfo = () => {
    return (
        <div className={styles.UserInfoDov}>
            <img src='/user-100.png' alt="user-logo" className={styles.userLogo}/>
            <h5><b>Vlad</b></h5>
        </div>
    );
};

export default UserInfo;