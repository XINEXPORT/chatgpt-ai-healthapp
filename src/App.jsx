// App.jsx
import React from "react";
import Home from "./screens/Home.jsx";
import Loading from "./screens/Loading.jsx";
import "./index.scss";

const App = () => {
  return (
    <div id="iphone-15-frame">
      <div className="screen">
        <div className="content">
          <Loading />
        </div>
        <footer></footer>
      </div>
    </div>
  );
};

export default App;
