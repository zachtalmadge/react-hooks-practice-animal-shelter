import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  let onChangeType = (e) => {
    let newFilter = {type: e.target.value}
    setFilters(newFilter)
  }

  let onFindPetsClick = () => {
    fetch('http://localhost:3001/pets')
    .then(response => response.json())
    .then(pets => {
      let filteredPets = pets.filter(({type}) => {
        return filters.type === 'all' || type === filters.type
      })
      setPets(filteredPets)
    })
    
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={onChangeType}
            onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;