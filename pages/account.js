import { useSession, signOut } from 'next-auth/react';
import React from 'react';


const Account = () => {
    const { data: session } = useSession()

    if (session) {
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