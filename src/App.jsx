import { Suspense, useState } from "react";
import "./App.css";
import Bannar from "./Components/Banner/Bannar";
import Card from "./Components/Card/Card";
import Footer from "./Components/footer/Footer";
import NavBar from "./Components/Navbar/NavBar";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
  const promiseTickets = fetchTickets();
function App() {

  const [inProgress, setInProgress] = useState([]); // select করা tickets
  const [resolved, setResolved] = useState([]); // complete করা tickets

  return (
    <>
      <NavBar></NavBar>
      <Bannar
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      ></Bannar>
      <Suspense fallback="loadinggg....">
        <Card
          promiseTickets={promiseTickets}
          inProgress={inProgress}
          setInProgress={setInProgress}
          resolved={resolved}
          setResolved={setResolved}
        ></Card>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
