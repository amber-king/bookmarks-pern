import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate} from "react-router-dom";
const API = process.env.REACT_APP_APT_URL;

function BookmarkDetails() {
  const [bookmark, setBookmark] = useState([]);
  const { id } = useParams;
  const navigate = useNavigate()

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

  const handleDelete = () => {
    deleteBookmark();
  };

  const deleteBookmark = () => {
    axios
      .delete(`${API}/bookmarks/${id}`)
      .then(() => {
        navigate(`/bookmarks`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };
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
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BookmarkDetails;
