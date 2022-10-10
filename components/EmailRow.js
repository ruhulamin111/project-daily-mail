import { LabelImportantOutlined, StarBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from '../styles/EmailRow.module.css'
import { Checkbox } from "@mui/material";

export default function EmailRow({ id, title, subject, description, time }) {
    return (
        <div className={styles.emailRow} >
            <div className={styles.emailRow_options}>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 className={styles.emailRow_title}>
                {title}
            </h3>
            <div className={styles.emailRow_message}>
                <h4>{subject}{' - '}
                    <span className={styles.emailRow_description}>{description}</span>
                </h4>
            </div>
            <div className={styles.emailRow_time}>
                {time}
            </div>

        </div >
    )
};