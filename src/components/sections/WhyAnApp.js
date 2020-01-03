import React from 'react';

import { Section, Container } from '@components/global';

// import ExternalLink from '@common/ExternalLink';


const WhyAnApp = () => (
  <Section id="why-an-app">
    <Container>
      <h1 style={{ textAlign: 'center', marginBottom: 40 }}>Why Do I Need An App In The First Place?</h1>
      {/* Why You Need An App Video */}
      <div style={{ textAlign: 'center' }}>
        <iframe title="Why You Need An App Video" width="560" height="315" src="https://www.youtube.com/embed/LJZTa0UP-tU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      {/* YouTube/Vimeo Video Embed */}
    </Container>
  </Section>
);

export default WhyAnApp;
