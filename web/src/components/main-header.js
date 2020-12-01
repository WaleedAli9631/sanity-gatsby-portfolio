import React from "react";
import { Box, Flex,Image } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from "../images/logo.svg";


const HeaderText = styled.div`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: normal;
  &:hover{
    color: red;
  }

  padding-right: 15px;
  padding-left: 15px;

  margin: 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;

const LogoStyled = styled(Image)`
  display: none;
  @media (max-width: 700px)
  {
      display: block;
  }
`

class MainHeader extends React.Component {
render(){
  return <Flex className={this.props.className}> 
 
  <Box mx='auto' />
  <AniLink    
      style={{ textDecoration: "none", color: "#838383" }}
      fade
      to={`/contact`}
      duration={0.2}
      activeStyle={{ color: "black" }}
  >
    <HeaderText>Contact</HeaderText>
  </AniLink>
  <AniLink       
      style={{ textDecoration: "none", color: "#838383" }}
      fade
      to={`/about`}
      duration={0.2}
      activeStyle={{ color: "black" }}
  >
    <HeaderText p={2}>About</HeaderText>
  </AniLink>
  <AniLink       
      style={{ textDecoration: "none", color: "#838383" }}
      fade
      to={`/`}
      duration={0.2}
      activeStyle={{ color: "black" }}
  >
    <HeaderText p={2}>Home</HeaderText>
  </AniLink>

  <LogoStyled src={Logo} alt="Gatsbygram Logo" height={32} />
</Flex>
  }
}

const MainHeaderStyled = styled(MainHeader)`
 flex-direction: row-reverse;
 justify-content: space-around;
 height: 50px;
 align-items: center;
`

export default  MainHeaderStyled;
