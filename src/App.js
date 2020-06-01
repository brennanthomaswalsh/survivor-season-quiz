import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SeasonCard from './components/SeasonCard'
import produce from 'immer'
import './reduxStore'

const seasonArray = [{season: 1}, {season: 2}, {season: 3}]

function App() {
  const [currentSeasonArray, setCurrentSeasonArray] = useState(seasonArray)

  const switchSeasonPosition = (currentIndex) => {
    setCurrentSeasonArray(produce(currentSeasonArray, (draftCurrentSeasonArray) => {
      const elemToMove = draftCurrentSeasonArray[currentIndex]
      draftCurrentSeasonArray.splice(currentIndex, 1)
      draftCurrentSeasonArray.splice(currentIndex + 1, 0, elemToMove)
    }))
  }

  const currentList = currentSeasonArray.map((season) =>
    <li>{season['season']}</li>
  );

  const switchSecondElem = () =>
    switchSeasonPosition(1)

  const sortList = () => {
    for(var i = 1; i < seasonArray.length; i++){

    }
  }

  return (
    <div className="App">
      <Fragment>
        <ol>
          { currentList }
        </ol>
      </ Fragment>
      <SeasonCard></SeasonCard>
      <button onClick={switchSecondElem}>start</button>
    </div>
  );
}

export default App;
