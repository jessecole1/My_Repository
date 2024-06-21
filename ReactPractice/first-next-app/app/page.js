
import styles from "./page.module.css";

import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
