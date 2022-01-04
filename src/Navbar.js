import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Hawkeye Weekly</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/publications">Publications</Link>
        <a href="https://www.instagram.com/pobjfk_hawkeye/" target="_blank">Instagram</a>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#0055FF',
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
