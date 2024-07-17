import React from "react";
import "../index.scss";
import TextBox from "../components/TextBox";
import Form from "../components/Form";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div id="iphone-15-frame">
      <div className="screen">
        <header>iPhone 15 App</header>
        <div className="content">
          <div className="welcome-container">
            <p className="welcome-message">
              Welcome to the iPhone 15 layout example!
            </p>
            <h1 className="hello-message">Hello</h1>
          </div>
        </div>
        <footer>Footer Content</footer>
      </div>
    </div>
  );
};

export default Home;
