import Image from 'next/image'
import styles from './page.module.css'
import * as api from '@/api';
import { Container } from '@mui/material';

export default async function Home() {

  return (
    <main className={styles.main}>
      <Container maxWidth='lg'>
        <h1>Busque um livro</h1>
      </Container>
    </main>
  )
}
