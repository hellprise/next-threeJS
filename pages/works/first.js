import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title='first'>
      <Container>
        <Title>
          first <Badge>2022</Badge>
        </Title>
        <P>
          lorerm sadijasfm;asmd;asdlm;skfnak;nfkasnfkansf;kandkms;dkaojdfijfianflasfjlnasdlfjlaksnf
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href='https://www.instagram.com/idkmaksim/'>
              https://www.instagram.com/idkmaksim/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>platform</Meta>
            <span>Windows/Linux/MacOS/IOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
        </List>

        <WorkImage src='/images/works/first.jpg' alt='work' />
      </Container>
    </Layout>
  )
}

export default Work