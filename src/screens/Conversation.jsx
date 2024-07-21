import React from "react";
import { useLocation } from "react-router-dom";
import "../index.scss";

const Conversation = () => {
  const location = useLocation();
  const { response } = location.state || {};

  return (
    <div className="container mt-5">
      <h2>Conversation</h2>
      {response ? (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default Conversation;
