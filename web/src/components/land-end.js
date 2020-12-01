import React from "react";
import styled, { css } from "styled-components";



class LandEnd extends React.Component  {

    render(){
      return(
        <div className = {this.props.className}>         
        </div>
      ) 
    }
}

    const LandEndStyled = styled(LandEnd)`
   
    background-color: white;
    border-radius: 10px;
    display: flex;
    height: 50px;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
      height: 20px;
  }
   `;
   
  export default LandEndStyled;