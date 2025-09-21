import {Button} from "antd";
import {useState} from "react";
import {Spin} from "antd";
import styles from './QuizPage.module.css'
import Question from "../../components/Question/Question.jsx";

export default function QuizPage(){
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loaded = () => {
    setIsQuizOpen(true)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }
  return (
    <>
      {isQuizOpen && !isLoading ? (
        <Question/>
      ) : (
        <section className={styles.section}>
          <Button type="primary" onClick={loaded}>Press if you`re ready</Button>
        </section>
      )}
      {isLoading ? (
        <Spin size="large" fullscreen={true}/>
      ) : ''}
    </>
  )
}