import React, { Fragment }from 'react';
import './App.css';
import Season from './Season.js'

let survivorList = [
  { season: 1, points: 0, winner: 'Hatch', seasonName: 'borneo' },
  { season: 2, points: 0, winner: 'Wesson', seasonName: 'Australia'},
  { season: 3, points: 0, winner: 'Zohn', seasonName: 'Africa' }
]


let completed = function () {
  return new Set(survivorList.map(elem => elem['points'] )).size == survivorList.length
}

function App() {
  const seasonsToCompare = survivorList.map((elem) =>
    {
      return (
        <Season
          winner={elem['winner']}
          seasonName={elem['seasonName']}
        >
      )
    }
  )

  return (
    <div>
      {completed() && (
        <div>Hello </ div> )}
      {!completed() &&(
         <Fragment>{seasonsToCompare} </ Fragment>
       )}
    </div>
  );
}

export default App;
