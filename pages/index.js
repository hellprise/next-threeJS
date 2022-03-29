import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Heading, Icon, Image, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoYoutube
} from 'react-icons/io5'

import { BioSection, BioYear } from "../components/bio"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container mt={4}>
        <Box 
          borderRadius='lg' 
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={2} 
          mb={6} 
          align='center'
        >
          hello, I&apos;m a front-end developer based in Ukraine!
        </Box>

        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Maksim Leokha
            </Heading>
            <p>developer / designer</p>
          </Box>
          <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
            <Image src='/images/profile.jpg' alt='profile' width={140} height={140} borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='140px' display='inline-block' borderRadius='full' />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            work
          </Heading>
          <Paragraph>
            Qui id proident esse fugiat cupidatat tempor esse consequat. Culpa velit amet eu ipsum et laboris cupidatat dolor pariatur quis ut Lorem duis et. Eu sint fugiat ipsum non in ut nisi irure sunt. Esse officia exercitation duis incididunt velit magna labore sunt ex mollit ad ipsum dolore amet. Tempor officia nulla incididunt occaecat aliqua. Elit consequat eu do sunt ea pariatur enim cillum labore labore minim.<br/>
            <NextLink href='/works/inkdrop' passHref>
              <Link>inkdrop</Link>
            </NextLink>
          </Paragraph>

          <Box align='center' my={4}>
            <NextLink href='/works' passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>portfolio</Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            born in Avdiivka (Авдіївка), Ukraine.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            relocated to Kharkiv (Харків), Ukraine. Started studying at the NTU &quot;KHPI&quot;.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Two-month internship at Forge Solutions.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            One month internship at Increasio and then start working at the company.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            on the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/hellprise" target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub} />}>
                  @hellprise
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.instagram.com/idkmaksim/" target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>
                  @idkmaksim
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA&t=3988s&ab_channel=devaslife" target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoYoutube} />}>
                  @devaslife
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page