export const handleClick = (
  e,
  answer,
  questionCard,
  indexOfQuestion,
  setIndexOfQuestion,
  setCount,
  setIsSuccess,
  setIsError,
  count,
) => {
  if (answer === questionCard.correctAnswer) {
    if (e.target instanceof HTMLButtonElement) {
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
    }, 1000)
  } else {
    if (e.target instanceof HTMLButtonElement) {
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
    }, 1000)
  }
}
