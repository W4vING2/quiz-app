import {Card, Button, Alert} from "antd";
import {useEffect, useLayoutEffect, useState} from "react";
import {handleClick} from "../../utils/handleClick.js";
import './Question.css'

export default function Question() {
  const [indexOfQuestion, setIndexOfQuestion] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions").then(response => response.json())
      .then(data => setQuestions(data))
  }, [])

  useLayoutEffect(() => {
      document.querySelectorAll('.answer').forEach((el) => {
        if (el.querySelector('img') !== null) return
        el.style.color = 'black'
        el.style.border = '1px solid black'
      })
      document.querySelectorAll('span').forEach((el) => {
        if (el.closest('.answer') !== null) el.style.color = 'black'
      })
    }, [questions[indexOfQuestion]])

    return (
      <>
        {questions[indexOfQuestion] === null || questions[indexOfQuestion] === undefined ? (
          <h1 className="heading">Total points of answers: {count}/{questions.length}</h1>
        ) : (
          <Card title={`Question #${questions[indexOfQuestion].key + 1}`}>
            <Card
              type="inner"
              title={questions[indexOfQuestion].question}
            >
              <Button
                className='answer'
                onClick={(e) => handleClick(e, questions[indexOfQuestion].answerFirst, questions[indexOfQuestion], indexOfQuestion, setIndexOfQuestion, setCount, setIsSuccess, setIsError, count)}
              >{questions[indexOfQuestion].answerFirst}</Button>
              <Button
                className="answer"
                onClick={(e) => handleClick(e, questions[indexOfQuestion].answerSecond, questions[indexOfQuestion], indexOfQuestion, setIndexOfQuestion, setCount, setIsSuccess, setIsError, count)}
              >{questions[indexOfQuestion].answerSecond}</Button>
              <Button
                className="answer"
                onClick={(e) => handleClick(e, questions[indexOfQuestion].answerThird, questions[indexOfQuestion], indexOfQuestion, setIndexOfQuestion, setCount, setIsSuccess, setIsError, count)}
              >{questions[indexOfQuestion].answerThird}</Button>
            </Card>
          </Card>
        )}
        {isSuccess ? (
          <Alert
            message="Correct answer"
            type="success"
            showIcon
            style={{
              marginTop: '20px',
              animation: 'translate 1s ease'
            }}
          />
        ) : ''}
        {isError ? (
          <Alert
            message="Incorrect answer"
            type="error"
            showIcon
            style={{
              marginTop: '20px',
              animation: 'translate 1s ease'
            }}
          />
        ) : ''}
      </>
    )
  }