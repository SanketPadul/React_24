import { useContext, useRef } from "react";
import { PostListData } from "../store/post-list-store";

const CreatePost = ({ check,displayHome,handleSidebarComponents }) => {
  let userId = useRef("");
  let postTile = useRef("");
  let postContent = useRef("");
  let postTags = useRef([]);
  const { addPost } = useContext(PostListData);
  const displaycontent = (event) => {
    event.preventDefault();
    addPost(
      userId.current.value,
      postTile.current.value,
      postContent.current.value,
      postTags.current.value.split(/(\s+)/)
    );
    userId.current.value = "";
    postTile.current.value = "";
    postContent.current.value = "";
    postTags.current.value = "";
    
  };

  return (
    <>
      <form
        className={`w-[100%] ${
          check !== "Home" ? "block" : "hidden"
        } border m-5 p-5`}
        onSubmit={displaycontent}
      >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            UserID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Please enter user ID..."
            ref={userId}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            ref={postTile}
            type="text"
            className="form-control"
            id="texttitle"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            Post Body
          </label>
          <textarea
            ref={postContent}
            type="text"
            className="form-control"
            id="postcontent"
            placeholder="Tell me more about post..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTags" className="form-label">
            Post Tags
          </label>
          <input
            ref={postTags}
            type="text"
            className="form-control"
            id="posttags"
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${displayHome===""?"block":"hidden"}`}
          onClick={()=>handleSidebarComponents("","true")}
        >
          Post
        </button>
        <a
          
          className={`btn btn-primary w-[25%] bg-green-600 text-white ${displayHome===""?"hidden":"block"}`}
        >
          Go To Home
        </a>
        
      </form>
    </>
  );
};

export default CreatePost;
