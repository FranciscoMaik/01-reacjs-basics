import styles from "./Header.module.css"

export function Header(params) {
    return (
        <header className={styles.header}>
            <strong>Ignite Feed</strong>
        </header>
    );
}