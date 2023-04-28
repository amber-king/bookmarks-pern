import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const API = process.env.REACT_APP_APT_URL;

function BookmarkDetails() {
  const [bookmark, setBookmark] = useState([]);
  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`${API}/bookmarks/${id}`)
      .then((response) => {
        console.log(response.data);
        setBookmark(response.data);
      })
      .catch((error) => {
        console.warn("catch:", error);
      });
  }, [id]);
  return (
    <article>
      <h3>
        {bookmark.is_favorite ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={bookmark.url}>{bookmark.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {bookmark.url}
      </h5>
      <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/bookmarks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/bookmarks/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BookmarkDetails;
