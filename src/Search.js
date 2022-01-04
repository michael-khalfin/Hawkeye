import { useState } from "react";
import { Link } from 'react-router-dom';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Search = () => {
  const [param, setParam] = useState('10/23/2020');
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div></div> }
      { blogs && (
        <div>
          <div className="search">
            <input
              type="text"
              value={param}
              onChange={(e) => setParam(e.target.value)}
            />
          </div>
          <BlogList blogs={blogs.filter(blog => blog.title !== "NA" && blog.title.includes(param))} />
        </div>
      ) }
    </div>
  );
}

export default Search;
