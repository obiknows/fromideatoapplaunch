import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import WhatIsThisCourse2 from '@sections/WhatIsThisCourse2';
import WhyAnApp from '@sections/WhyAnApp';
import About from '@sections/About';
// import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header /> {/* <-- Add Buy CTA Button */}
    <WhatIsThisCourse2 />
    <WhyAnApp /> {/* <-- Add Buy CTA Button */}
    <About /> {/* <-- Add Buy CTA Button */}
    <Team />
    {/* Who Is This For */}
    {/* <Brands /> */}
    {/* Buy CTA Section (Pay in Full, Pay in Section, Pay for */}
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
