import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

return (
  <div className="home">
    { error && <div>{ error }</div> }
    { isPending && <div></div> }
    { blogs && <BlogList blogs={blogs.filter(blog => blog.title !== "NA")} /> }
  </div>
);
}

export default Home;
