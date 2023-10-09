import React from "react";

function Pet({name, gender, type, age, weight, isAdopted}) {

  const onAdopt = (e) => {
    e.target.classList.remove('primary')
    e.target.classList.add('disabled')
    e.target.disabled = true
    e.target.textContent = "Already adopted"
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'male' ? '♀' : '♂' }
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? 
        <button className="ui disabled button">Already adopted</button>
        :
        <button onClick={onAdopt} className="ui primary button">Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;