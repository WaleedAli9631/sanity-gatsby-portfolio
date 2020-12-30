import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import error from "../images/404-error.svg";






class Default404 extends React.Component  {

    render(){

      return(
        <div className = {this.props.className}>         
            <img className = "icon" src = {error} alt = "Error icon"/>
            <h1 className = "word1">Page not found. </h1>
            <AniLink
              className = "word1"
              style={{ textDecoration: "none" }}
              fade
              to={`/`}
              duration={0.2}
           >
            -{">"} Go to home.
          </AniLink>
        </div>
      )
      
    }
}

    const Default404Styled = styled(Default404)`
   
    .word1{
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
    flex-direction: column;
    margin: 20px;
    align-content: flex-end;
    @media only screen and (max-width: 600px) {
      height: 250px;
  }
   `;
   
  export default Default404Styled;