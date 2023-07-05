import { useState } from "react"
import Review from "./Review"

import reviews from "./data"

function App() {
  const [index, setIndex] = useState(0)
  const persons = reviews[index]

  const handlePreviewBtn = () => {
    index < 1 ? setIndex(reviews.length - 1) : setIndex(index - 1)
  }
  const handleNextBtn = () => {
    index < reviews.length - 1 ? setIndex(index + 1) : setIndex(0)
  }
  const handleRandomBtn = () => {
    let random = 0
    do {
      random = Math.floor(Math.random(0) * reviews.length)
    } while (index === random)
    setIndex(random)
  }

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2></h2>
          <div className="underline"></div>
        </div>
        <Review
          persons={persons}
          handleNextBtn={handleNextBtn}
          handlePreviewBtn={handlePreviewBtn}
          handleRandomBtn={handleRandomBtn}
        />
      </section>
    </main>
  )
}

export default App
