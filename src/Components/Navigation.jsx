import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className={styles.container}>
            <ul className={styles['menu-items_container']}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>Sorting
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" className={({ isActive }) => isActive ? styles.active : undefined}>Search</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;