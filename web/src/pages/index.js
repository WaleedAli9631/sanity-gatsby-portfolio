import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Box } from "rebass";
import styled from "styled-components";
import { Link } from "gatsby"

import { Description } from "../components/project-header";
import { ProjectBoxTitle } from "../components/project-header";

import Layout from "../components/layout";
import LandHeader from "../components/land-header"
import LandEnd from "../components/land-end"
import { motion } from "framer-motion"

import "../style/reset.css";


const Grid = styled(Box)`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.space[3]}px;
`;

const ProjectGridItem = ({ project }) => {
  return (
    <Link 
      style={{ textDecoration: "none" }}
      to={`/projects/${project.slug.current}`}
      duration={0.2}
    >
        <Img fluid={project.featuredPhoto.asset.fluid} alt = "Project's featured photo"/>
        <Box className = "ProjectDescription" mt={3}>
          <ProjectBoxTitle>{project.title}</ProjectBoxTitle>
          <Description>{project.description}</Description>
        </Box>
    </Link>
  );
};

const Home = ({ data }) => {
  const projects = data.projects.edges;
  return (

    <Layout>
      
      <div className = "Wrapper">
        <div className = "Content">
        <LandHeader />
        <Grid >
          {projects.map(project => (
            <motion.div key={project.node.title} whileHover={{ scale: 1.03 }} className = "ProjectBox">
               <ProjectGridItem project={project.node} />
            </motion.div>
          ))}
                  
      </Grid>
      <LandEnd/>
        </div>
      </div>
      
    </Layout>
  );
};

export const query = graphql`
  {
    projects: allSanityProject {
      edges {
        node {
          title
          slug {
            current
          }
          description
          featuredPhoto {
            asset {
              fluid(maxHeight: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;