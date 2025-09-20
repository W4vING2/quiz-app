import styles from './HomePage.module.css'

export default function HomePage(){
  return (
      <div className={styles.div}>
        <h1>Welcome to quiz app!</h1>
        <p>Try to answer all questions and get the prize</p>
      </div>
  )
}