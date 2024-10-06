import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
export default function App() {

  const fetchStatus = useSelector(store=>store.fetchstatus);
  return (
    <>
      <Header />
      <FetchItem/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/>: <Outlet/>}
      <Footer />
    </>
  );
}
