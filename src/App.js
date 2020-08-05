import React, { Fragment }from 'react';
import './App.css';
import Season from './Season.js'

let survivorList = [
  { season: 1, points: 0, winner: 'Hatch', seasonName: 'season1' },
  { season: 2, points: 0, winner: 'Wesson', seasonName: 'Australia'},
  { season: 3, points: 0, winner: 'Zohn', seasonName: 'Africa' }
]

let seasonsToCompare = function () {
  survivorList.map((elem) =>
    <Season
      seasonName={elem['seasonName']}
      winner={elem['winner']}
     />)
}

let completed = function () {
  return new Set(survivorList.map(elem => elem['points'] )).size == survivorList.length
}

function App() {
  return (
    <div>
      {completed() && (
        <div>Hello </ div> )}
      {!completed() &&(
        <Fragment>
          <div>{seasonsToCompare} </ div>
        </Fragment>
       )}
    </div>
  );
}

export default App;
