import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import CourseLogo from '@images/logos/fital-full-vertical.svg';

import { Section, Container } from '@components/global';

const WhatIsThisCourse2 = () => (
  <StaticQuery
    query={graphql`
      query {
        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section accent="secondary" id="WhatIsThisCourse" style={{paddingTop: 40, paddingBottom: 60, }}>
        <Container>
          <Grid>
            <div style={{paddingLeft: 40}}>
              <h2>Go From Idea to App Launch</h2>
              <p>
               An online course showing you how to take your 
              idea and turn it into a profitable app on the app stores.
              </p>
            </div>
            <Art style={{textAlign: 'center'}}>
              <img src={CourseLogo} alt=" " style={{height: 250}}/>
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
  padding: 0 32px;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default WhatIsThisCourse2;
