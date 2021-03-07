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
  },
  {
    title: "Survivor Marquesas",
    description: "The first season for the beloved Boston Rob and a victory by a prayer warrior. Winner: Vecepia Towery",
    src: "https://www.youtube.com/embed/BdWiabh7Tmc"
  },
  {
    title: "Survivor Thailand",
    description: "This season is much maligned and deservedly so. The winner known as the iceman was a manipulative mastermind. Winner: Brian Heidik",
    src: "https://www.youtube.com/embed/FJpLoHltPgU"
  },
  {
    title: "Survivor The Amazon",
    description: "The first time they split tribes my gender with an unexpected winner. Winner: Jenna Morasco",
    src: "https://www.youtube.com/embed/bMS0QBaEgqw"
  },
 ]

function App() {
  const [status, setStatus] = useState("unsorted");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPointer, setCurrentPointer] = useState(-1);
  const [orderedSeasonsList, setOrderedSeasonsList] = useState(seasonsList)
  const endPoint = seasonsList.length - 1
  const [numberSorts, setNumberSorts] = useState(0)

  const onClick = (buttonIndex) => {

    const newIndex = currentIndex + 1
    if(buttonIndex == currentIndex) {
      const newList = [
        ...orderedSeasonsList
       ]
      newList[currentIndex] = orderedSeasonsList[currentIndex + 1]
      newList[currentIndex + 1] = orderedSeasonsList[currentIndex]

      setOrderedSeasonsList(newList)
      setNumberSorts(numberSorts + 1)
      setCurrentIndex(newIndex)
    } else {
      setCurrentIndex(newIndex)
    }

    if(newIndex == endPoint && numberSorts == 0) {
      setStatus("sorted")
    } else if (newIndex == endPoint) {
      setCurrentIndex(0);
      setNumberSorts(0);
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
            <p>Below is an ordered list of survivor seasons by your preference from least favorite to most favorite using science! </p>
          </div>
          <ol reversed>
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
