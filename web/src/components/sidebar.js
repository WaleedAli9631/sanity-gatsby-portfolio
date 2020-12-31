import React from "react";
import styled from "styled-components";
import GitHubLogo from "../images/icons8-github.svg";
import LinkedinLogo from "../images/icons8-linkedin-circled.svg";




class SideBar extends React.Component {
render(){
  return <div className={this.props.className}>
      <div className = "iconContainer">
      <a href={`https://github.com/WaleedAli9631`} target="_blank">   
         <img className = "icon" src={GitHubLogo} alt="GitHubLogo"/>
      </a>
      <a   
      href={`https://www.linkedin.com/in/waleed-ali-6023151b3`} target="_blank">
        <img className = "icon" src={LinkedinLogo} alt="LinkedinLogo" /> 
      </a>    
      </div>    
  </div>
  }
}

const SideBarStyled = styled(SideBar)`
  width: 50px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  left: 0px;
  bottom: 10px;
  background-color: white;  
  @media (max-width: 700px)
  {
      display: none;
  } 
  .icon{
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  display: block;
  width: 30px;
  }
`

export default  SideBarStyled;