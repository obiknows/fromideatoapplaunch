import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
// import WhatIsThisCourse from '@sections/WhatIsThisCourse';
import WhatIsThisCourse2 from '@sections/WhatIsThisCourse2';
import WhyAnApp from '@sections/WhyAnApp';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    {/* <WhatIsThisCourse /> */}
    <WhatIsThisCourse2 />
    <WhyAnApp />
    <About />
    <Team />
    <Brands />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
