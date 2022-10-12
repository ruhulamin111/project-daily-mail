import React from 'react';
import styles from '../styles/Login.module.css'
import logo from '../assets/Asset.png'

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login_container}>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Login;