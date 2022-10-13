import { getProviders } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'

import SendMail from '../components/SendMail'

import Login from '../components/login'

import Sidebar from '../components/Sidebar'
import Emails from './emails/emailList'
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../features/mailSlice'

<<<<<<< HEAD
export default function Home({ providers }) {
  console.log(providers);
=======
export default function Home() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
>>>>>>> aa7148c2364b81e610f15f25302b285101fd4e67
  return (
    <div>
      <Head>
        <title>Daily Mail </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Header />
          {/* <Login /> */}
        </header>
        <section className='app-body'>
          <Sidebar />
          <Emails />
        </section>

        {sendMessageIsOpen && <SendMail />}

      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}