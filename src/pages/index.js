import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import Layout from '../components/layout';
import About from '../components/About';
import Avatar from '../components/Avatar';
import Contact from '../components/Contact';
import Separator from '../components/Separator';
import Projects from '../components/Projects';
import Meta from '../components/Meta';

const Section = styled.section`
  ${space}
`;

const IndexPage = () => (
  <Layout>
    <Meta title="Daniel Fain" />
    <Section>
      <Avatar />
    </Section>
    <Section pt={[3, 4, null, null, 5]}>
      <About />
    </Section>
    <Section>
      <Contact />
    </Section>
    <Separator my={[4, 5]} width={['50%', '25%']} height={24} />
    <Projects />
    <Separator my={[4, 5]} width={['50%', '25%']} height={24} />
  </Layout>
);

export default IndexPage;
