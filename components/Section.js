import styles from '../styles/Section.module.css'

export default function Section({ Icon, title, color, selected }) {
    return (
        <div className={`${styles.section} ${selected && 'section-selected'}`} style={{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`
        }} >
            <Icon />
            <h4>{title}</h4>

        </div >
    )
}
