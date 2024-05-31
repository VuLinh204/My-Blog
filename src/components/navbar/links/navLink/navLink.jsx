import { useState } from 'react';
import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
    const [showEffect, setShowEffect] = useState(false);
    const pathName = usePathname();

    const handleClick = (e) => {
        e.preventDefault();
        setShowEffect(true);
        setTimeout(() => {
            setShowEffect(false);
        }, 1000);
    };

    return (
        <div className={styles.linkContainer} onClick={handleClick}>
            <Link href={item.path} className={`${styles.container} ${pathName === item.path ? styles.active : ''}`}>
                {item.title}
            </Link>
            {showEffect && (
                <>
                    <div className={styles.overlayEffect}>
                        <div className={styles.overlayContent}>{item.title}</div>
                    </div>
                    <div className={styles.overlayEnd}></div>
                </>
            )}
        </div>
    );
};

export default NavLink;
