import React, { useState }from 'react';
import { Card, Video } from "@bwalsh/component_library"
import './App.css';

function App() {
  const [status, setStatus] = useState("unsorted")

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

   const seasons = seasonsList.map(({ title, description, src }) =>
     {
       return (
         <Card title={title} description={description}>
           <Video title={title} src={src} />
         </Card>
       )
     })



  return (

    <div>
      { seasons }
    </div>
  );
}

export default App;
