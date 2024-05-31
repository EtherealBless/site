// navbar
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import RemarksContext, { useRemarksContext } from '../contexts/remarksContext';
import styles from '../styles/navbar.styles.module.css';

export default function Navbar() {
    const remarks = useRemarksContext();
    const path = usePathname();
    return (
        <div className='flex flex-row justify-center'>
            <Link
                className={`${styles.navbar} ${
                    path === '/' ? 'border-white' : 'border-transparent'
                }`}
                href='/'
            >
                Home
            </Link>
            <Link
                className={`${styles.navbar} ${
                    path === '/blog' ? 'border-white' : 'border-transparent'
                }`}
                href='/blog'
            >
                Blog    
            </Link>
            <Link
                className={`${styles.navbar} ${
                    path === '/about' ? 'border-white' : 'border-transparent'
                }`}
                href='/about'
            >
                About    
            </Link>
            <Link
                className={`${styles.navbar} ${
                    path === '/contact' ? 'border-white' : 'border-transparent'
                }`}
                href='/contact'
            >
                Contact
            </Link>
        </div>
    );
}