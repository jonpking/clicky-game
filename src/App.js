import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterImage from "./components/CharacterImage";
import character from "./characters.json";

function App() {
  return (
    <Wrapper>
      <Title>Clicky-Game</Title>
      <CharacterImage
        name={characters[0].name} 
        image={characters[0].image}
      />
    </Wrapper>
  );
}

export default App;
