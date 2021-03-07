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
  },
  {
    title: "Survivor Africa",
    description: "Well beloved in its time. By todays standards a rather tame season with a charming winner. Winner: Ethan Zohn",
    src: "https://www.youtube.com/embed/vWvU4vW9eVg"
  }
 ]

function App() {
  const [status, setStatus] = useState("unsorted");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderedSeasonsList, setOrderedSeasonsList] = useState(seasonsList)
  const endPoint = seasonsList.length - 1

  const onClick = (buttonIndex) => {
    if(buttonIndex == currentIndex) {
      setCurrentIndex(currentIndex + 1)
    } else {
      const newList = [
      orderedSeasonsList[buttonIndex],
      orderedSeasonsList[currentIndex],
      ...orderedSeasonsList.splice(2)
      ]

      setOrderedSeasonsList(newList)
      setCurrentIndex(currentIndex + 1)
    }

    if(currentIndex == endPoint) {
      setStatus("sorted")
    }
  }


  const seasons = orderedSeasonsList.map(({ title, description, src }, index) =>
   {
     return (
       <li>
         <Card title={title} description={description}>
           <Video title={title} src={src} />
           <Button handleClick={() => onClick(index) }>Pick Me!</Button>
         </Card>
       </li>
     )
  })

  const viewRender = () => {

    if(status == "unsorted"){
      return (
        <Battlefield combatant1={seasons[currentIndex]} combatant2={seasons[currentIndex + 1]}/>

      )
    } else if(status == "sorted") {
      return (
        <>
          <div>
            <h1>You Did it!</h1>
            <p>Below is an ordered list of survivor seasons by your preference from favorite to least favorite using science! </p>
          </div>
          <ol>
           { seasons }
          </ol>
        </>
      )
    }
  }

  return (
    <>
    <div>
      { viewRender() }
    </div>
    </>
  );
}

export default App;
