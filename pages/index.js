import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Gary Tou</title>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Hello, my name is <a href="https://garytou.com">Gary Tou</a> 🙃!
				</h1>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/garyhtou/"
					target="_blank"
					rel="noopener noreferrer"
				>
					@garyhtou
				</a>
				<span className={styles.footerSep}> / </span>
				<a
					href="https://garytou.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					garytou.com
				</a>
			</footer>
		</div>
	);
}
