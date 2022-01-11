import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
	useEffect(() => {
		const getData = async () => {
			// const res = await fetch('https://api-coderhouse.vercel.app/api/products')
			// const data = await res.json()
			// console.log(data)
		}
		getData()
	})
	return (
		<div className={styles.container}>
			<Head>
				<title>Coderhouse API</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://www.coderhouse.com/'>CoderHouse</a> API
				</h1>

				<p className={styles.description}>
					Puedes hacer GET a <code className={styles.code}>api/products</code>
				</p>
				<p className={styles.description}>
					Desarrollado por{' '}
					<a href='https://linkedin.com/in/franncode'>franncode</a>
				</p>
			</main>
		</div>
	)
}
