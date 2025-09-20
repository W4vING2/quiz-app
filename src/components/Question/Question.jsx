import {Card, Button, Alert} from "antd";
import {questionsData} from "../../utils/questionsData.js";
import {useEffect, useState} from "react";

export default function Question(){
  const [indexOfQuestion, setIndexOfQuestion] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [count, setCount] = useState(0)
  const questionCard = questionsData[indexOfQuestion]

  const handleClick = (answer, e) => {
    if (answer === questionCard.correctAnswer){
      if (e.target instanceof HTMLButtonElement){
        e.target.style.border = '1px solid green'
        e.target.style.color = 'green'
        e.target.querySelector('span').style.color = 'green'
      } else {
        e.target.style.color = 'green'
        e.target.closest('button').style.border = '1px solid green'
      }
      setIndexOfQuestion(indexOfQuestion + 1)
      setCount(count + 1)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      }, 2000)
    } else {
      if (e.target instanceof HTMLButtonElement){
        e.target.style.border = '1px solid red'
        e.target.style.color = 'red'
        e.target.querySelector('span').style.color = 'red'
      } else {
        e.target.style.color = 'red'
        e.target.closest('button').style.border = '1px solid red'
      }
      setIndexOfQuestion(indexOfQuestion + 1)
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 2000)
    }
  }

  useEffect(() => {
    const button = document.querySelectorAll('.answer')
    button.forEach((el) => {
      el.style.color = 'black'
      el.style.border = '1px solid black'
    })
    const span = document.querySelectorAll('span')
    span.forEach((el) => {
      if (el.closest('.answer') !== null) {
        el.style.color = 'black'
      } else{
        el.style.color = 'white'
      }
    })
  }, [questionCard])

  return (
    <>
      {questionCard === null || questionCard === undefined ? (
        <h1 style={{
          position: 'absolute',
          top: '50vh',
          left: '70vh'
        }}>Total points of answers: {count}/5</h1>
      ) : (
        <Card title={`question #${questionCard.key}`}>
          <Card type="inner" title={questionCard.question}>
            <Button className="answer" style={{
              width: '600px',
              marginBlock: '10px',
              height: '50px'
            }} onClick={(e) => handleClick(questionCard.answerFirst, e)}>{questionCard.answerFirst}</Button>
            <Button className="answer" style={{
              width: '600px',
              marginBlock: '10px',
              height: '50px'
            }} onClick={(e) => handleClick(questionCard.answerSecond, e)}>{questionCard.answerSecond}</Button>
            <Button className="answer" style={{
              width: '600px',
              marginBlock: '10px',
              height: '50px'
            }} onClick={(e) => handleClick(questionCard.answerThird, e)}>{questionCard.answerThird}</Button>
          </Card>
        </Card>
      )}
      {isSuccess ? (
        <Alert message="Correct answer" type="success" style={{
          marginTop: '20px',
          animation: 'translate 1s ease'
        }} showIcon />
      ) : ''}
      {isError ? (
        <Alert message="Incorrect answer" type="error" showIcon style={{
          marginTop: '20px',
          animation: 'translate 1s ease'
        }} />
      ) : ''}
    </>
  )
}