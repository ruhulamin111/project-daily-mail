import styles from '../styles/Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from 'next/image';
import { Avatar, IconButton } from '@mui/material';
import logo from '../public/assets/Asset.png'
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';


function Header() {

  const { data: session, status } = useSession()

  return (
    <div className={styles.header}>

      <div className={styles.header_left}>
        <IconButton>
          <MenuIcon />
          {/* image logo */}
        </IconButton>
        <Image src={logo} alt=''></Image>
        {/* <h2 className={styles.logo2}>Daily Mail</h2> */}
      </div>

      <div className={styles.header_middle}>
        <SearchIcon />
        <input placeholder='Search your mail' type="text" />
        <ArrowDropDownIcon />
      </div>

      <div className={styles.header_right}>

        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={session?.user?.image} />
        </IconButton>
        <IconButton>
          <LogoutIcon onClick={() => signOut()} />
        </IconButton>
      </div>
    </div>
  )
}

export default Header