import React from 'react';
import styles from '../styles/Login.module.css'
// import logo from '../assets/Asset.png'
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import Image from 'next/image';


const Login = () => {
    const { data: session, status } = useSession()
    console.log(session);
    if (status === 'authenticated') {
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
            <div className={styles.form}>
                <Image className={styles.img} src='/../public/assets/Asset.png' alt='image' width='125' height='50' />
                <input className={styles.input} type="email" name='email' placeholder='Email' />

                <input className={styles.input} type="password" name="Password" id="" placeholder='Password' />
                <p>You are not signed in</p>
                <button className={styles.button} onClick={() => signIn()}>Sign in</button>
                <a className={styles.a} href="">Create Account</a>
            </div>
        )
    }
}

export default Login;

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }

    return {
        props: { session },
    }
}