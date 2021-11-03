import StatLine from "./StatLine"

const Stats = ({ good, neutral, bad }) => {
  const total = Number(good + bad + neutral)
  const average = Number(((good * 1) - (bad * 1)) / total);
  const percentage = Number((good / total) * 100);
  const stats = <>
    <StatLine value={good} text="good" />
    <StatLine value={neutral} text="neutral" />
    <StatLine value={bad} text="bad" />
    <StatLine value={total} text="all" />
    <StatLine value={average} text="average" />
    <StatLine value={percentage} text="positive" />
  </>
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          {total ? stats : <tr><td>No feedback given</td></tr>}
        </tbody>
      </table>
    </>
  )
}

export default Stats
