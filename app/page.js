import Image from 'next/image'
import styles from './page.module.css'
import * as api from '@/api';
import { Container } from '@mui/material';
import Banner from '@/components/Banner';
import BooksRow from '@/components/BooksRow';

export default async function Home() {

  return (
    <main className={styles.main}>
      <Container maxWidth='lg'>
        <Banner />
        <BooksRow title={'Amor'} subject={'love'} />
        <BooksRow title={'Terror'} subject={'horror'} />
        <BooksRow title={'Religião'} subject={'religion'} />
      </Container>
    </main>
  )
}
