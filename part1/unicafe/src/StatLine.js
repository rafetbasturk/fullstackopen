const StatLine = ({ value, text }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{text !== "positive" ? `${value}` : `${value} %`}</td>
      </tr>
    </>
  )
}

export default StatLine
