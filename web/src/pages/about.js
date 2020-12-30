import React from "react";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter';


const AboutContent = styled.div`
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
      return <AboutContent>{props.children}</AboutContent>
   
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



class About1 extends React.Component  {

    render(){

      return(
        <div className = {this.props.className}>
            <Layout>
                <div className = "Content">
                <PortableText blocks={this.props.body} serializers={serializers} />
                </div> 
            </Layout>     
        </div>
      )
      
    }
}

    const AboutStyled = styled(About1)`
   
    .Content{
        margin: auto;
        width: 1000px;
        @media only screen and (max-width: 600px) {
            width: auto;
  }
    }
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    @media only screen and (max-width: 600px) {
  }
   `;
   

   const About = () => (
    <StaticQuery
      query={graphql`
        {
         about: sanityAbout {
            _rawBody
          }
        }
      `}
    render={(data) => (
        <AboutStyled body={data.about._rawBody} />
      )}
    />
   );

   export default About