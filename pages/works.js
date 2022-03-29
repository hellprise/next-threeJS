import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";

import Section from "../components/section";
import Layout from "../components/layouts/article";

import firstWork from '../public/images/works/first.jpg'

const Works = () => {
  return (
    <Layout>
    <Container mt={2}>
      <Heading as='h3' fontSize={20} mb={4}>
        works
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id='first' title='First' thumbnail={firstWork}>
            a markdown note-taking app
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Works