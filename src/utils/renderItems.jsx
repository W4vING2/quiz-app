import HomePage from "../Pages/HomePage/HomePage.jsx";
import React from "react";
import QuizPage from "../Pages/QuizPage/QuizPage.jsx";

export const renderItems = (key) => {
  switch (key){
    case '1':
      return <HomePage/>
    case '2':
      return <QuizPage/>
    default:
      return ''
  }
}