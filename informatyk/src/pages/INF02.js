import TopNavBar from "../components/TopNavBar.js";
import Quiz from "../components/Quiz.js";
import "../styles/inf02.css";
import React from "react";

export default function INF02() {
  return (
    <>
      <TopNavBar></TopNavBar>
      <div className="container">
          <Quiz></Quiz>
      </div>
    </>
  );
}
