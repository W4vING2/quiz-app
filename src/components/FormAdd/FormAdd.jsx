import { Button, Card, Input, Radio } from 'antd'
import styles from './FormAdd.module.css'
import { useState } from 'react'
import { supabase } from '../../utils/supabase.js'

export default function FormAdd() {
  const [name, setName] = useState('')
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [radio, setRadio] = useState(1)
  const [create, setCreate] = useState(false)

  const submitForm = async () => {
    let correctAnswer
    if (radio === 1) {
      correctAnswer = first
    } else if (radio === 2) {
      correctAnswer = second
    } else {
      correctAnswer = third
    }

    const { data, error } = await supabase.from('questions').insert({
      question: name,
      answerFirst: first,
      answerSecond: second,
      answerThird: third,
      correctAnswer: correctAnswer,
    })

    setName('')
    setFirst('')
    setSecond('')
    setThird('')
    setRadio(1)
    setCreate(true)
  }

  return (
    <>
      {create ? (
        <h1>Successfully created!</h1>
      ) : (
        <Card
          title="Add a question"
          variant="borderless"
          style={{
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            placeholder="Enter the name of question"
            className={styles.input}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            placeholder="Enter the name of first answer"
            className={styles.input}
            value={first}
            onChange={(event) => setFirst(event.target.value)}
          />
          <Input
            placeholder="Enter the name of second answer"
            className={styles.input}
            value={second}
            onChange={(event) => setSecond(event.target.value)}
          />
          <Input
            placeholder="Enter the name of third answer"
            className={styles.input}
            value={third}
            onChange={(event) => setThird(event.target.value)}
          />
          <h2>Choose the correct answer: </h2>
          <Radio.Group
            name="radiogroup"
            defaultValue={1}
            value={radio}
            onChange={(e) => setRadio(e.target.value)}
            options={[
              { value: 1, label: 'First Answer' },
              { value: 2, label: 'Second Answer' },
              { value: 3, label: 'Third Answer' },
            ]}
          />
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <Button type="primary" onClick={submitForm}>
              Submit
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}
