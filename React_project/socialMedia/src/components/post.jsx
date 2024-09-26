import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PostListData } from "../store/post-list-store";

function Post({ postdetail }) {
  const { deletePost } = useContext(PostListData);
  
  return (
    <>
      <div
        className="card relative  transition-all delay-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-100 "
        style={{ width: "31rem" }}
      >
        <span
          className="absolute top-2 right-2 text-[1.3rem] text-black cursor-pointer transition-all delay-200 ease-in-out hover:scale-125 hover:shadow-lg "
          onClick={() => deletePost(postdetail.id)}
        >
          <RxCross2 />
        </span>

        <div className="card-body">
          <h5 className="card-title font-bold text-[19px] ">
            {postdetail.title}
          </h5>
          <p className="card-text font-light text-[17px] mb-2">
            {postdetail.body}
          </p>
          {postdetail.tags.map((tag) => (
            <span className="font-semibold text-blue-700">#{tag} </span>
          ))}
        </div>
      </div>
    </>
  );
}
export default Post;
