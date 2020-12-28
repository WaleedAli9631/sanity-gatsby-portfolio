import React from "react";
import { ThemeProvider} from "styled-components";
import styled from "styled-components";
import { Box, Image } from "rebass";
import posed from "react-pose";
import MainHeaderStyled from "./main-header";
import SideBarStyled from "./sidebar";
import Logo from "../images/logo.svg";
import "../style/reset.css";
import Footer from "./footer";


const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 46],
  colors: {
    grey: "#999",
    black: "#1a1a1a",
    red: "#e61428",
    primary: "#1a1a1a",
    seconday: "#999"
  },
 

  
};


const FadingHeader = posed.header({
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  entering: { opacity: 1 },
  entered: { opacity: 1 }
});



const MainWrapper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  padding: 0px 10px;
  @media (max-width: 700px)
  {
      margin-left: 0px;
    
  } 
`;

const LogoStyled = styled(Image)`
  position: fixed;
  @media (max-width: 700px)
  {
      display: none;
  }
`

const Layout = ({ children, transitionStatus }) => (

  <ThemeProvider theme={theme}>
    <React.Fragment>
    <LogoStyled src={Logo} alt="Logo" height={40} />
      <SideBarStyled/>
      <MainWrapper>
          <FadingHeader className = "header" pose={transitionStatus}>
          <MainHeaderStyled/>
          </FadingHeader>
        <Box as="main" px={[3, 5]}>
          {children}
        </Box>
      </MainWrapper>
      <Footer/>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;