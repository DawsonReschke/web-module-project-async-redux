import React from "react";
import styled from "styled-components";
const StyledNewFactButton = styled.button`
    border:none;
    border-radius:10px;
    transform:scale(1);
    background-color:lightgrey;
    transition: 0.2s;
    &:hover{
        background-color:darkgrey;
        transform:scale(1.5);
    }
` 

export default class NewFactButton extends React.Component{
    render(){
        return (
            <StyledNewFactButton onClick={this.props.onClick}>Get New Fact!</StyledNewFactButton>
        )
    }
}