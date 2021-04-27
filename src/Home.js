import { Button, Jumbotron } from "react-bootstrap";
import { Redirect, Route  } from "react-router-dom";
import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(false);
  return (
    <div style={{ background: "black" }}>
      <div className="homePage">
        <h1 className="header1">Welcome To Users-List Project</h1>
        <div className="container textSize" style={{ textAlign: "left" }}>
          <Jumbotron style={{ paddingLeft: "15%" }}>
            <p>
              In this project I show you how I use API Calls to 3rd services
              <br />
              and present it on designed tables
            </p>
            <ol style={{ paddingLeft: "10%" }}>
              <li>users data</li>
              <li>shabbat times</li>
            </ol>
          </Jumbotron>
        </div>
      </div>
      <h1 style={{ color: "white" }}>choose project to see:</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "35px",
        }}
      >
        <div className="flex-item"></div>
        <div className="flex-item"></div>

        <Button
          onClick={()=> setCount(true)} setCount
          className="flex-item"
          size="lg"
          as="input"
          value="Shabbat Times"
        />
        <Button className="flex-item" size="lg" as="input" value="The List" />
        <Button className="flex-item" as="input" size="lg" value="Submit" />
        <div className="flex-item"></div>
        <div className="flex-item"></div>
      </div>
      {/* redirect with conditions */}
      <Route exact path="/">
  {count ? <Redirect to="/table" /> : ""}
</Route>
      
    </div>
  );
}

export default Home;
