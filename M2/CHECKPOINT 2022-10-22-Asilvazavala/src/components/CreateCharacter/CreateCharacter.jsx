import React from "react";
import * as actions from "../../redux/actions";
import * as ReactRedux from 'react-redux';

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateCharacter = () => {
    let [input, setInput] = React.useState({
      name: "",
      race: "",
      role: "",
      faction: "",
      ship: {
        name: ""
      }
    })

    
    const HandleChange = (e) => {
      setInput({
        ...input, [e.target.name]: e.target.value,
      });
    };


    const HandleShip = (ship) => {
      setInput({
        ...input, [ship.target.name]: {name: ship.target.value},
      });
    };


    const dispatch = ReactRedux.useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(actions.createCharacter(input));
    };

    return (
      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
        >
        <label>Name: </label>
        
        <input
          type="text"
          name="name"
          onChange={HandleChange}
        />
        <label>Race: </label>
        
        <input
          type="text"
          name="race"
          onChange={HandleChange}
        />
        <label>Faction: </label>
        
        <input
          type="text"
          name="faction"
          onChange={HandleChange}
        />
        <label>Role: </label>
        
        <input
          type="text"
          name="role"
          onChange={HandleChange}
        />
        <label>Ship: </label>
        
        <input
          type="text"
          name="ship"
          onChange={HandleShip}
        />

        <button
          type="submit"
        >Create Character
        </button>

        </form>
      </div>
    )
};


export default CreateCharacter;
