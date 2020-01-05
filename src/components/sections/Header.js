import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import { Container } from '@components/global';
// import ExternalLink from '@common/ExternalLink';
import InternalLink from '@common/InternalLink';
import FitalRocketGroup from '@images/art/fital-rocket-group.svg';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container style={{paddingBottom: 24}}>
          <Grid>
            <Art>
              <img src={FitalRocketGroup} alt="link" />
            </Art>
            <Text>
              <h1>
                You've Got A
                <br />
                Million Dollar App
                <br />
                Inside Of You
              </h1>
              <br />
              <p>
                <StyledInternalLink href="/course" style={{marginRight: 10}} >
                  Enroll Now &nbsp;&#x2794;
                </StyledInternalLink>
                <StyledInternalLink href="#about" secondary>
                  Learn More
                </StyledInternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }

  h1 {
    ${props => props.theme.font_size.xxlarge};
  }
`;

const StyledInternalLink = styled(InternalLink)`
  // color: ${props => props.color};
  color: ${props => props.theme.color.white.regular};
  background-color: ${props => props.secondary ? props.theme.color.red.dark: props.theme.color.red.regular};
  border-radius: 5px;
  padding: 10px;
  // color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
