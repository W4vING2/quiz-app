export const handleClick = (
  e,
  answer,
  remain,
  setCount,
  setIsSuccess,
  setIsError,
  count,
  setIndex,
  index,
) => {
  if (remain.correctAnswer === answer) {
    if (e.target instanceof HTMLButtonElement) {
      e.target.style.border = '1px solid green'
      e.target.style.color = 'green'
      e.target.querySelector('span').style.color = 'green'
    } else {
      e.target.style.color = 'green'
      e.target.closest('button').style.border = '1px solid green'
    }
    setIndex(index + 1)
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
    setIndex(index + 1)
    setIsError(true)
    setTimeout(() => {
      setIsError(false)
    }, 1000)
  }
}
