import styles from './Navbar.module.css'

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useApp } from '../../../../context/AppContext';
import Container from "../../../common/components/Container/Container";

function Navbar(){
    const [navState, setNavState] = useState(false);
    const {countPurchase} = useApp();

    return (
        <nav className = {styles.navbar}>
            <Container className = {`${styles.navbarContainer} ${navState ? styles.showMobileNav : ""}`}>
            <NavLink to = "/" className={styles.logotype}> 
                Silent.ca
            </NavLink>
                
                <ul className={styles.navbarList}>
                    <li>
                        <NavLink to = "/" className={styles.navbarItem} onClick = {() => setNavState(false)}>  
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/categories" className={styles.navbarItem} onClick = {() => setNavState(false)}>  
                            Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/cart" className={styles.cartButton} onClick = {() => setNavState(false)}>  
                         <ion-icon name="cart"></ion-icon> Cart

                         {countPurchase > 0 && <p className = {styles.cartSpan}>{countPurchase}</p>}
                        </NavLink>
                    </li>
                </ul>

                <div className = {styles.btnContainer}>
                    <button className = {styles.btnShowNav} onClick = {() => setNavState(true)} aria-label="Navbar button handle menu">
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                    <button className = {styles.btnCloseNav} onClick = {() => setNavState(false)} aria-label="Navbar button handle menu">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
            </Container>
        </nav>
    )
}


export default Navbar;