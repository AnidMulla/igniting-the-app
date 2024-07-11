import React from "react";
import ReactDOM from "react-dom/client";

/**
      Header 
      - Logo 
      - Nav Items
      - Cart
      Body
       - Search Bar
       -Restaurant List
        - Restaurant Card 
          - Image
          - Name
          - Rating
          - Cuisines
      Footer
      - Links
      - Copyright
      */

const Title = () => {
  return <h1>Food Villa</h1>;
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return {};
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
