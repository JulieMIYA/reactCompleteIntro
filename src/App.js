import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me !</h1>
      <Pet name="luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Dokin" animal="Cat" breed="Mixed" />
    </div>
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
