import { useSession, signOut, getSession } from 'next-auth/react';
import React from 'react';


const Account = () => {
    const { data: session, status } = useSession()

    if (status === 'authenticated') {
        return (
            <div>
                <p>Welcome {session.user.name}</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>You are not not signed in </h1>
            </div>
        );
    }

};

export default Account;

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    return {
        props: { session },
    }
}