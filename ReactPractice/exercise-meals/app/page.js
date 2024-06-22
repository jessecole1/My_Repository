import styles from "./page.module.css";

import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to the meals app!</h1>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share your meal</Link>
      <Link href="/community">Meal community</Link>
    </main>
  );
}
