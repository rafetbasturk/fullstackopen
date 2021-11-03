import Button from "./Button"

const Feedback = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={good} text="good" />
      <Button handleClick={neutral} text="neutral" />
      <Button handleClick={bad} text="bad" />
    </>
  )
}

export default Feedback
