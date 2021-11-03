import { useState } from "react"
import Feedback from "./Feedback";
import Stats from "./Stats";

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <Feedback good={handleGood} neutral={handleNeutral} bad={handleBad} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
