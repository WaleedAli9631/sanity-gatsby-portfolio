import React from "react";
import PortableText from "@sanity/block-content-to-react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import posed from "react-pose";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";
import NextProjectHeading from "../components/next-project-heading";
import styled from "styled-components";
import "../style/project.css";
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter';



const ProjectTextContent = styled.div`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.35em;
  margin: 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

const StyledH1 = styled.h1`
color: ${props => props.theme.colors.black};
font-family: ${props => props.theme.fonts.sans};
`;
const StyledH2 = styled.h2`
color: ${props => props.theme.colors.black};
font-family: ${props => props.theme.fonts.sans};
`;

const client = require('@sanity/client')({
  projectId: 'qbktwchk',
  dataset: 'production',
  useCdn: true
})

const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}

const serializers = {
  types: {
    code: ({node = {}}) => {
      const {code,language} = node;
      if (!code)
      {
        return null;
      }
      return <SyntaxHighlighter language= {language || 'text'} showLineNumbers = 'true' wrapLongLines = 'true'>
      {code}
    </SyntaxHighlighter>
    },
    block: props => {
      if (props.node.style === "h1")
      {
        return <StyledH1>{props.children}</StyledH1>
      }
      if (props.node.style === "h2")
      {
        return <StyledH2>{props.children}</StyledH2>
      }
      return <ProjectTextContent>{props.children}</ProjectTextContent>
   
    },
    image: ({ node }) => {
      return (
        <img
          className = "pictures"
          src={urlFor(node.asset).url()
            }
          alt = "Decriptive"
        />
      );
    },

  }
}

export const query = graphql` 
query ($slug: String, $nextSlug: String){
  project: sanityProject( slug: {current: {eq: $slug}})
  {
    _rawBody
    imagesGallery {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
    title
    description
    featuredPhoto{
      asset{
        fluid{
          ...GatsbySanityImageFluid
        }
      }
    }
  },
  next: sanityProject( slug: {current: {eq: $nextSlug}})
  {
    title
    description
    featuredPhoto{
      asset{
        fluid{
          ...GatsbySanityImageFluid
        }
      }
    }
    
  }
}
    `



const TRANSITION_LENGTH = 1.5;

const FadingContent = posed.div({
  exiting: { opacity: 0 }
});

const SlidingHeader = posed.div({
  exiting: {
    y: ({ element }) => {
      const navbar = document.querySelector("header");
      const navbarDimensions = navbar.getBoundingClientRect();
      const distanceToTop =
        element.getBoundingClientRect().top - navbarDimensions.height ;
      return distanceToTop * -1;
    },
    transition: {
      ease: [0.59, 0.01, 0.28, 1],
      delay: 250,
      duration: TRANSITION_LENGTH * 1000 - 250
    }
  }
});

const FadingNextProjectHeading = posed.div({
  exiting: { opacity: 0 }
});


const ProjectInner = ({ transitionStatus, project, data }) => {
  const nextProjectUrl = `/projects/${project.nextSlug}`;
  const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: () => {
      if (document) {
        console.log("REEE");

        document.body.style.overflow = "hidden";
      }
    }
  };

  // const title = project.title;
  // const description = project.description;

  const entryTransition = {
    delay: TRANSITION_LENGTH,
    
    trigger: () => {
      if (document && window) {
        window.scrollTo(0, 0);
        document.body.style.overflow = "visible";
      }
    }
  };

  return (
    <Layout transitionStatus={transitionStatus}>
      <div className = "ProjectContainer">
        <div>
        <FadingContent pose={transitionStatus}>
          <ProjectHeader project={project} />
          <ProjectContent photos={project.imagesGallery} />
          <PortableText  
          className = "portableText"
          blocks={project._rawBody} 
          serializers={serializers}
          imageOptions={{w: 320, h: 240, fit: 'max'}} 
          projectId = 'qbktwchk'
          dataset = 'production'/>
        </FadingContent>
        <TransitionLink
          style={{
            textDecoration: "none",
            color: "inherit"
          }}
          to={nextProjectUrl}
          exit={exitTransition}
          entry={entryTransition}
        >
          
          <FadingNextProjectHeading pose={transitionStatus}>
            <NextProjectHeading />
          </FadingNextProjectHeading>
          <SlidingHeader pose={transitionStatus}>
            <ProjectHeader project={project.next} truncated={shouldTruncate} />
          </SlidingHeader>
        </TransitionLink>
        </div>
      </div>
    </Layout>
  );
};

const Project = ({ pageContext: projectShell, data }) => {
  const { project, next } = data;
  const aggregateProject = {
    ...projectShell,
    ...project,
    next
  };

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <ProjectInner
          transitionStatus={transitionStatus}
          project={aggregateProject}
        />
      )}
    </TransitionState>
  );
};



export default Project;