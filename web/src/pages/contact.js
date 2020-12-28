import React from "react";
import styled, { css } from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const ContactContent = styled(PortableText)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.35em;
  margin: 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

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


class Contact extends React.Component  {

    render(){

      return(
        <div className = {this.props.className}>
            <Layout>
                <div className = "Content">
                <ContactContent blocks={this.props.body} serializers={serializers} />
                </div> 
            </Layout>     
        </div>
      )
      
    }
}

    const ContactStyled = styled(Contact)`
   
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
   

   const ContactExport = () => (
    <StaticQuery
      query={graphql`
        {
         about: sanityContact {
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