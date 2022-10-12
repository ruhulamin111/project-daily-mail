import '../styles/globals.css'
import store from '../store'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps, session }) {
  return (<>
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  </>)
}

export default MyApp
