import React from 'react';
import styles from '../styles/Login.module.css'
import logo from '../assets/Asset.png'
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';


const Login = () => {
    const { data: session } = useSession()
    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <Image src='/../public/assets/Asset.png' alt='image' width='125' height='50' />

            </div>
        </div>
    )
}

export default Login;