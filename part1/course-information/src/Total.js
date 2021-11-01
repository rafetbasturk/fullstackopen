const Total = ({ content }) => {
  const total = content.reduce((prev, cur) => prev += cur.exercises, 0)
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

export default Total
