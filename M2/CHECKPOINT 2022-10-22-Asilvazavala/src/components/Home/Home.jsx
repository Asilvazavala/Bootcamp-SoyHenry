import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Img from '../../img-cp2/cp-fm2-image.png'
import * as actions from '../../redux/actions/index'
import CharacterCard from "../CharacterCard/CharacterCard";

// Importar las actions como Object Modules y no hacerles destructuring, sino los test no funcionarán!
// Ej: import * as actions from '...'
// Aparte Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  
  componentDidMount() {
    this.props.getCharacters();
  }

  
  render() {
    return (
      <div className="home">
        <h1>Star Wars</h1>
        <h2>May the force be with you</h2>
        
        <img 
        src={Img}
        alt="star-wars-logo"
        />
      
        <h3>Characters</h3>
          <ul>
            {this.props.characters && this.props.characters.map((character) => (
              <li
                key={character.id}
              >
              <CharacterCard
              id={character.id}
              name={character.name}
              faction={character.faction}
              image={character.image}
              ></CharacterCard>
              </li>
            ))}
          </ul>
      
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
 }

export const mapDispatchToProps = (dispatch) => { 
  return {
    getCharacters: function () {
      dispatch(actions.getCharacters());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
