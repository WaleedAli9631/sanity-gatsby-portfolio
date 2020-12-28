import React from "react";
import PortableText from "@sanity/block-content-to-react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import posed from "react-pose";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";
import NextProjectHeading from "../components/next-project-heading";
import styled, { css } from "styled-components";
import "../style/project.css";

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

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
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
  console.log(project);
  const nextProjectUrl = `/projects/${project.nextSlug}`;
  const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: () => {
      if (document) {
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
        <ProjectTextContent>
        <FadingContent pose={transitionStatus}>
          <ProjectHeader project={project} />
          <ProjectContent photos={project.imagesGallery} />
          <PortableText blocks={project._rawBody} serializers={serializers} />
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
        </ProjectTextContent>
      </div>
    </Layout>
  );
};

const Project = ({ pageContext: projectShell, data }) => {
  // console.log(data);
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