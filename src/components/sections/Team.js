import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import obinnaPhoto from '@images/team/obinna.jpg';


// const TEAM = [
//   {
//     name: 'Obinna Nnodim',
//     image: 'josh.jpg',
//     role: 'Course Instructor',
//   },
//   // {
//   //   name: 'Lisa Haydon',
//   //   image: 'lisa.jpg',
//   //   role: 'Art Director',
//   // },
//   // {
//   //   name: 'Ashlyn Harris',
//   //   image: 'ashlyn.jpg',
//   //   role: 'Frontend Engineer',
//   // },
//   // {
//   //   name: 'Todd Joseph',
//   //   image: 'todd.jpg',
//   //   role: 'Designer',
//   // },
//   // {
//   //   name: 'Martin White',
//   //   image: 'martin.jpg',
//   //   role: 'Backend Engineer',
//   // },
//   // {
//   //   name: 'Rose Leslie',
//   //   image: 'rose.jpg',
//   //   role: 'Marketing',
//   // },
// ];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Meet The Instructor</h1>
          <TeamGrid>
            <div id="team-photo">
              <img src={obinnaPhoto} alt="link" />
              {/* <Img fluid={img.childImageSharp.fluid} alt={name} /> */}
              <Title>{'Obinna Nnodim'}</Title>
              <Subtitle>{'Course Instructor'}</Subtitle>
            </div>
            <div>
              <ul>
                <li>
                  <h3>All around boss and pro money-getter</h3>
                </li>
                <li>
                  <h3>"Amazing at backshots and everything inbetween" - Aïssatou</h3>
                </li>
                <li>
                  <h3>"Amazing at backshots and everything inbetween" - Aïssatou</h3>
                </li>
                <li>
                  <h3>"Amazing at backshots and everything inbetween" - Aïssatou</h3>
                </li>
                <li>
                  <h3>"Amazing at backshots and everything inbetween" - Aïssatou</h3>
                </li>
              </ul>
            </div>
          </TeamGrid>
          {/* <h1>The Team</h1> */}
          {/* <TeamGrid>
            {TEAM.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
            <Art>
              <Img fluid={data.art_team.childImageSharp.fluid} />
            </Art>
            <ArtMobile>
              <Img fluid={data.art_team.childImageSharp.fluid} />
            </ArtMobile>
          </TeamGrid> */}
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fill, 200px);
  grid-template-columns: 1fr 100%;
  // grid-template-columns: auto 1fr;
  // grid-template-columns: 1fr auto;
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  img {
    height: 70vh;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
    grid-template-columns: 1fr 100%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: 1fr auto;
    // grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-template-columns: 1fr;
    grid-gap: 24px;

    img {
      height: 50%;
      width: 100%;
    }

  }
`;

// const Art = styled.figure`
//   width: 800px;
//   margin: -80px 0;
//   position: absolute;
//   top: 0;
//   left: 70%;

//   @media (max-width: ${props => props.theme.screen.lg}) {
//     top: 20%;
//   }

//   @media (max-width: ${props => props.theme.screen.md}) {
//     display: none;
//   }
// `;

// const ArtMobile = styled.figure`
//   width: 100%;
//   margin: 0;
//   display: none;
//   margin-top: 64px;
//   margin-bottom: -60%;

//   @media (max-width: ${props => props.theme.screen.md}) {
//     display: block;
//   }
// `;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
