import { createContext, useReducer } from "react";

export const PostListData = createContext({
  post: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
});

let functionOfPost = (currentPostValue, action) => {
  let newPostList = currentPostValue;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostValue.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if (action.type === "ADD_INITAL_POSTS"){
    newPostList = action.payload.posts;
  }
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostValue];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [post, dispatchPost] = useReducer(functionOfPost, []);
  console.log(post);

  let addPost = (userid, title, body, tags) => {
    tags = tags.filter((tags) => tags !== " ");
    dispatchPost({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        userId: userid,
        tags: tags,
      },
    });
  };

  let addPosts = (posts) => {
    dispatchPost({
      type: "ADD_INITAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  let deletePost = (postId) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListData.Provider
      value={{
        post,
        addPost,
        addPosts,
        deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Pune",
    body: "Enjoying winter vacation in pune.",
    reaction: 4,
    userId: "user-7",
    tag: ["Pune", "historicPlace", "PunyaCheLog"],
  },
  {
    id: "12",
    title: "Going To Village",
    body: "Coming back to basics. Ground root reality. fresh enviornment",
    reaction: 49,
    userId: "user-17",
    tag: ["ChidHoodMemories", "Enviornment", "Peace"],
  },
];

export default PostListProvider;
