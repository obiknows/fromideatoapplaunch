import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@components/global';

// import Img from 'gatsby-image';
// import ExternalLink from '@common/ExternalLink';

// import GithubIcon from '@static/icons/github.svg';
// import InstagramIcon from '@static/icons/instagram.svg';
// import TwitterIcon from '@static/icons/twitter.svg';

var d = new Date();
const currentYear = d.getFullYear();

// const SOCIAL = [
//   {
//     icon: GithubIcon,
//     link: 'https://github.com/ajayns/gatsby-absurd',
//   },
//   {
//     icon: InstagramIcon,
//     link: 'https://instagram.com/ajay_ns',
//   },
//   {
//     icon: TwitterIcon,
//     link: 'https://twitter.com/ajayns08',
//   },
// ];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        fital_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fital_full" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>From Idea to App Launch</h2>
              <span>
                &copy; Copyright {currentYear}, IMEWE Inc.
                {/* Illustrations by
                {` `}
                <ExternalLink href="https://twitter.com/diana_valeanu">
                  @diana_valeanu
                </ExternalLink> */}
              </span>
            </Copyright>
            {/* <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons> */}
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

// const SocialIcons = styled.div`
//   display: flex;

//   img {
//     margin: 0 8px;
//     width: 24px;
//     height: 24px;
//   }

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     margin-top: 40px;
//   }
// `;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.xsmall};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// const Art = styled.figure`
//   display: flex;
//   justify-content: center;
//   margin: 0;
//   margin-top: 48px;
// `;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
