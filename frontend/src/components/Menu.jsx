// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ category, postId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/related/?category=${category}&id=${postId}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (category && postId) {
      fetchData();
    }
  }, [category, postId]);

  return (
    <div className="menu">
      <h1>Altri post che potrebbero piacerti</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.image}`} alt="" />
          <h2>{post.title}</h2>
          <button>
            <Link to={`/post/${post?.id}`}>Per saperne di più</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
