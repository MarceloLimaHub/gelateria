import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className='limitaSecao'>
                <Image src={Logo} alt='Logo' className='imgLogo'/>
                <nav className={styles.navMenu}>
                    <Link href='/' className={styles.link}>Home</Link>
                    <Link href='/sabores' className={styles.link}>Sabores</Link>
                    <Link href='/sobre' className={styles.link}>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}
