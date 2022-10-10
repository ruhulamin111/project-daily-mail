import styles from '../styles/sidebar.module.css'

export default function SidebarOption({ Icon, title, number, selected }) {
    return (
        <div className={`${styles.sidebarOption} ${selected && styles.sidebarOption__active}`}>
            <Icon className={styles.sidebarOption__icon} />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )

}