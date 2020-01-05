import React from 'react';

import { Section, Container } from '@components/global';
import CourseLogo from '@static/favicon.svg';

// import ExternalLink from '@common/ExternalLink';


const WhatIsThisCourse = () => (
  <Section accent="secondary" id="what-is-this-course" style={{paddingTop: 40, paddingBottom: 60, }}>
    <Container style={{textAlign: 'center'}}>
      <h3 style={{ marginBottom: 16 }}>What This Is</h3>
      {/* What This Course Is Explainer */}
      <h4 style={{ fontSize: 20 }}>This is a self-paced online course where you will learn how to take your
      app idea and turn it into an app on the app store that makes money for you or your business.</h4>
      {/* From Idea to App Launch Logo - Branding Spot */}
      <img src={CourseLogo} height="30" alt=" " style={{}}/>
    </Container>
  </Section>
);

export default WhatIsThisCourse;
