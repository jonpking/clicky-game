import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterImage from "./components/CharacterImage";
import Score from "./components/Score";
import ImageWrapper from "./components/ImageWrapper";

class App extends Component {

  state = {
    images: [
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/5/58/Chromie_Hero_Portrait.png/120px-Chromie_Hero_Portrait.png?version=192b0b027234e6e317c79658e1c77921",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/a/a7/Artanis_Hero_Portrait.png/120px-Artanis_Hero_Portrait.png?version=286d509183bf36e5f8d31f6e93e625eb",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/3/31/Illidan_Hero_Portrait.png/120px-Illidan_Hero_Portrait.png?version=1f196aa57d0fb242aaafe1d0bbe8e0a2",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/a/af/Kael%27thas_Hero_Portrait.png/120px-Kael%27thas_Hero_Portrait.png?version=26b0a8b022ab906eb4b073c922e9aaf6",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/c/c9/Malfurion_Hero_Portrait.png/120px-Malfurion_Hero_Portrait.png?version=b463846ca7be4fa08eed1acbefba9be8",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/4/4e/Murky_Hero_Portrait.png/120px-Murky_Hero_Portrait.png?version=81ba89394ac8db6bac7fbd0d67da3caa",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/3/3e/Sylvanas_Hero_Portrait.png/120px-Sylvanas_Hero_Portrait.png?version=ad7e018ba8d6073a2659d26ae90df808",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/b/b4/Uther_Hero_Portrait.png/120px-Uther_Hero_Portrait.png?version=54881e4d4b61456fc941d623f69a4807",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/7/72/Tracer_Hero_Portrait.png/120px-Tracer_Hero_Portrait.png?version=875e0becd3351dfa0b7975cbb92de2ce",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/5/50/Tassadar_Hero_Portrait.png/120px-Tassadar_Hero_Portrait.png?version=3ff5bc8b1cfd4c49c561f75f173d99f8",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/6/64/Thrall_Hero_Portrait.png/120px-Thrall_Hero_Portrait.png?version=72a85c0d2eb09bc6912e319062079faf",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/d/d6/Medivh_Hero_Portrait.png/120px-Medivh_Hero_Portrait.png?version=ae3d77469f64cdc8f3720dbb44c6d2b4",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/0/08/Li_Li_Hero_Portrait.png/120px-Li_Li_Hero_Portrait.png?version=eecd64baa040d9235bcc3152d3e64d94",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/d/d2/Jaina_Hero_Portrait.png/120px-Jaina_Hero_Portrait.png?version=cf9a1d564fb8c6948ce643585806c449",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/f/fc/E.T.C._Hero_Portrait.png/120px-E.T.C._Hero_Portrait.png?version=ee6171387a93b02bab533306de3a1a2f",
      "https://gamepedia.cursecdn.com/allstars_gamepedia/thumb/1/16/Diablo_Hero_Portrait.png/120px-Diablo_Hero_Portrait.png?version=825f51e8c9ed3c0ce6c1b84e11fc3c0c"
    ],
    clickedImages: [],
    score: 0
  }

  shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  checkIfClicked = (event) => {
    if (this.state.clickedImages.includes(event.target.src)) {
      return this.setState({
        score: 0,
        clickedImages: []
      })
    }

    this.setState({
      score: this.state.score + 1,
      clickedImages: [event.target.src, ...this.state.clickedImages],
      image: this.shuffle(this.state.images)
    })
    console.log(this.state.clickedImages);
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky-Game</Title>
        <Score score={this.state.score} />
        <ImageWrapper>
          {this.state.images.map(image => {
            return <CharacterImage onClick={this.checkIfClicked} image={image} />
          })}
        </ImageWrapper>
      </Wrapper>
    )
  };
}

export default App;
