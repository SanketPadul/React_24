import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Container from "./Components/container";
import CreatePost from "./Components/createPost";
import PostList from "./Components/PostList";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";


export default function App() {

  
  const [checkState, setCheckState] = useState("Home");
  const [movingToHome, setMovingToHome] = useState("");
  console.log("moving to home is ");
  console.log(movingToHome);
  let handleView = (check, handleGoToHome) => {
    // console.log(check);
    if (check === "Home" || check==="") {
      setCheckState(check);
      setMovingToHome(handleGoToHome);
    } else setCheckState(check);
  };

  return (
    <PostListProvider>
      <div className="flex flex-col">
        <Header></Header>
        <Container>
          <Sidebar
            check={checkState}
            handleSidebarComponents={handleView}
          ></Sidebar>
          <CreatePost
            check={checkState}
            displayHome={movingToHome}
            handleSidebarComponents={handleView}
          ></CreatePost>
          <PostList check={checkState}></PostList>
          
        </Container>
        <Footer></Footer>
      </div>
    </PostListProvider>
  );
}
