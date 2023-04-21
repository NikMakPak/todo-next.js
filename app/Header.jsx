import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'

const Header = ({ title, link }) => {
  return (
    <header className={styles.header}>
      <p>I am header</p>
      <Link href={link || '/'}>{title || 'Home'}</Link>
    </header>
  )
}

export default Header
