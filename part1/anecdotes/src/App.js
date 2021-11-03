import React, { useState } from 'react'
import Button from './Button'
import Votes from './Votes'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnectodes] = useState([
    { text: 'If it hurts, do it more often', index: 0, votes: 0 },
    { text: 'Adding manpower to a late software project makes it later!', index: 1, votes: 0 },
    { text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', index: 2, votes: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', index: 3, votes: 0 },
    { text: 'Premature optimization is the root of all evil.', index: 4, votes: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', index: 5, votes: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients', index: 6, votes: 0 }
  ])

  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    if (random === selected) random+=1
    setSelected(random)
  }

  const handleVote = () => {
    const newArr = anecdotes.map(item => {
      if (item.index === selected) {
        item.votes += 1
      }
      return item;
    })
    setAnectodes(newArr)
  }

  const sorted = anecdotes.reduce((prev, current) => prev.votes > current.votes ? prev : current)

  return (
    <div>
      <h2>Anecdote od the day</h2>
      <p>{anecdotes[selected].text}</p>
      <Votes vote={anecdotes[selected].votes} />
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      

      <h2>Anecdote with most votes</h2>
      <p>{sorted.text}</p>
      <Votes vote={sorted.votes} />
    </div>
  )
}

export default App