import './App.css';
import React, { Component } from 'react'
import styled from 'styled-components';

const Body = styled.div`
padding: 0;
margin: 0;
box-sizing: border-box;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(to top, #000000 0%, #1560bd 100%);
`
//background-color: #1560bd;

const Title = styled.h1`
  font-size: 3.9rem;
  color: white;
`

const Btn = styled.button`
  width: 8rem;
  height: 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.6rem;
  background-color: #0091FF;
  color: white;
  margin: 0.5rem;
  cursor: pointer;
  transition-duration:1s;
  transform-origin: 0% 0%;
  
  &:hover {
    color: black;
    background-color: #00BFFF;
    transform:scale(1);
  }
`
/*const divBtn = styled.div`
display: flex;
justify-content: center;
`*/

const Copy = styled.footer`
    margin-top: 10px;
    text-align: center;
    font-family: Verdana;
    font-style: italic;
    color: rgb(71, 74, 81);
`

class Timer extends Component {

  state = {
    numero: 0
  };

  add = () => {
       this.setState({
        numero: this.state.numero < 10 ? this.state.numero + 1 : this.state.numero
       });
      };

      delete = () => {
         this.setState({
           numero: this.state.numero > 0 ? this.state.numero - 1 : this.state.numero
         });
        };


  render() {
    return(
      <Body>
         <Title>{this.state.numero}</Title>
         <divBtn>
         <Btn onClick={this.add}> Crescente </Btn>
         <Btn onClick={this.delete}> Decrescente </Btn>
         </divBtn>
         <Copy>© Daniel Roger Nitter</Copy>
      </Body>
    )
  }
}

export default Timer;
