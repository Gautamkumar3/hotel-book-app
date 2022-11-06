import { Badge, Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link"

const BookList = ({ data }) => {
     
    return (
        <Flex gap={10}>
            {data?.map((book) => <Box border={"2px solid black"} p={10} key={book._id}>
                <Text>{book.title}</Text>
                <Text>{book.author}</Text>
                <Text>{book.price}</Text>
                <Image w={"50px"} src={book.imageUrl} />
                {book.featured ? <Badge colorScheme={"green"}>Featured</Badge> : null}
                <Link href={`/books/${book._id}`}>
                    <Button>Edit</Button>
                </Link>

            </Box>)
            }

        </Flex>
    )
}

export default BookList
