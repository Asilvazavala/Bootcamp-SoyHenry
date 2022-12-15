import React from "react";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Ships from "./components/Ships/Ships";
import {Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Route 
        path={'/'}
        render={ () => <Nav /> } 
      />

      <Route 
        exact path={'/'}
        render={ () => <Home /> } 
      />
      
      <Route 
        exact path={'/character/:id'}
        render={ () => <CharacterDetail /> } 
      />

      <Route 
        path={'/character/create'}
        render={ () => <CreateCharacter /> } 
      />

      <Route 
        path={'/ships'}
        render={ ({ match }) => <Ships /> } 
      />

    </div>
  );
}
export default App;
