import React from "react";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"


const ContactContent = styled.div`
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
      return <ContactContent>{props.children}</ContactContent>
   
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


const Contact = props =>  {


      return(
        <div className = {props.className}>
            <Layout>
                <div className = "Content">
                <PortableText blocks={props.body} serializers={serializers} />
                <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                <p>
                  <label>Email: <input type="text" name="name" /></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
                </div> 
                
            </Layout>     
        </div>
      )
      
    
}

    const ContactStyled = styled(Contact)`
   
    .Content{
        margin: auto;
        width: 1000px;
        @media only screen and (max-width: 1000) {
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
   

   const ContactExport = () => (
    <StaticQuery
    query={graphql`
      {
        about: sanityContactPortable {
          _rawBody
        }
      }
    `}
        render={(data) => (
        <ContactStyled body={data.about._rawBody} />
      )}
    />
   );

   export default ContactExport