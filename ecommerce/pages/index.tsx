/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Login from '../components/Login'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Login/>
      <Link href='/register'><button>Registrarse</button></Link>
    </div>
  )
}
