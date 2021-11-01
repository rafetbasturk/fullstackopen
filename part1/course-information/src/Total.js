const Total = ({ parts }) => {
  const total = parts.reduce((prev, cur) => prev += cur.exercises, 0)
  return (
    <>
      <p>Number of exercises {total} </p>
    </>
  )
}

export default Total
