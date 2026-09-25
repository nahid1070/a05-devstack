import { Suspense } from "react";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Technologies from "./components/Technologies"
import type { Technology } from "./types/technology";
import Banner from "./components/Banner";
import LoaderSpinner from "./components/LoaderSpinner";

// Creating Promise to Get Technologies Data
const techDataPromise = async () : Promise<Technology[]> => {
  const res = await fetch('/data/technologies.json');
  const data = await res.json();

  return data;
}

function App() {

  return (
    <>
      <Header />
      <Banner />

      <Suspense fallback={<LoaderSpinner />}>
        <Technologies techDataPromise={techDataPromise()} />
      </Suspense>

      <Footer />
    </>
  )
}

export default App
