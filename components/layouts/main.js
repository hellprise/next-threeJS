import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'

import Navbar from '../navbar'
import NoSsr from '../no-ssr'

import { StoneModel } from '../stone-model'

const Main = ({children, router}) => {
  console.log(router)
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Maksim Leokha - Homepage</title>
      </Head>

      <Navbar path={router?.asPath} />

      <Container maxW='container.md' pt={14}>
        <NoSsr>
          <StoneModel />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main