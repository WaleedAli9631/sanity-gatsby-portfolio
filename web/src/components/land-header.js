import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import icon from "../images/icon.svg";


export const HeadingTitle1 = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[5]}px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
  @media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
  
`;
export const HeadingTitle2 = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[5]}px;
  margin-right: auto;
  margin-left: auto;
 
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes[2]}px;
  }
  @media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
  
`;

export const HeadingTitle3 = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 600;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: auto;
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes[2]}px;
  }
  @media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
  
`;

export const Description = styled(Text)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: 1.35em;
  margin: 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;




class LandHeader extends React.Component  {

    render(){
      // console.log(this.props.pictures[0].node);
      // {/* <Img fluid={this.props.pictures[0].node.iconPhoto.asset.fluid} /> */}
      // console.log("this.props.iconPhoto");

      return(
        <div className = {this.props.className}>         
            <img className = "icon" src = {icon}/>
            <HeadingTitle1>Hi, I'm Waleed. </HeadingTitle1>
            <HeadingTitle2>I'm a computer science student.</HeadingTitle2>
            <HeadingTitle3>These are my projects.</HeadingTitle3>
            {/* <img className = "mountain" src = {mountain}/> */}
        </div>
      )
      
    }
}

    const LandHeaderStyled = styled(LandHeader)`
   
    .mountain{
      background-color: red;
      margin: auto;
    }
    .icon{
      padding: 15px;
      line-height: 100%;

      -moz-border-radius: 50%;
      border-radius: 50%;

      background-color: white;
      color: white;
      font-size: 2em;
      margin-right: auto;
      margin-left: auto;
      margin-top: auto;
      margin-bottom: 15px;
      @media only screen and (max-width: 600px) {
      height: 100px;
  }
      }
    background-color: white;
    border-radius: 10px;
    display: flex;
    height: 400px;
    flex-direction: column;
    margin: 20px;
    align-content: flex-end;
    @media only screen and (max-width: 600px) {
      height: 250px;
  }
   `;
   
  export default LandHeaderStyled;
  //  export default () => (
  //   <StaticQuery
  //   query={graphql`
  //     {
  //       pictures: allSanityLandingImages {
  //         edges {
  //           node {
  //             iconPhoto {
  //               asset {
  //                 fluid {
  //                   ...GatsbySanityImageFluid
  //                 }
  //               }
  //             }
  //             featuredPhoto {
  //               asset {
  //                 fluid {
  //                   ...GatsbySanityImageFluid
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={(data) => (
  //       <LandHeaderStyled pictures={data.pictures.edges} />
  //     )}
  //   />
  //  );