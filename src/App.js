import React, { useState } from "react";
import TopCard from "./components/TopCard";
import Card from "./components/Card";
import jsonData from "./Data/data.json";
import { nanoid } from "nanoid";

import { styles } from "./styles";

function App() {
  const [query, setQuery] = useState("weekly");

  const mappingData = jsonData.map((eachData, index) => {
    //to my future self: i tried my best to avoid doing this kind of if statements but i couldnt find any other way. if you could think a way just change the function below
    const timePeriods = () => {
      let time;
      if (query === "daily") {
        return (time = eachData.timeframes.daily);
      } else if (query === "weekly") {
        return (time = eachData.timeframes.weekly);
      } else if (query === "monthly") {
        return (time = eachData.timeframes.monthly);
      }
      return time;
    };

    return (
      <Card
        key={nanoid()}
        category={eachData.title}
        hours={timePeriods().current}
        lastWeekHours={timePeriods().previous}
        cardStyle={styles[index].card}
        headerStyle={styles[index].cardHeader}
      />
    );
  });

  function periodClickHandler(event) {
    const name = event.target.name;
    setQuery(`${name}`);
  }

  return (
    <div className="App">
      <TopCard onClick={periodClickHandler} query={query} />
      <div className="cards-grid">{mappingData}</div>
    </div>
  );
}

export default App;


