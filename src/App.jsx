import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";



const App = () => {


  // const [count, setCount] = useState(0);
  // // const [loading, setLoading] = useState(true);

  // // if (loading) {
  // //   return <Loading />;
  // // }

  // function ss() {
  //   setCount(count + 1);
  // }

  return(
    <>
      <Header />
      <Main />
    </>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
