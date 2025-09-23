import HomePage from '../Pages/HomePage/HomePage.jsx'
import React from 'react'
import QuizPage from '../Pages/QuizPage/QuizPage.jsx'
import AddPage from '../Pages/AddPage/AddPage.jsx'

export const RenderItems = (props) => {
  switch (props.keyValue) {
    case '1':
      return <HomePage />
    case '2':
      return <QuizPage />
    case '3':
      return <AddPage />
    default:
      return null
  }
}
