import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import useFetch from "./useFetch";

// npx json-server --watch data/db.json --port 8000

const BlogDetails = () => {

  const { id } = useParams();
  let { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <Link to={`/authors/${blog.author}`}>
            <p>Written by { blog.author }</p>
          </Link>
          <div> <p> { JSON.stringify(blog.body).split("\\n").join("\n") } </p> </div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
