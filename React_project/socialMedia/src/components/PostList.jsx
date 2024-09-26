import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostListData } from "../store/post-list-store";
import LoadingSpinner from "./Loadingspinner";

function PostList({ check }) {

  const { post, addPosts } = useContext(PostListData);
  const [fetching, setFetching]=useState(false);
  useEffect(() => {
    setFetching(true)
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <div
      className={`${
        check === "Home" ? "block" : "hidden"
      } w-[100%] flex gap-3 flex-wrap justify-around m-5 p-5`}
    >
      {fetching && <LoadingSpinner/>}
      <center
        className={`text-[35px] font-semibold   ${
          !fetching && post.length === 0 ? "block" : "hidden"
        }`}
      >
        No Post Yet...
      </center>
      {post.map((post) => (
        <Post postdetail={post} />
      ))}
    </div>
  );
}

export default PostList;
