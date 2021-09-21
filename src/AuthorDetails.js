import BlogList from "./BlogList";
import useFetch from "./useFetch";

const AuthorDetails = () => {
const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

const currentAuthor = window.location.href.split('/').pop()

return (
  <div className="home">
    <h2> {currentAuthor} </h2>
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === currentAuthor)} /> }
  </div>
);
}

export default AuthorDetails;
