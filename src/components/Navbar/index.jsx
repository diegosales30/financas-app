import React from 'react'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <h2>logo</h2>
      <Link to="/">
        VOLTAR
      </Link>
    </header>
  )
}
