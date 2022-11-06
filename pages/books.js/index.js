import React from 'react'
import BookList from '../../utils/components/BookList';
import { AllBooks } from '../../frontend/utils';

const Books = ({ books }) => {
    console.log(books)
    return (
        <div>
            <BookList data={books} />
        </div>
    )
}

export default Books



export const getStaticProps = async () => {
    const books = await AllBooks()

    return {
        props: {
            books
        }
    };
};