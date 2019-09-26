import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterImage from "./components/CharacterImage";
import characters from "./characters.json";
import CharacterContainer from "./components/CharacterContainer";

function App() {
  return (
    <Wrapper>
      <Title>Clicky-Game</Title>
      <CharacterContainer>
        <CharacterImage
          name={characters[0].name}
          image={characters[0].image}
        />
      </CharacterContainer>
    </Wrapper>
  );
}

export default App;
