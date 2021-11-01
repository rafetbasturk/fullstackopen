import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]

  return (
    <>
      <Header course={course} />
      <Content content={content} />
      <Total content={content}/>
    </>
  )
}

export default App;
