import React, { useState, useEffect }from 'react';
import { Card, Video, Button } from "@bwalsh/component_library";
import Battlefield from "./components/Battlefield";
import './App.css';

const seasonsList = [
  {
    title: "Survivor Borneo",
    description: "This is the iconic first season that started it all. Winner: Richard Hatch",
    src: "https://www.youtube.com/embed/BhKQBTJME5o",
    score: 0
  },
  {
    title: "Survivor Australian Outback",
    description: "Incredibly improving on the first season in every way. Winner: Tina Wesson",
    src: "https://www.youtube.com/embed/NpLNK5dej9s",
    score: 0
  },
  {
    title: "Survivor Africa",
    description: "Well beloved in its time. By todays standards a rather tame season with a charming winner. Winner: Ethan Zohn",
    src: "https://www.youtube.com/embed/vWvU4vW9eVg",
    score: 0
  },
  {
    title: "Survivor Marquesas",
    description: "The first season for the beloved Boston Rob and a victory by a prayer warrior. Winner: Vecepia Towery",
    src: "https://www.youtube.com/embed/BdWiabh7Tmc",
    score: 0
  },
  {
    title: "Survivor Thailand",
    description: "This season is much maligned and deservedly so. The winner known as the iceman was a manipulative mastermind. Winner: Brian Heidik",
    src: "https://www.youtube.com/embed/FJpLoHltPgU",
    score: 0
  },
  {
    title: "Survivor The Amazon",
    description: "The first time they split tribes my gender with an unexpected winner. Winner: Jenna Morasco",
    src: "https://www.youtube.com/embed/bMS0QBaEgqw",
    score: 0
  },
  {
    title: "Survivor Pearl Islands",
    description: "The birth of an iconic villian and the first winner to later repeat. Winner: Sandra Diaz-Twine",
    src: "https://www.youtube.com/embed/_WXtrdHlooQ",
    score: 0
  },
  {
    title: "Survivor All Stars",
    description: "The first returning player season did not dissapoint with more gameplay than ever. Winner: Amber Mariano",
    src: "https://www.youtube.com/embed/9hrenX6PaZs",
    score: 0
  },
  {
    title: "Survivor Vanuatu",
    description: "Guys vs Gals is back again and boy its mostly the same. Winner: Chris Daugherty",
    src: "https://www.youtube.com/embed/9hrenX6PaZs",
    score: 0
  },
  {
    title: "Survivor Palau",
    description: "Who doesn't love a good 'ol tale of a firefighter controlling everything. Winner: Tom",
    src: "https://www.youtube.com/embed/Ov21YXmPRp0",
    score: 0
  },
  {
    title: "Survivor Guatemala",
    description: "This is the season. There is no taking that away. Winner: Danni Boatwright",
    src: "https://www.youtube.com/embed/CGRGe0wlZpI",
    score: 0
  },
  {
    title: "Survivor Panama",
    description: "The birth a legend in Cirie Fields perpetually robbed. Winner: Aras B.",
    src: "https://www.youtube.com/embed/utl02y2AHR4",
    score: 0
  },
  {
    title: "Survivor Cook Islands",
    description: "The first time a hidden immunity idol was used to win the game. Winner: Yul Kwon",
    src: "https://www.youtube.com/embed/zBYYhHRszN0",
    score: 0
  },
  {
    title: "Survivor Fiji",
    description: "The game where we found the haves do, in fact, have it better than the have nots. Winner: Earl Cole",
    src: "https://www.youtube.com/embed/8omp80naXFA",
    score: 0
  },
  {
    title: "Survivor China",
    description: "Many favorite players first season and a masterclass in final tribal. Winner: Todd Herzog",
    src: "https://www.youtube.com/embed/WUCn7Muonno",
    score: 0
  },
  {
    title: "Survivor Fans vs Favorites",
    description: "The season with the greatest alliance of all time, the blackwidow brigade. Winner: Parvati Shallow",
    src: "https://www.youtube.com/embed/osLY7nRAMhM",
    score: 0
  },
  {
    title: "Survivor Gabon",
    description: "A season that made us all think that lady from gilmore girls was clever. Winner: Bob Crowley",
    src: "https://www.youtube.com/embed/EyQutIBIbFY",
    score: 0
  },
  {
    title: "Survivor Tocantins",
    description: "The first perfect game played. Winner: J. T. Thomas",
    src: "https://www.youtube.com/embed/iuI7vLtx1bo",
    score: 0
  },
  {
    title: "Survivor Samoa",
    description: "Some say the greatest game ever lost. Winner: Natalie White",
    src: "https://www.youtube.com/embed/8GCaRso3IS4",
    score: 0
  },
  {
    title: "Survivor Heroes vs Villains",
    description: "2nd all returning player season did not dissapoint giving us the 1st 2 time winner. Winner: Sandra Diaz-Twine",
    src: "https://www.youtube.com/embed/R6byVlxL6Kk",
    score: 0
  },
  {
    title: "Survivor Nicaragua",
    description: "Put quitters on the jury, get a weird winner. Winner: Jud Birza",
    src: "https://www.youtube.com/embed/vmmU_QpEAHw",
    score: 0
  },
  {
    title: "Survivor Redemption Island",
    description: "Oh, he finally did it? Good for him. Winner: Rob Mariano",
    src: "https://www.youtube.com/embed/78PS31PO5lQ",
    score: 0
  },
  {
    title: "Survivor South Pacific",
    description: "This was the season with the cult. Winner: Sophie Clarke",
    src: "https://www.youtube.com/embed/g45o4hDNgJc",
    score: 0
  },
  {
    title: "Survivor One World",
    description: "One of the most dominant performances to date. Winner: Kim Spradlin",
    src: "https://www.youtube.com/embed/IMFT_Y8AeIU",
    score: 0
  },
  {
    title: "Survivor Philippines",
    description: "How could someone lose so often and yet win? Winner: Denise Stapley",
    src: "https://www.youtube.com/embed/W9dglLaLBWQ",
    score: 0
  },
  {
    title: "Survivor Fans vs Favorites 2",
    description: "Who expected this dude to play a perfect game after the first time? Winner: John Cochran",
    src: "https://www.youtube.com/embed/AJ8e5mDeUdc",
    score: 0
  },
  {
    title: "Survivor Blood vs Water",
    description: "Adding family will definitely make the game more interesting... Winner: Tyson Apostol",
    src: "https://www.youtube.com/embed/cakgBPJapZY",
    score: 0
  },
  {
    title: "Survivor Cagayan",
    description: "Perhaps the best season with all first time players. Winner: Tony Vlachos",
    src: "https://www.youtube.com/embed/Ihh1VEpbxac",
    score: 0
  },
  {
    title: "Survivor Blood Vs Water 2",
    description: "The family season was so fun lets do it again... Winner: Natalie Anderson",
    src: "https://www.youtube.com/embed/RunkpcW785o",
    score: 0
  },
  {
    title: "Survivor Worlds Apart",
    description: "Wow this season had a lot of crappy people on it. Winner: Mike Holloway",
    src: "https://www.youtube.com/embed/Lrk6HHgqfg0",
    score: 0
  },
  {
    title: "Survivor Cambodia",
    description: "A completely dominant game on a returning player season. Winner: Jeremy Collins",
    src: "https://www.youtube.com/embed/B1ETnIXwgOQ",
    score: 0
  },
  {
    title: "Survivor Kaôh Rōng",
    description: "Brains vs Brawn vs Beauty turns out to still be a good format. Winner: Michele Fitzgerald",
    src: "https://www.youtube.com/embed/nrlxgdz7lcc",
    score: 0
  },
  {
    title: "Survivor Millenials Vs Gen X",
    description: "Generations don't like each other right. We should do that. Winner: Adam Klein",
    src: "https://www.youtube.com/embed/JXlL2c0DgF4",
    score: 0
  },
  {
    title: "Survivor Game Changers",
    description: "Friends were sacrificed along the way. As they should be in survivor. Winner: Sarah Lacina",
    src: "https://www.youtube.com/embed/YyGIS6nMztw",
    score: 0
  },
  {
    title: "Survivor Heroes vs. Healers vs. Hustlers",
    description: "Spiritual successor to BvBvB but with a different name. Winner: Ben Driebergen",
    src: "https://www.youtube.com/embed/dRD_cmYhQz8",
    score: 0
  },
  {
    title: "Survivor Ghost Island",
    description: "The island is haunted ooooo. Winner: Wendell",
    src: "https://www.youtube.com/embed/rXNmU0U_kz0",
    score: 0
  },
  {
    title: "Survivor David vs Goliath",
    description: "I mean David wins as we all know. Winner: Nick Wilson",
    src: "https://www.youtube.com/embed/1IvHxDI8P5Y",
    score: 0
  },
  {
    title: "Survivor Edge of Extinction",
    description: "Win in as few as like 15 days. Winner: Chris Underwood",
    src: "https://www.youtube.com/embed/99z3p0TGJxA",
    score: 0
  },
  {
    title: "Survivor Island of the Idols",
    description: "Don't be like Dan folks. Winner: Tommy Sheehan",
    src: "https://www.youtube.com/embed/v1rjCKoXUnU",
    score: 0
  },
  {
    title: "Survivor Winners at War",
    description: "This was a battle to the end with all the winners. Winner: Tony Vlachos",
    src: "https://www.youtube.com/embed/8IIeEVMbc6k",
    score: 0
  },
 ]

