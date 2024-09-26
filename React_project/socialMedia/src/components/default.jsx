import { useContext } from "react";
import { PostListData } from "../store/post-list-store";

export default function DefaultMessagae({check}) {
  const {post}=useContext(PostListData)
  return (
    <>
    
      <center className={`text-[30px] font-semibold ${post.length===0 ? "block":"hidden"} ${check=="Home" && "block"}`}>No Post Yet</center>
    </>
  );
}