import styles from '../styles/sidebar.module.css'
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import SidebarOption from './SidebarOption';
//======== icons ======
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';


export default function Sidebar() {
    const dispatch = useDispatch()

    return (
        <div className={styles.sidebar}>
            <Button
                startIcon={<Add />}
                className={styles.sidebar__composeBtn}
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number="60" selected={true} />

            <SidebarOption Icon={StarIcon} title="Starred" number="60" />

            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="60" />

            <SidebarOption Icon={LabelImportantIcon} title="Important" number="60" />

            <SidebarOption Icon={NearMeIcon} title="Sent" number="60" />

            <SidebarOption Icon={NoteIcon} title="Drafts" number="60" />

            <SidebarOption Icon={ExpandMoreIcon} title="More" number="60" />
        </div>
    )
}
