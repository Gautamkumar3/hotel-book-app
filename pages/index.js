
import { Heading } from '@chakra-ui/react';
import BookList from '../utils/components/BookList';
import { getFeaturedBooks } from '../frontend/utils'
import styles from '../styles/Home.module.css'

export default function Home({ books }) {

  console.log(books)

  return (
    <div>
      <Heading>Home page</Heading>
      <BookList data={books} />
    </div>
  )
}

export const getStaticProps = async () => {
  const books = await getFeaturedBooks()

  return {
    props: {
      books
    }
  };
};
