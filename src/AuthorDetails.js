import { useHistory, useParams } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// npx json-server --watch data/authors.json --port 8001

const AuthorDetails = () => {

  const { name } = useParams()
  const id = name.split('').map(x=>x.charCodeAt(0)).reduce((a,b)=>a+b);
  console.log(id)
  let { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs');
  let { data: blog, error2, isPending2 } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-details">
      { isPending2 && <div></div> }
      { error2 && <div>{ error2 }</div> }
      { blog && (
        <article>
          <h1>{ blog.name }</h1>
          <div className="wrap"> <pre>{blog.bio } </pre> </div>
          <br/>
          <br/>
          <h2>Articles by Author:</h2>
          <br/>
        </article>
      )}
      <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div></div> }
        { blogs && <BlogList blogs={blogs.filter(blog => blog.author == name)} /> }
      </div>
    </div>
  );
}

export default AuthorDetails;
