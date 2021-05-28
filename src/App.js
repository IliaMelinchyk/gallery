import React from "react";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Галерея с комментариями и возможностью ставить лайки
      </h1>
      <Gallery />
    </>
  );
};

export default App;
