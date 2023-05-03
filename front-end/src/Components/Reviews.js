import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/bookmarks/${id}/reviews`).then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  }, [id, API]);
  return (
    <section className="Reviews">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );
}

export default Reviews;