function App() {
  const [status, setStatus] = useState("unsorted");
  const [currentLowestScore, setCurrentLowestScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderedSeasonsList, setOrderedSeasonsList] = useState(seasonsList)
  const [listOfWins, setListOfWins] = useState([])

  React.useEffect(() => {
    if(orderedSeasonsList[currentIndex + 1] === undefined){
      return;
    }
    const firstIndexWins = listOfWins.filter(elem => elem['winner'] === orderedSeasonsList[currentIndex].title)
    const secondIndexWins = listOfWins.filter(elem => elem['winner'] === orderedSeasonsList[currentIndex + 1].title)

    const firstIndexBeat = firstIndexWins.map( elem => elem['loser'])
    const secondIndexBeat = secondIndexWins.map( elem => elem['loser'] )
    const firstIndexLostTo = listOfWins.filter(elem => elem['loser'] === orderedSeasonsList[currentIndex].title).map( elem => elem.winner )
    const secondIndexLostTo = listOfWins.filter(elem => elem['loser'] === orderedSeasonsList[currentIndex + 1].title).map( elem => elem.winner )

    const didSecondBeatSomeoneFirstLostTo = secondIndexBeat.filter(elem => firstIndexLostTo.includes(elem)).length > 0
    const didFirstBeatSomeoneSecondLostTo = firstIndexBeat.filter(elem => secondIndexLostTo.includes(elem)).length > 0

    const didSecondBeatFirst = secondIndexWins.filter( elem => elem.loser === orderedSeasonsList[currentIndex].title).length > 0
    const didFirstBeatSecond = firstIndexWins.filter( elem => elem.loser === orderedSeasonsList[currentIndex + 1].title).length > 0

    if(didFirstBeatSecond || didFirstBeatSomeoneSecondLostTo) {
       onClick(currentIndex)
    }

    if(didSecondBeatFirst || didSecondBeatSomeoneFirstLostTo) {
      onClick(currentIndex + 1)
    }

  }, [orderedSeasonsList])

  const onClick = (buttonIndex) => {
    const newList = [
      ...orderedSeasonsList
    ]

    newList.splice(buttonIndex, 1)
    let newItem = orderedSeasonsList[buttonIndex]
    let results = {
      winner: newItem['title'],
      loser: buttonIndex === currentIndex ? orderedSeasonsList[buttonIndex + 1]['title'] : orderedSeasonsList[buttonIndex - 1]['title']
    }
    let winList = listOfWins;
    winList.push(results)
    setListOfWins(winList)
    newItem['score'] = newItem['score'] + 1
    newList.push(newItem)
    setOrderedSeasonsList(newList)

    let listToCheck = newList.filter( elem => elem['score'] === currentLowestScore)

    if(listToCheck.length === 1) {
      setCurrentIndex(currentIndex + 1)
      let newLowest = currentLowestScore + 1

      setCurrentLowestScore(newLowest)
      let lastListToCheck = newList.filter( elem => elem['score'] === newLowest)

      if(lastListToCheck.length === 1) {
        setStatus("sorted")
      }
    }
  }


  const seasons = orderedSeasonsList.map(({ title, description, src, score }, index) =>
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
    if(status === "unsorted"){
      return (
        <Battlefield combatant1={seasons[currentIndex]} combatant2={seasons[currentIndex + 1]}/>

      )
    } else if(status === "sorted") {
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
