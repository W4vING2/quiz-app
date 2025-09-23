import { Card, Button, Alert } from 'antd'
import { useEffect, useLayoutEffect, useState } from 'react'
import { handleClick } from '../../utils/handleClick.js'
import './Question.css'
import { supabase } from '../../utils/supabase.js'

export default function Question() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const dataLoading = async () => {
      const { data } = await supabase.from('questions').select('*')

      const randomFive = [...data].sort(() => Math.random() - 0.5).slice(0, 5)

      setQuestions(randomFive)
    }
    dataLoading()
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
  }, [index])

  return (
    <>
      {questions[index] === undefined ? (
        <h1 className="heading">Total points of answers: {count}/5</h1>
      ) : (
        <Card title={`Question #${index + 1}`}>
          <Card type="inner" title={questions[index].question}>
            <Button
              className="answer"
              onClick={(e) =>
                handleClick(
                  e,
                  questions[index].answerFirst,
                  questions[index],
                  setCount,
                  setIsSuccess,
                  setIsError,
                  count,
                  setIndex,
                  index,
                )
              }
            >
              {questions[index].answerFirst}
            </Button>
            <Button
              className="answer"
              onClick={(e) =>
                handleClick(
                  e,
                  questions[index].answerSecond,
                  questions[index],
                  setCount,
                  setIsSuccess,
                  setIsError,
                  count,
                  setIndex,
                  index,
                )
              }
            >
              {questions[index].answerSecond}
            </Button>
            <Button
              className="answer"
              onClick={(e) =>
                handleClick(
                  e,
                  questions[index].answerThird,
                  questions[index],
                  setCount,
                  setIsSuccess,
                  setIsError,
                  count,
                  setIndex,
                  index,
                )
              }
            >
              {questions[index].answerThird}
            </Button>
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
            animation: 'translate 1s ease',
          }}
        />
      ) : (
        ''
      )}
      {isError ? (
        <Alert
          message="Incorrect answer"
          type="error"
          showIcon
          style={{
            marginTop: '20px',
            animation: 'translate 1s ease',
          }}
        />
      ) : (
        ''
      )}
    </>
  )
}
