import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from '../styles/EmailItem.module.css'

export default function Email() {
    const router = useRouter()
    return (
        <div className={styles.mail}>
            <div className={styles.mail_tools}>
                <div className={styles.mail_toolsLeft}>
                    <IconButton onClick={() => router.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className={styles.mail_toolsRight}>
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className={styles.mail_body}>
                <div className={styles.mail_bodyHeader}>
                    <h2>Subject</h2>
                    <LabelImportantIcon className={styles.mail_important} />
                    <p>Title</p>
                    <p className={styles.mail_time}>10 pm</p>
                </div>
                <div className={styles.mail_message}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatibus consectetur sunt hic, iste quisquam. Beatae rerum cupiditate temporibus totam?</p>

                </div>
            </div>
        </div>
    )
}
