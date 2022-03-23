import React from "react";
import styled from "styled-components";


const StyledMathFact = styled.div`
background:beige;
width:fit-content;
padding:2%;
border-radius:10%;
margin:auto;
margin-bottom:2%;
`

export default class MathFact extends React.Component{
    render(){
        const {mathFact:{number,text}} = this.props
        return (
            <StyledMathFact>
                <h2>Number: {number}</h2>
                <p>{text}</p>
            </StyledMathFact>
        )
    }
}