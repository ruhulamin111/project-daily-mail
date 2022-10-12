import React from 'react';
import styles from '../styles/Login.module.css'
import logo from '../assets/Asset.png'
// import { useSession, signIn, signOut } from 'next-auth/react';

// const Login = () => {
//     const { data: session } = useSession()
//     return (
//         <div className={styles.login}>
//             <div className={styles.login_container}>
//                 <img src={logo} alt="" />
//             </div>
//         </div>
//     );
// };

// export default Login;

export default function Login() {
    const { data: session } = useSession()
    return (
        <div className={styles.login}>
            <div className={styles.login_container}>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

