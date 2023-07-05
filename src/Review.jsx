/* eslint-disable react/prop-types */
import { BiSolidQuoteRight } from "react-icons/bi"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
const Review = ({
  persons,
  handleRandomBtn,
  handlePreviewBtn,
  handleNextBtn,
}) => {
  const { id, image, job, name, text } = persons
  return (
    <article className="review" id={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />

        <BiSolidQuoteRight className="quote-icon" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job} </p>
      <p className="info">{text} </p>
      <div className="button-container">
        <button onClick={handlePreviewBtn} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={handleNextBtn} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={handleRandomBtn} className="btn-hipster btn">
        Suprise Me
      </button>
    </article>
  )
}
export default Review
