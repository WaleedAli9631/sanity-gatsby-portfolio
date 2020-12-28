import React from "react";
import styled from "styled-components";
import GitHubLogo from "../images/icons8-github.svg";
import LinkedinLogo from "../images/icons8-linkedin-circled.svg";



class Footer extends React.Component {
render(){
  return <div className={this.props.className}>
      <div className = "iconContainer">
      <a href={`https://github.com/WaleedAli9631`}>   
         <img className = "icon" src={GitHubLogo} alt="GitHubLogo"/>
      </a>
      <a   
      href={`https://www.linkedin.com/in/waleed-ali-6023151b3`}>
        <img className = "icon" src={LinkedinLogo} alt="LinkedinLogo" /> 
      </a>    
      </div>
  </div>
  }
}

const FooterStyled = styled(Footer)`

  margin-top: 10px;
  margin-top: 10px;
  background-color: white;
  color: white;
  display: flex;
  .icon{
    padding: 6px 8px 6px 16px;
    height: 20px;
  }
  .iconContainer{
      margin: auto;
  }
  @media (min-width: 700px)
  {
      display: none;
  } 
`

export default  FooterStyled;