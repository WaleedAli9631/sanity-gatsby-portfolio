import React from "react";
import styled, { css } from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";



const client = require('@sanity/client')({
    projectId: 'qbktwchk',
    dataset: 'production',
    useCdn: true
  })
  
  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }


class About1 extends React.Component  {

    render(){

      return(
        <div className = {this.props.className}>
            <Layout>
                <div className = "Content">
                <PortableText className = "AboutBlock" blocks={this.props.body} serializers={serializers} />
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