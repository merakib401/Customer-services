import { Suspense } from "react";
import "./App.css";
import Bannar from "./Components/Banner/Bannar";
import Card from "./Components/Card/Card";
import Footer from "./Components/footer/Footer";
import NavBar from "./Components/Navbar/NavBar";

const fetchTickets = async () =>{
  const res = await fetch ("/tickets.json")
  return res.json()
}
// console.log(fetchTickets ());




function App() {
  const promiseTickets = fetchTickets()
  // console.log(promiseTickets);
  
  return (
    <>
      <NavBar></NavBar>
      <Bannar></Bannar>
      <Suspense fallback= "loadinggg....">
        <Card promiseTickets = {promiseTickets}></Card>
        </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
