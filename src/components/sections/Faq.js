import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Who is this course for?',
    content: () => (
      <>
        This course is for the Business Owner, Aspiring App Developer, Code Novice,
        Future Startup Founder, and any one with an app idea who wants to learn how to
        validate that their idea is useful, valueable, and get to app launch by 
      </>
    ),
  },
  {
    title: 'What will I learn from this course?',
    content: () => (
      <>
        Gatsby’s rich data plugin ecosystem lets you build sites with the data
        you want — from one or many sources: Pull data from headless CMSs, SaaS
        services, APIs, databases, your file system, and more directly into your
        pages using GraphQL.
      </>
    ),
  },
  {
    title: 'Where will the course take place?',
    content: () => (
      <>
        Gatsby.js is Internet Scale. Forget complicated deploys with databases
        and servers and their expensive, time-consuming setup costs,
        maintenance, and scaling fears. Gatsby.js builds your site as “static”
        files which can be deployed easily on dozens of services.
      </>
    ),
  },
  {
    title: 'When does the course start / take place?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
      </>
    ),
  },
  {
    title: 'How can I get this course?',
    content: () => (
      <>
        Gatsby.js is a static PWA (Progressive Web App) generator. You get code
        and data splitting out-of-the-box. Gatsby loads only the critical HTML,
        CSS, data, and JavaScript so your site loads as fast as possible. Once
        loaded, Gatsby prefetches resources for other pages so clicking around
        the site feels incredibly fast.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
      <h4 style={{ textAlign: 'center', marginBottom: 40 }}>{"We get it, you've got questions. We've got answers"}</h4>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
