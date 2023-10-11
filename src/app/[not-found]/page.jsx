import styles from  '../styles/NotFound.module.css'
import Link from 'next/link';
function NotFound() {
    return ( <>
    <div className={styles.error}>
        <h4 className={styles.number}>404</h4>
        <h3 className={styles.title}>Page Not Found</h3>
        <Link href={"/"} className={styles.button}>Go to Home</Link>
    </div>
        </> );
}

export default NotFound;