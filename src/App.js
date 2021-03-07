import React, { useState }from 'react';
import { Card, Video, Button } from "@bwalsh/component_library";
import Battlefield from "./components/Battlefield";
import './App.css';

const seasonsList = [
  {
    title: "Survivor Borneo",
    description: "This is the iconic first season that started it all. Winner: Richard Hatch",
    src: "https://www.youtube.com/embed/BhKQBTJME5o"
  },
  {
    title: "Survivor Australian Outback",
    description: "Incredibly improving on the first season in every way. Winner: Tina Wesson",
    src: "https://www.youtube.com/embed/NpLNK5dej9s"
  }
 ]

function App() {
  const [status, setStatus] = useState("unsorted");
  const [currentIndex, setCurrentIndex] = useState(seasonsList.length - 1);
  const [orderedSeasonsList, setOrderedSeasonsList] = useState(seasonsList)


   const seasons = orderedSeasonsList.map(({ title, description, src }) =>
     {
       return (
         <Card title={title} description={description}>
           <Video title={title} src={src} />
           <Button>Pick Me!</Button>
         </Card>
       )
     })

   const reorderSeasonList = () => {
     const newList = [orderedSeasonsList[1], orderedSeasonsList[0]]
     setOrderedSeasonsList(newList);
   }


  return (
    <>
      <Button handleClick={reorderSeasonList} >
        Sort Seasons
      </Button>
    <div>
      <Battlefield combatant1={seasons[currentIndex]} combatant2={seasons[currentIndex - 1]}/>
    </div>
    </>
  );
}

export default App;
