import Banner from '@/components/Banner';
import BooksRow from '@/components/BooksRow';
import { Container } from '@mui/material';
import styles from './page.module.css'

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
