import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import AspectRatioBox from "./aspect-ratio-box";

export const HeadingTitle1 = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[5]}px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
  @media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
  
`;
export const HeadingTitle2 = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[5]}px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: auto;
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes[2]}px;
  }
  @media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
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




class LandMiddle extends React.Component  {

    render(){


      return(
        <div className = {this.props.className}>         
            <HeadingTitle1>These are my projects.</HeadingTitle1>
        </div>
      )
      
    }
}

    const LandMiddleStyled = styled(LandMiddle)`
   
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
    background-color: grey;
    border-radius: 10px;
    display: flex;
    height: 800px;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
    align-content: flex-end;
    @media only screen and (max-width: 600px) {
      height: 250px;
  }
   `;
   
  export default LandMiddleStyled;