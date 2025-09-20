import {Button} from "antd";
import {useState} from "react";
import {Spin} from "antd";
import styles from './QuizPage.module.css'

export default function QuizPage(){
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loaded = () => {
    setIsQuizOpen(true)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  return (
    <>
      {isQuizOpen && !isLoading ? (
        <h1>quiz is starting</h1>
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