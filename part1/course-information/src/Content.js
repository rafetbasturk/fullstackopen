import Part from "./Part"

const Content = ({ content }) => {
  return (
    <>
      {
        content.map((item, i) => <Part key={i} item={item} />)
      }
    </>
  )
}

export default Content
