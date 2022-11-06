import { Flex } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <Flex justify={"space-around"} w="30%">
                <Link href="/">Home</Link>
                <Link href="/books">All Books</Link>
                {/* <Link href="/books/add">Add Books</Link> */}
            </Flex>
        </div>
    )
}

export default Navbar
