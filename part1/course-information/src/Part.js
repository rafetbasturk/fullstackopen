const Part = ({item}) => {
  const {part, exercises} = item;
  return (
    <>
      <p>{part} {exercises}</p>
    </>
  )
}

export default Part
