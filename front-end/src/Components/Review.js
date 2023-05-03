function Review({ review }) {
    return (
      <div className="Review">
        <h4>
          {review.title} <span>{review.rating}</span>
        </h4>
        <h5>{review.reviewer}</h5>
        <p>{review.content}</p>
      </div>
    );
  }
  
  export default Review;