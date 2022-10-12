import React from 'react';
import styles from '../styles/Login.module.css'
// import logo from '../assets/Asset.png'
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';


const Login = () => {
    const { data: session } = useSession()
    console.log(session);
    if (session) {
        return (
            <div className={styles.login}>
                <div className={styles.loginContainer}>
                    <Image src='/../public/assets/Asset.png' alt='image' width='125' height='50' />
                    <p>welcome, {session.user.name}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div><p>You are not signed in</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        )
    }
}

export default Login;